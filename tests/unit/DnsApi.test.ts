import { beforeEach, describe, expect, it, mock } from 'bun:test';
import type { PorkbunHttpClient } from '../../src';
import { DnsApi } from '../../src';

describe('DnsApi', () => {
    let mockHttpClient: PorkbunHttpClient;
    let dnsApi: DnsApi;

    beforeEach(() => {
        mockHttpClient = {
            makeRequest: mock(async () => ({ status: 'SUCCESS' })),
        } as unknown as PorkbunHttpClient;
        dnsApi = new DnsApi(mockHttpClient);
    });

    it('should call makeRequest for create with correct endpoint and body', async () => {
        const options = {
            domain: 'example.com',
            name: 'www',
            type: 'A',
            content: '1.2.3.4',
            ttl: '300',
        };
        await dnsApi.create(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/dns/create/example.com', {
            name: 'www',
            type: 'A',
            content: '1.2.3.4',
            ttl: '300',
        });
    });

    it('should call makeRequest for edit with correct endpoint and body', async () => {
        const options = {
            domain: 'example.com',
            id: '123',
            name: 'blog',
            content: '5.6.7.8',
        };
        await dnsApi.edit(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/dns/edit/example.com/123', {
            name: 'blog',
            content: '5.6.7.8',
        });
    });

    it('should call makeRequest for editByNameType with subdomain', async () => {
        const options = {
            domain: 'example.com',
            type: 'A',
            subdomain: 'test',
            content: '9.10.11.12',
        };
        await dnsApi.editByNameType(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/dns/editByNameType/example.com/A/test', {
            content: '9.10.11.12',
        });
    });

    it('should call makeRequest for editByNameType without subdomain', async () => {
        const options = {
            domain: 'example.com',
            type: 'A',
            content: '9.10.11.12',
        };
        await dnsApi.editByNameType(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/dns/editByNameType/example.com/A', {
            content: '9.10.11.12',
        });
    });

    it('should call makeRequest for delete with correct endpoint', async () => {
        const options = { domain: 'example.com', id: '123' };
        await dnsApi.delete(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/dns/delete/example.com/123');
    });

    it('should call makeRequest for deleteByNameType with subdomain', async () => {
        const options = { domain: 'example.com', type: 'A', subdomain: 'test' };
        await dnsApi.deleteByNameType(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/dns/deleteByNameType/example.com/A/test');
    });

    it('should call makeRequest for deleteByNameType without subdomain', async () => {
        const options = { domain: 'example.com', type: 'A' };
        await dnsApi.deleteByNameType(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/dns/deleteByNameType/example.com/A');
    });

    it('should call makeRequest for retrieve with ID', async () => {
        const options = { domain: 'example.com', id: '123' };
        await dnsApi.retrieve(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/dns/retrieve/example.com/123');
    });

    it('should call makeRequest for retrieve without ID', async () => {
        const options = { domain: 'example.com' };
        await dnsApi.retrieve(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/dns/retrieve/example.com');
    });

    it('should call makeRequest for retrieveByNameType with subdomain', async () => {
        const options = { domain: 'example.com', type: 'A', subdomain: 'test' };
        await dnsApi.retrieveByNameType(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/dns/retrieveByNameType/example.com/A/test');
    });

    it('should call makeRequest for retrieveByNameType without subdomain', async () => {
        const options = { domain: 'example.com', type: 'A' };
        await dnsApi.retrieveByNameType(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/dns/retrieveByNameType/example.com/A');
    });

    it('should call makeRequest for createDnssecRecord with correct endpoint and body', async () => {
        const options = { domain: 'example.com', keyTag: '123', alg: '3', digestType: '1', digest: 'abc' };
        await dnsApi.createDnssecRecord(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/dns/createDnssecRecord/example.com', {
            keyTag: '123',
            alg: '3',
            digestType: '1',
            digest: 'abc',
        });
    });

    it('should call makeRequest for getDnssecRecords with correct endpoint', async () => {
        const options = { domain: 'example.com' };
        await dnsApi.getDnssecRecords(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/dns/getDnssecRecords/example.com');
    });

    it('should call makeRequest for deleteDnssecRecord with correct endpoint', async () => {
        const options = { domain: 'example.com', keyTag: '123' };
        await dnsApi.deleteDnssecRecord(options);
        expect(mockHttpClient.makeRequest).toHaveBeenCalledWith('/dns/deleteDnssecRecord/example.com/123');
    });
});
