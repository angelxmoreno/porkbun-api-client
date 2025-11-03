import type { PorkbunHttpClient } from '../PorkbunHttpClient';

export abstract class BaseApi {
    httpClient: PorkbunHttpClient;

    constructor(httpClient: PorkbunHttpClient) {
        this.httpClient = httpClient;
    }
}
