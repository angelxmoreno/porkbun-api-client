import axios, { type AxiosInstance } from 'axios';
import { PorkbunApiError } from './PorkbunApiError';
import type { ErrorResponse, PorkbunConfig, SuccessResponse } from './types';

const defaultHostnames = {
    0: 'https://api.porkbun.com/api/json/v3',
    1: 'https://api-ipv4.porkbun.com/api/json/v3',
};

export class PorkbunHttpClient {
    protected apiKey: string;
    protected secretApiKey: string;
    protected baseUrl: string;
    protected http: AxiosInstance;

    constructor({ apiKey, secretApiKey, baseUrl, forceIPv4 = false, http }: PorkbunConfig) {
        this.apiKey = apiKey;
        this.secretApiKey = secretApiKey;
        this.baseUrl = baseUrl || (forceIPv4 ? defaultHostnames[1] : defaultHostnames[0]);
        this.http = http || axios.create();
    }

    async makeRequest<T extends Record<string, unknown>, B extends Record<string, unknown> = Record<string, unknown>>(
        endpoint: string,
        data?: B
    ): Promise<SuccessResponse<T>> {
        const url = `${this.baseUrl}${endpoint}`;
        const body = { apikey: this.apiKey, secretapikey: this.secretApiKey, ...data };

        try {
            const response = await this.http.post<SuccessResponse<T> | ErrorResponse>(url, body);
            const responseData = response.data;

            if (responseData.status === 'ERROR') {
                throw new PorkbunApiError(responseData.message || 'Unknown API Error');
            }

            return responseData;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(`HTTP Error: ${error.message}`);
            }
            throw error;
        }
    }
}
