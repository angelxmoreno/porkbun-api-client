import type { PingResponse } from '../types';
import { BaseApi } from './BaseApi';

export class HealthApi extends BaseApi {
    async ping(): Promise<PingResponse> {
        return await this.httpClient.makeRequest<PingResponse>('/ping');
    }
}
