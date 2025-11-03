// DnsApi.ts

import type {
    DnsCreateDnssecRecordResponse,
    DnsCreateResponse,
    DnsDeleteByNameTypeResponse,
    DnsDeleteDnssecRecordResponse,
    DnsDeleteResponse,
    DnsEditByNameTypeResponse,
    DnsEditResponse,
    DnsGetDnssecRecordsResponse,
    DnsRetrieveByNameTypeResponse,
    DnsRetrieveResponse,
} from '../types';
import { BaseApi } from './BaseApi';

// --- Request Types ---
export interface DnsCreateRequest {
    domain: string;
    name: string;
    type: string;
    content: string;
    ttl?: string;
    [key: string]: unknown;
}

export interface DnsEditRequest {
    domain: string;
    id: string;
    name?: string;
    type?: string;
    content?: string;
    ttl?: string;
    [key: string]: unknown;
}

export interface DnsEditByNameTypeRequest {
    domain: string;
    type: string;
    subdomain?: string;
    name?: string;
    content?: string;
    ttl?: string;
    [key: string]: unknown;
}

export interface DnsDeleteRequest {
    domain: string;
    id: string;
    [key: string]: unknown;
}

export interface DnsDeleteByNameTypeRequest {
    domain: string;
    type: string;
    subdomain?: string;
    [key: string]: unknown;
}

export interface DnsRetrieveRequest {
    domain: string;
    id?: string;
    [key: string]: unknown;
}

export interface DnsRetrieveByNameTypeRequest {
    domain: string;
    type: string;
    subdomain?: string;
    [key: string]: unknown;
}

export interface DnsCreateDnssecRecordRequest {
    domain: string;
    [key: string]: unknown;
}

export interface DnsGetDnssecRecordsRequest {
    domain: string;
    [key: string]: unknown;
}

export interface DnsDeleteDnssecRecordRequest {
    domain: string;
    keyTag: string;
    [key: string]: unknown;
}

// --- Class ---
export class DnsApi extends BaseApi {
    create(options: DnsCreateRequest): Promise<DnsCreateResponse> {
        const { domain, ...body } = options;
        return this.httpClient.makeRequest<DnsCreateResponse>(`/dns/create/${domain}`, body);
    }

    edit(options: DnsEditRequest): Promise<DnsEditResponse> {
        const { domain, id, ...body } = options;
        return this.httpClient.makeRequest<DnsEditResponse>(`/dns/edit/${domain}/${id}`, body);
    }

    editByNameType(options: DnsEditByNameTypeRequest): Promise<DnsEditByNameTypeResponse> {
        const { domain, type, subdomain, ...body } = options;
        const path = subdomain
            ? `/dns/editByNameType/${domain}/${type}/${subdomain}`
            : `/dns/editByNameType/${domain}/${type}`;
        return this.httpClient.makeRequest<DnsEditByNameTypeResponse>(path, body);
    }

    delete(options: DnsDeleteRequest): Promise<DnsDeleteResponse> {
        const { domain, id } = options;
        return this.httpClient.makeRequest<DnsDeleteResponse>(`/dns/delete/${domain}/${id}`);
    }

    deleteByNameType(options: DnsDeleteByNameTypeRequest): Promise<DnsDeleteByNameTypeResponse> {
        const { domain, type, subdomain } = options;
        const path = subdomain
            ? `/dns/deleteByNameType/${domain}/${type}/${subdomain}`
            : `/dns/deleteByNameType/${domain}/${type}`;
        return this.httpClient.makeRequest<DnsDeleteByNameTypeResponse>(path);
    }

    retrieve(options: DnsRetrieveRequest): Promise<DnsRetrieveResponse> {
        const { domain, id } = options;
        const path = id ? `/dns/retrieve/${domain}/${id}` : `/dns/retrieve/${domain}`;
        return this.httpClient.makeRequest<DnsRetrieveResponse>(path);
    }

    retrieveByNameType(options: DnsRetrieveByNameTypeRequest): Promise<DnsRetrieveByNameTypeResponse> {
        const { domain, type, subdomain } = options;
        const path = subdomain
            ? `/dns/retrieveByNameType/${domain}/${type}/${subdomain}`
            : `/dns/retrieveByNameType/${domain}/${type}`;
        return this.httpClient.makeRequest<DnsRetrieveByNameTypeResponse>(path);
    }

    createDnssecRecord(options: DnsCreateDnssecRecordRequest): Promise<DnsCreateDnssecRecordResponse> {
        const { domain, ...body } = options;
        return this.httpClient.makeRequest<DnsCreateDnssecRecordResponse>(`/dns/createDnssecRecord/${domain}`, body);
    }

    getDnssecRecords(options: DnsGetDnssecRecordsRequest): Promise<DnsGetDnssecRecordsResponse> {
        const { domain } = options;
        return this.httpClient.makeRequest<DnsGetDnssecRecordsResponse>(`/dns/getDnssecRecords/${domain}`);
    }

    deleteDnssecRecord(options: DnsDeleteDnssecRecordRequest): Promise<DnsDeleteDnssecRecordResponse> {
        const { domain, keyTag } = options;
        return this.httpClient.makeRequest<DnsDeleteDnssecRecordResponse>(
            `/dns/deleteDnssecRecord/${domain}/${keyTag}`
        );
    }
}
