import { describe, expect, it } from 'bun:test';
import { DnsApi, DomainApi, HealthApi, PorkbunApiClient, PorkbunHttpClient, SslApi } from '../../src';

class MockPorkbunApiClient extends PorkbunApiClient {
    public declare httpClient: PorkbunHttpClient;
}

describe('PorkbunApiClient', () => {
    it('should correctly initialize all API modules', () => {
        const config = {
            apiKey: 'test_api_key',
            secretApiKey: 'test_secret_api_key',
        };

        const client = new MockPorkbunApiClient(config);

        expect(client.httpClient).toBeInstanceOf(PorkbunHttpClient);
        expect(client.dns).toBeInstanceOf(DnsApi);
        expect(client.domain).toBeInstanceOf(DomainApi);
        expect(client.ssl).toBeInstanceOf(SslApi);
        expect(client.health).toBeInstanceOf(HealthApi);

        // Ensure that the http client instance is passed to all API modules
        expect(client.dns.httpClient).toBe(client.httpClient);
        expect(client.domain.httpClient).toBe(client.httpClient);
        expect(client.ssl.httpClient).toBe(client.httpClient);
        expect(client.health.httpClient).toBe(client.httpClient);
    });
});
