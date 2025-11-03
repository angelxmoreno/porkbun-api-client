import axios, { type AxiosInstance } from 'axios';
import { PorkbunApiError } from './PorkbunApiError';
import type { ErrorResponse, PorkbunConfig, SuccessResponse } from './types';

const defaultHostnames = {
    0: 'https://api.porkbun.com/api/json/v3',
    1: 'https://api-ipv4.porkbun.com/api/json/v3',
};

/**
 * A low-level HTTP client for making authenticated requests to the Porkbun API.
 * This class handles the boilerplate of authentication and error handling.
 * It is used internally by the API-specific classes like `DnsApi` and `DomainApi`.
 */
export class PorkbunHttpClient {
    protected apiKey: string;
    protected secretApiKey: string;
    protected baseUrl: string;
    protected http: AxiosInstance;

    /**
     * Creates an instance of the PorkbunHttpClient.
     * @param config - The configuration options for the client.
     */
    constructor({ apiKey, secretApiKey, baseUrl, forceIPv4 = false, http }: PorkbunConfig) {
        this.apiKey = apiKey;
        this.secretApiKey = secretApiKey;
        this.baseUrl = baseUrl || (forceIPv4 ? defaultHostnames[1] : defaultHostnames[0]);
        this.http = http || axios.create();
    }

    /**
     * Makes an authenticated POST request to a specified Porkbun API endpoint.
     * @template T - The expected shape of the data in a successful response.
     * @template B - The shape of the request body.
     * @param endpoint - The API endpoint to call (e.g., '/dns/create/example.com').
     * @param data - The data to send in the request body.
     * @returns A promise that resolves to the successful API response data.
     * @throws {PorkbunApiError} When the API returns a status of "ERROR".
     * @throws {Error} When a network or other HTTP error occurs.
     */
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
