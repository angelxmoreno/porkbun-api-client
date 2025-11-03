import { DnsApi, DomainApi, HealthApi, SslApi } from './api';
import { PorkbunHttpClient } from './PorkbunHttpClient';
import type { PorkbunConfig } from './types';

export class PorkbunApiClient {
    protected httpClient: PorkbunHttpClient;
    public domain: DomainApi;
    public dns: DnsApi;
    public ssl: SslApi;
    public health: HealthApi;

    constructor(config: PorkbunConfig) {
        this.httpClient = new PorkbunHttpClient(config);
        this.domain = new DomainApi(this.httpClient);
        this.dns = new DnsApi(this.httpClient);
        this.ssl = new SslApi(this.httpClient);
        this.health = new HealthApi(this.httpClient);
    }
}
