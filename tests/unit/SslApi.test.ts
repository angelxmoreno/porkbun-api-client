import { beforeEach, describe, expect, it, mock } from 'bun:test';
import type { PorkbunHttpClient } from '../../src';
import { SslApi } from '../../src';

describe('SslApi', () => {
    let mockHttpClient: PorkbunHttpClient;
    let sslApi: SslApi;

    beforeEach(() => {
        mockHttpClient = {
            makeRequest: mock(async () => ({ status: 'SUCCESS' })),
        } as unknown as PorkbunHttpClient;
        sslApi = new SslApi(mockHttpClient);
    });

    it('should call makeRequest for retrieve with correct endpoint', async () => {
        const options = { domain: 'example.com' };
        await sslApi.retrieve(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/ssl/retrieve/example.com');
    });
});
