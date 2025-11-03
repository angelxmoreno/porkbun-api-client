# Plan: TypeScript Porkbun API Client (v3)

This plan outlines the steps to create a robust, typed, and cacheable Porkbun API v3 client using TypeScript, Axios, and Keyv, built with **Bun**.

## 1. Project Setup & Core Dependencies

1.  **Initialize Project:**
    *   `bun init` (This will create `package.json`, `tsconfig.json`, and other starter files)
    *   `git init`
    *   Create `.gitignore` (add `node_modules`, `dist`, `.env`, `bun.lockb`)
2.  **Install Dependencies:**
    *   **Core:** `bun add axios keyv`
    *   **Dev:** `bun add -d @types/bun axios-mock-adapter`
    *   **Linting (Recommended):** `bun add -d eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier`
3.  **Configure TypeScript (`tsconfig.json`):**
    *   The `bun init` command will create a good starting `tsconfig.json`.
    *   Ensure these key options are set:
        *   `"target": "ES2020"` (or newer)
        *   `"module": "CommonJS"` (Since this is an npm module, CommonJS is safest for compatibility, but `"NodeNext"` is also an option)
        *   `"strict": true` (Crucial for a typed library)
        *   `"declaration": true` (To generate `.d.ts` files for consumers)
        *   `"outDir": "./dist"`
        *   `"rootDir": "./src"`
        *   `"types": ["bun-types"]` (For `bun:test` support)
4.  **Setup `package.json` Scripts:**
    *   `bun init` will add some scripts. Update them to the following:

```json
"scripts": {
  "build": "tsc",
  "test": "bun test",
  "lint": "eslint . --ext .ts",
  "prepublishOnly": "bun run build"
}
```

## 2. Core Architecture: The PorkbunClient

Create `src/PorkbunClient.ts`. This class will be the main entry point.

### PorkbunClient Class Structure

```typescript
import axios, { AxiosInstance } from 'axios';
import Keyv from 'keyv';
import { PorkbunConfig, PingResponse /*, ...other types */ } from './types';

// Custom error for API-specific issues
export class PorkbunApiError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'PorkbunApiError';
    }
}

export class PorkbunClient {
    protected config: PorkbunConfig;
    protected http: AxiosInstance;
    protected cache?: Keyv;

    constructor(config: PorkbunConfig) {
        this.config = {
            ...config,
            baseUrl: config.baseUrl || 'https://porkbun.com/api/json/v3',
        };

        // The cache is passed in, allowing users to configure
        // their own Keyv store (e.g., Redis, SQLite, or in-memory)
        this.cache = config.cache;

        this.http = axios.create();
    }

    // --- Core Request Handler ---

    /**
     * The core method for making all API requests.
     * It handles authentication and error parsing.
     */
    protected async request<T>(endpoint: string, data: any = {}): Promise<T> {
        const url = `${this.config.baseUrl}${endpoint}`;

        // All Porkbun requests are POST and require auth keys in the body
        const body = {
            apikey: this.config.apiKey,
            secretapikey: this.config.secretApiKey,
            ...data,
        };

        try {
            const response = await this.http.post(url, body);
            const responseData = response.data;

            // Porkbun API returns "ERROR" status on failure
            if (responseData.status === 'ERROR') {
                throw new PorkbunApiError(responseData.message || 'Unknown API Error');
            }

            return responseData as T;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(`HTTP Error: ${error.message}`);
            }
            // Re-throw PorkbunApiError or other runtime errors
            throw error;
        }
    }

    // --- Core Caching Handler ---

    /**
     * A wrapper around the `request` method that adds caching.
     * `ttl` is in milliseconds.
     */
    protected async cachedRequest<T>(
        key: string,
        ttl: number,
        fetchFn: () => Promise<T>
    ): Promise<T> {
        if (!this.cache) {
            return fetchFn();
        }

        const cachedData = await this.cache.get(key);
        if (cachedData) {
            return cachedData as T;
        }

        const freshData = await fetchFn();
        await this.cache.set(key, freshData, ttl);
        return freshData;
    }

    // --- Public API Methods (Example) ---

    /**
     * Pings the API to check credentials and get your IP.
     */
    public async ping(): Promise<PingResponse> {
        // This endpoint is not rate-limited, but caching is still fast.
        const fetchFn = () => this.request<PingResponse>('/ping');
        // Cache for 5 minutes (300000 ms)
        return this.cachedRequest('ping', 300000, fetchFn);
    }
}
```

