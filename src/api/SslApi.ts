import type { SslRetrieveResponse } from '../types';
import { BaseApi } from './BaseApi';

/**
 * The shape of the request body for retrieving an SSL certificate bundle.
 */
export interface SslRetrieveRequest {
    /** The domain for which to retrieve the SSL bundle. */
    domain: string;
    [key: string]: unknown;
}

/**
 * Provides access to the SSL-related endpoints of the Porkbun API.
 */
export class SslApi extends BaseApi {
    /**
     * Retrieves the SSL certificate bundle for a domain.
     * @param options - The domain for which to retrieve the SSL bundle.
     * @returns A promise that resolves to the SSL certificate bundle.
     * @example
     * ```typescript
     * const response = await client.ssl.retrieve({ domain: 'example.com' });
     * console.log(response.bundle);
     * ```
     */
    retrieve(options: SslRetrieveRequest): Promise<SslRetrieveResponse> {
        const { domain } = options;
        return this.httpClient.makeRequest<SslRetrieveResponse>(`/ssl/retrieve/${domain}`);
    }
}
