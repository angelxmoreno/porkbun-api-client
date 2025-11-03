import { describe, expect, it, mock } from 'bun:test';
import type { PorkbunHttpClient, PricingGetResponse } from '../../src';
import { PricingApi } from '../../src';

describe('PricingApi', () => {
    it('should call makeRequest with the correct endpoint for get', async () => {
        const expectedResponse: PricingGetResponse = {
            status: 'SUCCESS',
            pricing: {
                design: {
                    registration: '35.58',
                    renewal: '35.58',
                    transfer: '35.58',
                },
                com: {
                    registration: '9.68',
                    renewal: '9.68',
                    transfer: '9.68',
                },
            },
        };
        const mockHttpClient = {
            makeRequest: mock(async () => expectedResponse),
        } as unknown as PorkbunHttpClient;

        const pricingApi = new PricingApi(mockHttpClient);
        const response = await pricingApi.get();

        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/pricing/get');
        expect(response).toEqual(expectedResponse);
    });
});