## 3. TypeScript Definitions (`src/types.ts`)

This is the most critical part for a "TypeScript" client. You must define interfaces for *all* API inputs and outputs.

*   Start by defining the config and base responses.
*   Go through the [API Documentation](https://porkbun.com/api/json/v3/documentation) page by page and create an interface for *every* "SUCCESS" response.

```typescript
// src/types.ts
import Keyv from 'keyv';

// --- Base Types ---

export interface PorkbunConfig {
    apiKey: string;
    secretApiKey: string;
    baseUrl?: string;
    cache?: Keyv;
}

export interface BaseSuccessResponse {
    status: 'SUCCESS';
}

export interface BaseErrorResponse {
    status: 'ERROR';
    message: string;
}

// --- API-Specific Types ---

// /ping
export interface PingResponse extends BaseSuccessResponse {
    yourIp: string;
}

// /domain/pricing
export interface DomainPricing {
    registration: string;
    renewal: string;
    transfer: string;
    // ... other properties like restore, trade
}
export interface PricingResponse extends BaseSuccessResponse {
    pricing: Record<string, DomainPricing>;
}

// /dns/retrieve/{domain}
export interface DnsRecord {
    id: string;
    name: string;
    type: string;
    content: string;
    ttl: string;
    prio: string;
    notes?: string;
}
export interface RetrieveRecordsResponse extends BaseSuccessResponse {
    records: DnsRecord[];
}

// /dns/create/{domain}
export interface CreateRecordBody {
    name: string; // The subdomain
    type: 'A' | 'MX' | 'CNAME' | 'TXT' | 'AAAA' | 'NS' | 'SRV' | 'ALIAS' | 'CAA' | 'TLSA' | 'DS';
    content: string;
    ttl?: string;
    prio?: string;
}
export interface CreateRecordResponse extends BaseSuccessResponse {
    id: number;
}

// ... continue for ALL other endpoints (SSL, Domain List, etc.)
```

## 4. Implementing API Endpoint Groups

Instead of one massive `PorkbunClient` class, you can organize endpoints into logical groups.

```typescript
// src/PorkbunClient.ts (continued)
import { DnsApi } from './api/DnsApi';
import { DomainApi } from './api/DomainApi';

// This interface allows passing the cache instance to sub-clients
// for cache invalidation (e.g., on createRecord)
export interface RequestHandlers {
    request: <T>(endpoint: string, data?: any) => Promise<T>;
    cachedRequest: <T>(
        key: string,
        ttl: number,
        fetchFn: () => Promise<T>
    ) => Promise<T>;
    cache?: Keyv;
}

export class PorkbunClient {
    // ... (constructor, request methods) ...

    public readonly dns: DnsApi;
    public readonly domain: DomainApi;

    constructor(config: PorkbunConfig) {
        // ... (rest of constructor) ...

        // Pass the core request handlers to the sub-clients
        const requestHandlers: RequestHandlers = {
            request: this.request.bind(this),
            cachedRequest: this.cachedRequest.bind(this),
            cache: this.cache,
        };

        this.dns = new DnsApi(requestHandlers);
        this.domain = new DomainApi(requestHandlers);
    }

    // ... (ping method) ...
}
```

**Example Sub-Client (`src/api/DnsApi.ts`):**

```typescript
// src/api/DnsApi.ts
import {
    CreateRecordBody, CreateRecordResponse,
    RetrieveRecordsResponse, DnsRecord
} from '../types';
import { RequestHandlers } from '../PorkbunClient';

export class DnsApi {
    protected req: RequestHandlers;

    constructor(req: RequestHandlers) {
        this.req = req;
    }

    /**
     * Retrieves all DNS records for a domain.
     * @param domain The domain name (e.g., "example.com")
     * @param ttl Cache Time-to-Live in milliseconds. Defaults to 1 hour.
     */
    public async getAllRecords(
        domain: string,
        ttl: number = 3600000
    ): Promise<DnsRecord[]> {
        const endpoint = `/dns/retrieve/${domain}`;
        const key = `dns:${domain}`;

        const fetchFn = async () => {
            const response = await this.req.request<RetrieveRecordsResponse>(endpoint);
            return response.records;
        };

        return this.req.cachedRequest(key, ttl, fetchFn);
    }

    /**
     * Creates a new DNS record.
     * Note: This method should NOT be cached.
     * @param domain The domain name (e.g., "example.com")
     * @param record The record data to create
     */
    public async createRecord(
        domain: string,
        record: CreateRecordBody
    ): Promise<CreateRecordResponse> {
        const endpoint = `/dns/create/${domain}`;

        // After creating, we must invalidate the cache for this domain
        if (this.req.cache) {
            await this.req.cache.delete(`dns:${domain}`);
        }

        return this.req.request<CreateRecordResponse>(endpoint, record);
    }

    // ... implement editRecord, deleteRecord, etc.
    // Remember to invalidate the cache on all edit/delete methods.
}
```

## 5. Testing Strategy (with `bun:test`)

Use `bun:test` for running tests and `axios-mock-adapter` to test your client without making real API calls.

**Example (`src/PorkbunClient.test.ts`):**

```typescript
import { describe, it, expect, beforeEach, afterEach, spyOn } from 'bun:test';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Keyv from 'keyv';
import { PorkbunClient, PorkbunApiError } from './PorkbunClient';
// Import sub-clients if testing them directly
// import { DomainApi } from './api/DomainApi';

describe('PorkbunClient', () => {
    let client: PorkbunClient;
    let mock: MockAdapter;
    let cache: Keyv;

    const config = { apiKey: 'pk_test', secretApiKey: 'sk_test' };

    beforeEach(() => {
        mock = new MockAdapter(axios);
        cache = new Keyv(); // In-memory cache for testing
        client = new PorkbunClient({ ...config, cache });
    });

    afterEach(() => {
        mock.reset();
    });

    it('should return IP on successful ping', async () => {
        const ip = '1.2.3.4';
        const mockResponse = { status: 'SUCCESS', yourIp: ip };

        // Mock the POST request
        mock.onPost('https://porkbun.com/api/json/v3/ping').reply(200, mockResponse);

        const res = await client.ping();
        expect(res.yourIp).toBe(ip);
    });

    it('should throw PorkbunApiError on API error', async () => {
        const mockResponse = { status: 'ERROR', message: 'Auth error' };
        mock.onPost('https://porkbun.com/api/json/v3/ping').reply(200, mockResponse);

        // Expect the promise to be rejected with the custom error
        await expect(client.ping()).rejects.toThrow(PorkbunApiError);
        await expect(client.ping()).rejects.toThrow('Auth error');
    });

    it('should cache results', async () => {
        // This test assumes a DomainApi is implemented and attached to client.domain
        // We'll mock the pricing endpoint
        const mockResponse = { status: 'SUCCESS', pricing: { com: { registration: "10.00" } } };
        mock.onPost('https://porkbun.com/api/json/v3/domain/pricing').reply(200, mockResponse);

        // Spy on the cache
        const cacheSetSpy = spyOn(cache, 'set');

        // Create a dummy getPricing method on the client for this test
        // In the real impl, this would be on client.domain.getPricing
        client.domain.getPricing = (ttl: number) => {
            const fetchFn = () => client['request']<any>('/domain/pricing');
            return client['cachedRequest']('pricing', ttl, fetchFn);
        };

        // First call (should hit API and set cache)
        await client.domain.getPricing(60000);
        expect(mock.history.post.length).toBe(1);
        expect(cacheSetSpy).toHaveBeenCalledTimes(1);

        // Second call (should hit cache)
        await client.domain.getPricing(60000);
        expect(mock.history.post.length).toBe(1); // No new API call
        expect(cacheSetSpy).toHaveBeenCalledTimes(1); // No new cache set
    });
});
```

## 6. Documentation & Publishing

1.  **`README.md`:** This is your most important piece of documentation.
    *   **Installation:** `bun add your-package-name`
    *   **Basic Usage:** Show how to import, initialize the client, and call a simple method.
    *   **Cache Usage:** Show an example of initializing with `keyv` and a Redis/SQLite store (e.g., `bun add @keyv/redis`).
    *   **API Reference:** List the main methods (e.g., `client.dns.getAllRecords(...)`).
2.  **TSDoc Comments:** Add TSDoc comments (`/** ... */`) to all public classes and methods. This enables editor autocomplete and allows you to auto-generate documentation.
3.  **Publish:**
    *   Run `bun run build`.
    *   Run `npm publish` (make sure your `package.json` "name" is unique and you are logged into npm).

This plan gives you a clear path from setup to a fully functional, testable, and distributable library. Good luck!
