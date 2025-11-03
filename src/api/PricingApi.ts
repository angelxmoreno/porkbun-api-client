import type { PricingGetResponse } from '../types';
import { BaseApi } from './BaseApi';

export class PricingApi extends BaseApi {
    async get(): Promise<PricingGetResponse> {
        return await this.httpClient.makeRequest<PricingGetResponse>('/pricing/get');
    }
}
