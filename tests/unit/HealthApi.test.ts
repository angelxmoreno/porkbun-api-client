import { describe, expect, it, mock } from 'bun:test';
import type { PorkbunHttpClient } from '../../src';
import { HealthApi } from '../../src';

describe('HealthApi', () => {
    it('should call makeRequest with the correct endpoint for ping', async () => {
        const mockHttpClient = {
            makeRequest: mock(async () => ({ status: 'SUCCESS', yourIp: '127.0.0.1' })),
        } as unknown as PorkbunHttpClient;

        const healthApi = new HealthApi(mockHttpClient);
        const response = await healthApi.ping();

        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/ping');
        expect(response).toEqual({ status: 'SUCCESS', yourIp: '127.0.0.1' });
    });
});
