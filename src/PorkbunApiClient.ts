import { DnsApi, DomainApi, HealthApi, SslApi } from './api';
import { PorkbunHttpClient } from './PorkbunHttpClient';
import type { PorkbunConfig } from './types';

/**
 * The main client for interacting with the Porkbun API.
 * It provides access to all API endpoints through its properties.
 *
 * @example
 * ```typescript
 * import { PorkbunApiClient } from 'porkbun-api-client';
 *
 * const client = new PorkbunApiClient({
 *   apiKey: process.env.PORKBUN_API_KEY!,
 *   secretApiKey: process.env.PORKBUN_SECRET_API_KEY!,
 * });
 *
 * const { yourIp } = await client.health.ping();
 * console.log(`My IP is: ${yourIp}`);
 * ```
 */
export class PorkbunApiClient {
    /**
     * The low-level HTTP client used to make requests.
     * @protected
     */
    protected httpClient: PorkbunHttpClient;
    /** Provides access to the domain-related endpoints. */
    public domain: DomainApi;
    /** Provides access to the DNS-related endpoints. */
    public dns: DnsApi;
    /** Provides access to the SSL-related endpoints. */
    public ssl: SslApi;
    /** Provides access to the health-related endpoints. */
    public health: HealthApi;

    /**
     * Creates an instance of the PorkbunApiClient.
     * @param config - The configuration options for the client.
     */
    constructor(config: PorkbunConfig) {
        this.httpClient = new PorkbunHttpClient(config);
        this.domain = new DomainApi(this.httpClient);
        this.dns = new DnsApi(this.httpClient);
        this.ssl = new SslApi(this.httpClient);
        this.health = new HealthApi(this.httpClient);
    }
}
