import { afterEach, beforeEach, describe, expect, it } from 'bun:test';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { PorkbunApiError, PorkbunHttpClient, type SuccessResponse } from '../../src';

describe('PorkbunHttpClient', () => {
    let mock: MockAdapter;
    let httpClient: PorkbunHttpClient;

    const config = {
        apiKey: 'test_api_key',
        secretApiKey: 'test_secret_api_key',
        baseUrl: 'https://api.example.com/v3',
    };

    beforeEach(() => {
        mock = new MockAdapter(axios);
        httpClient = new PorkbunHttpClient(config);
    });

    afterEach(() => {
        mock.restore();
    });

    it('should construct the correct URL and include API keys in the body', async () => {
        const endpoint = '/test';
        const requestData = { param1: 'value1' };
        const expectedBody = {
            apikey: config.apiKey,
            secretapikey: config.secretApiKey,
            ...requestData,
        };
        const mockResponse = { status: 'SUCCESS', data: 'test_data' };

        mock.onPost(`${config.baseUrl}${endpoint}`).reply((config) => {
            expect(JSON.parse(config.data)).toEqual(expectedBody);
            return [200, mockResponse];
        });

        await httpClient.makeRequest(endpoint, requestData);
    });

    it('should return data on successful API call', async () => {
        const endpoint = '/success';
        const mockResponse: SuccessResponse<Record<string, unknown>> = {
            status: 'SUCCESS',
            message: 'OK',
            someData: 123,
        };

        mock.onPost(`${config.baseUrl}${endpoint}`).reply(200, mockResponse);

        const response = await httpClient.makeRequest(endpoint);
        expect(response).toEqual(mockResponse);
    });

    it('should throw PorkbunApiError on API error response', async () => {
        const endpoint = '/error';
        const errorMessage = 'Invalid API Key';
        const mockErrorResponse = { status: 'ERROR', message: errorMessage };

        mock.onPost(`${config.baseUrl}${endpoint}`).reply(200, mockErrorResponse);

        expect(httpClient.makeRequest(endpoint)).rejects.toThrow(PorkbunApiError);
        expect(httpClient.makeRequest(endpoint)).rejects.toThrow(errorMessage);
    });

    it('should throw generic Error on network error', async () => {
        const endpoint = '/network-error';

        mock.onPost(`${config.baseUrl}${endpoint}`).networkError();

        expect(httpClient.makeRequest(endpoint)).rejects.toThrow('HTTP Error: Network Error');
    });

    it('should use default hostnames if baseUrl is not provided', async () => {
        const clientWithoutBaseUrl = new PorkbunHttpClient({ apiKey: 'key', secretApiKey: 'secret' });
        const endpoint = '/default';
        const mockResponse: SuccessResponse<Record<string, unknown>> = { status: 'SUCCESS' };

        mock.onPost('https://api.porkbun.com/api/json/v3/default').reply(200, mockResponse);

        expect(clientWithoutBaseUrl.makeRequest(endpoint)).resolves.toEqual(mockResponse);
    });

    it('should use IPv4 hostname if forceIPv4 is true and baseUrl is not provided', async () => {
        const clientForceIPv4 = new PorkbunHttpClient({ apiKey: 'key', secretApiKey: 'secret', forceIPv4: true });
        const endpoint = '/ipv4';
        const mockResponse: SuccessResponse<Record<string, unknown>> = { status: 'SUCCESS' };

        mock.onPost('https://api-ipv4.porkbun.com/api/json/v3/ipv4').reply(200, mockResponse);

        expect(clientForceIPv4.makeRequest(endpoint)).resolves.toEqual(mockResponse);
    });
});
