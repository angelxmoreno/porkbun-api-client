import type { PorkbunHttpClient } from '../PorkbunHttpClient';

/**
 * An abstract base class for all API-specific classes.
 * It holds a reference to the HTTP client and provides a common constructor.
 */
export abstract class BaseApi {
    /**
     * The HTTP client used to make requests to the Porkbun API.
     * @protected
     */
    httpClient: PorkbunHttpClient;

    /**
     * Creates an instance of a BaseApi-derived class.
     * @param httpClient The HTTP client instance.
     */
    constructor(httpClient: PorkbunHttpClient) {
        this.httpClient = httpClient;
    }
}
