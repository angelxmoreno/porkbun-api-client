# Porkbun (v3) API Client

A modern, typed, and cacheable TypeScript client for the [Porkbun v3 API](https://porkbun.com/api/json/v3/documentation).

Built with axios for requests and Keyv for flexible caching.

## Features

*   **Fully Typed:** Complete TypeScript definitions for all API endpoints and models.
*   **Flexible Caching:** Uses [Keyv](https://github.com/jaredwray/keyv) to support any cache backend (in-memory, Redis, SQLite, etc.).
*   **Modern:** Built with `axios` and modern `async/await` syntax.
*   **Organized:** API endpoints are grouped into logical clients (dns, domain, ssl, etc.).
*   **Error Handling:** Throws custom `PorkbunApiError` for API-level failures.
*   **Fast:** Built and tested with [Bun](https://bun.sh/).

## Installation

```bash
bun add porkbun-client
```

Or with `npm`/`yarn`:

```bash
npm install porkbun-client
yarn add porkbun-client
```

## Basic Usage

Initialize the client with your API and Secret API keys. It's recommended to load these from environment variables.

```typescript
import { PorkbunClient } from 'porkbun-client';

const client = new PorkbunClient({
    apiKey: process.env.PORKBUN_API_KEY!,
    secretApiKey: process.env.PORKBUN_SECRET_API_KEY!,
});

async function checkIp() {
    try {
        // Ping the API
        const { yourIp } = await client.ping();
        console.log(`Porkbun sees my IP as: ${yourIp}`);
    } catch (error) {
        console.error('Failed to ping API:', error);
    }
}

checkIp();
```

## Caching

This library uses [Keyv](https://github.com/jaredwray/keyv) for caching. You can pass *any* Keyv-compatible store to the client constructor.

By default, no cache is used.

### In-Memory Cache

For simple in-memory caching, just install `keyv` and pass a new instance.

```bash
bun add keyv
```

```typescript
import { PorkbunClient } from 'porkbun-client';
import Keyv from 'keyv';

const client = new PorkbunClient({
    apiKey: process.env.PORKBUN_API_KEY!,
    secretApiKey: process.env.PORKBUN_SECRET_API_KEY!,
    // Enable in-memory cache
    cache: new Keyv(),
});

// First call will hit the API
const records1 = await client.dns.getAllRecords('example.com');

// Second call will return from the in-memory cache
const records2 = await client.dns.getAllRecords('example.com');
```

### Persistent Cache (e.g., Redis)

For a more robust, persistent cache, you can use any Keyv adapter, like `@keyv/redis`.

```bash
bun add keyv @keyv/redis
```

```typescript
import { PorkbunClient } from 'porkbun-client';
import Keyv from 'keyv';
import KeyvRedis from '@keyv/redis';

// Connect to your Redis instance
const redisStore = new KeyvRedis('redis://user:pass@localhost:6379');

const client = new PorkbunClient({
    apiKey: process.env.PORKBUN_API_KEY!,
    secretApiKey: process.env.PORKBUN_SECRET_API_KEY!,
    // Enable Redis-backed cache
    cache: new Keyv({ store: redisStore }),
});

console.log('Using Redis-backed cache for API requests.');
```

## API Reference

API endpoints are grouped by functionality.

### DNS Management (`client.dns`)

#### Get All Records

Retrieves all DNS records for a domain. This method is cached by default (if a cache is provided) for 1 hour.

You can override the cache TTL (in milliseconds) by passing a second argument.

```typescript
// Default 1-hour cache
const records = await client.dns.getAllRecords('example.com');

// Override cache TTL to 5 minutes
const quickCacheRecords = await client.dns.getAllRecords('example.com', 300000);
```

#### Create a Record

Creates a new DNS record. This method is **not** cached and will **automatically invalidate** the `getAllRecords` cache for this domain.

```typescript
import { DnsRecordType } from 'porkbun-client'; // (Assuming you export the type)

const newRecord = await client.dns.createRecord('example.com', {
    name: 'www', // The subdomain (e.g., 'www' for www.example.com)
    type: 'A',
    content: '1.2.3.4',
    ttl: '300', // TTL in seconds
});

console.log(`Created record with ID: ${newRecord.id}`);
```

### Domain Management (`client.domain`)

#### Get Domain Pricing

Retrieves the pricing list for all TLDs.

```typescript
// Cache pricing for 24 hours
const pricing = await client.domain.getPricing(86400000);

console.log('Price to register .com:', pricing['com'].registration);
```

*(...add more examples as you implement `DomainApi`, `SslApi`, etc...)*

## Error Handling

If the Porkbun API returns an error (e.g., "Invalid API Key" or "Domain not found"), the client will throw a `PorkbunApiError`.

```typescript
import { PorkbunClient, PorkbunApiError } from 'porkbun-client';

const client = new PorkbunClient({ apiKey: 'bad', secretApiKey: 'key' });

try {
    await client.ping();
} catch (error) {
    if (error instanceof PorkbunApiError) {
        // Error came from the Porkbun API
        console.error(`API Error: ${error.message}`);
    } else {
        // Network error or other issue
        console.error(`HTTP/Network Error: ${error.message}`);
    }
}
```

## Development

This project uses [Bun](https://bun.sh/) for development and testing.

1.  **Install dependencies:**
    ```bash
    bun install
    ```
2.  **Run tests:**
    ```bash
    bun test
    ```
3.  **Build for production:**
    ```bash
    bun run build
    ```

## License

MIT