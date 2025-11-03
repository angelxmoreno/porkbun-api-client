import { beforeEach, describe, expect, it, mock } from 'bun:test';
import type { PorkbunHttpClient } from '../../src';
import { type AddUrlForwardRequest, DomainApi, type ListAllDomainsRequest } from '../../src';

describe('DomainApi', () => {
    let mockHttpClient: PorkbunHttpClient;
    let domainApi: DomainApi;

    beforeEach(() => {
        mockHttpClient = {
            makeRequest: mock(async () => ({ status: 'SUCCESS' })),
        } as unknown as PorkbunHttpClient;
        domainApi = new DomainApi(mockHttpClient);
    });

    it('should call makeRequest for updateNameServers with correct endpoint and body', async () => {
        const options = { domain: 'example.com', ns: ['ns1.example.com', 'ns2.example.com'] };
        await domainApi.updateNameServers(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/domain/updateNs/example.com', { ns: options.ns });
    });

    it('should call makeRequest for getNameServers with correct endpoint', async () => {
        const options = { domain: 'example.com' };
        await domainApi.getNameServers(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/domain/getNs/example.com');
    });

    it('should call makeRequest for listAll with correct endpoint and body', async () => {
        const options: ListAllDomainsRequest = { start: 0, includeLabels: 'yes' };
        await domainApi.listAll(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/domain/listAll', options);
    });

    it('should call makeRequest for checkDomain with correct endpoint', async () => {
        const options = { domain: 'example.com' };
        await domainApi.checkDomain(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/domain/checkDomain/example.com');
    });

    it('should call makeRequest for addUrlForward with correct endpoint and body', async () => {
        const options: AddUrlForwardRequest = {
            domain: 'example.com',
            subdomain: 'www',
            location: 'https://www.newsite.com',
            type: 'permanent',
            includePath: 'yes',
            wildcard: 'no',
        };
        await domainApi.addUrlForward(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/domain/addUrlForward/example.com', {
            subdomain: 'www',
            location: 'https://www.newsite.com',
            type: 'permanent',
            includePath: 'yes',
            wildcard: 'no',
        });
    });

    it('should call makeRequest for getUrlForwarding with correct endpoint', async () => {
        const options = { domain: 'example.com' };
        await domainApi.getUrlForwarding(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/domain/getUrlForwarding/example.com');
    });

    it('should call makeRequest for deleteUrlForward with correct endpoint', async () => {
        const options = { domain: 'example.com', recordId: '123' };
        await domainApi.deleteUrlForward(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/domain/deleteUrlForward/example.com/123');
    });

    it('should call makeRequest for createGlue with correct endpoint and body', async () => {
        const options = { domain: 'example.com', glueHost: 'ns1', v4: ['1.2.3.4'] };
        await domainApi.createGlue(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/domain/createGlue/example.com/ns1', {
            v4: ['1.2.3.4'],
        });
    });

    it('should call makeRequest for updateGlue with correct endpoint and body', async () => {
        const options = { domain: 'example.com', glueHost: 'ns1', v6: ['::1'] };
        await domainApi.updateGlue(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/domain/updateGlue/example.com/ns1', { v6: ['::1'] });
    });

    it('should call makeRequest for deleteGlue with correct endpoint', async () => {
        const options = { domain: 'example.com', glueHost: 'ns1' };
        await domainApi.deleteGlue(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/domain/deleteGlue/example.com/ns1');
    });

    it('should call makeRequest for getGlue with correct endpoint', async () => {
        const options = { domain: 'example.com' };
        await domainApi.getGlue(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/domain/getGlue/example.com');
    });
});
