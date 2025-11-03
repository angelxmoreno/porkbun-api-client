import type { PingResponse } from '../types';
import { BaseApi } from './BaseApi';

/**
 * Provides access to the health-related endpoints of the Porkbun API.
 */
export class HealthApi extends BaseApi {
    /**
     * Pings the API to check credentials and get your IP address.
     * This is a useful method for testing your API credentials.
     * @returns A promise that resolves to the ping response.
     * @example
     * ```typescript
     * const response = await client.health.ping();
     * console.log(response.yourIp);
     * ```
     */
    async ping(): Promise<PingResponse> {
        return await this.httpClient.makeRequest<PingResponse>('/ping');
    }
}
