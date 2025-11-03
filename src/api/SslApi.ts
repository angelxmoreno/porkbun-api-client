// SslApi.ts

import type { SslRetrieveResponse } from '../types';
import { BaseApi } from './BaseApi';

// --- Request Types ---
export interface SslRetrieveRequest {
    domain: string;
    [key: string]: unknown;
}

// --- Class ---
export class SslApi extends BaseApi {
    retrieve(options: SslRetrieveRequest): Promise<SslRetrieveResponse> {
        const { domain } = options;
        return this.httpClient.makeRequest<SslRetrieveResponse>(`/ssl/retrieve/${domain}`);
    }
}
