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

/**
 * The shape of the request body for creating a DNS record.
 */
export interface DnsCreateRequest {
    /** The domain for which to create the record. */
    domain: string;
    /** The subdomain for the record. */
    name: string;
    /** The type of DNS record (e.g., A, CNAME, MX). */
    type: string;
    /** The content of the DNS record. */
    content: string;
    /** The Time To Live (TTL) of the record in seconds. */
    ttl?: string;
    [key: string]: unknown;
}

/**
 * The shape of the request body for editing a DNS record.
 */
export interface DnsEditRequest {
    /** The domain of the record to edit. */
    domain: string;
    /** The ID of the record to edit. */
    id: string;
    /** The new subdomain for the record. */
    name?: string;
    /** The new type for the record. */
    type?: string;
    /** The new content for the record. */
    content?: string;
    /** The new TTL for the record. */
    ttl?: string;
    [key: string]: unknown;
}

/**
 * The shape of the request body for editing a DNS record by its name and type.
 */
export interface DnsEditByNameTypeRequest {
    /** The domain of the record to edit. */
    domain: string;
    /** The type of the record to edit. */
    type: string;
    /** The subdomain of the record to edit. */
    subdomain?: string;
    /** The new subdomain for the record. */
    name?: string;
    /** The new content for the record. */
    content?: string;
    /** The new TTL for the record. */
    ttl?: string;
    [key: string]: unknown;
}

/**
 * The shape of the request body for deleting a DNS record.
 */
export interface DnsDeleteRequest {
    /** The domain of the record to delete. */
    domain: string;
    /** The ID of the record to delete. */
    id: string;
    [key: string]: unknown;
}

/**
 * The shape of the request body for deleting a DNS record by its name and type.
 */
export interface DnsDeleteByNameTypeRequest {
    /** The domain of the record to delete. */
    domain: string;
    /** The type of the record to delete. */
    type: string;
    /** The subdomain of the record to delete. */
    subdomain?: string;
    [key: string]: unknown;
}

/**
 * The shape of the request body for retrieving DNS records.
 */
export interface DnsRetrieveRequest {
    /** The domain for which to retrieve records. */
    domain: string;
    /** The ID of a specific record to retrieve. */
    id?: string;
    [key: string]: unknown;
}

/**
 * The shape of the request body for retrieving DNS records by name and type.
 */
export interface DnsRetrieveByNameTypeRequest {
    /** The domain for which to retrieve records. */
    domain: string;
    /** The type of the records to retrieve. */
    type: string;
    /** The subdomain of the records to retrieve. */
    subdomain?: string;
    [key: string]: unknown;
}

/**
 * The shape of the request body for creating a DNSSEC record.
 */
export interface DnsCreateDnssecRecordRequest {
    /** The domain for which to create the DNSSEC record. */
    domain: string;
    [key: string]: unknown;
}

/**
 * The shape of the request body for retrieving DNSSEC records.
 */
export interface DnsGetDnssecRecordsRequest {
    /** The domain for which to retrieve DNSSEC records. */
    domain: string;
    [key: string]: unknown;
}

/**
 * The shape of the request body for deleting a DNSSEC record.
 */
export interface DnsDeleteDnssecRecordRequest {
    /** The domain of the DNSSEC record to delete. */
    domain: string;
    /** The key tag of the DNSSEC record to delete. */
    keyTag: string;
    [key: string]: unknown;
}

/**
 * Provides access to the DNS-related endpoints of the Porkbun API.
 */
export class DnsApi extends BaseApi {
    /**
     * Creates a new DNS record for the specified domain.
     * @param options - The details of the DNS record to create.
     * @returns A promise that resolves to the response from the API.
     * @example
     * ```typescript
     * const response = await client.dns.create({
     *   domain: 'example.com',
     *   name: 'www',
     *   type: 'A',
     *   content: '1.2.3.4',
     * });
     * console.log(response.id);
     * ```
     */
    create(options: DnsCreateRequest): Promise<DnsCreateResponse> {
        const { domain, ...body } = options;
        return this.httpClient.makeRequest<DnsCreateResponse>(`/dns/create/${domain}`, body);
    }

    /**
     * Edits an existing DNS record.
     * @param options - The details of the DNS record to edit.
     * @returns A promise that resolves to the response from the API.
     */
    edit(options: DnsEditRequest): Promise<DnsEditResponse> {
        const { domain, id, ...body } = options;
        return this.httpClient.makeRequest<DnsEditResponse>(`/dns/edit/${domain}/${id}`, body);
    }

    /**
     * Edits an existing DNS record, finding it by its name and type.
     * @param options - The details of the DNS record to edit.
     * @returns A promise that resolves to the response from the API.
     */
    editByNameType(options: DnsEditByNameTypeRequest): Promise<DnsEditByNameTypeResponse> {
        const { domain, type, subdomain, ...body } = options;
        const path = subdomain
            ? `/dns/editByNameType/${domain}/${type}/${subdomain}`
            : `/dns/editByNameType/${domain}/${type}`;
        return this.httpClient.makeRequest<DnsEditByNameTypeResponse>(path, body);
    }

    /**
     * Deletes a DNS record by its ID.
     * @param options - The details of the DNS record to delete.
     * @returns A promise that resolves to the response from the API.
     */
    delete(options: DnsDeleteRequest): Promise<DnsDeleteResponse> {
        const { domain, id } = options;
        return this.httpClient.makeRequest<DnsDeleteResponse>(`/dns/delete/${domain}/${id}`);
    }

    /**
     * Deletes a DNS record by its name and type.
     * @param options - The details of the DNS record to delete.
     * @returns A promise that resolves to the response from the API.
     */
    deleteByNameType(options: DnsDeleteByNameTypeRequest): Promise<DnsDeleteByNameTypeResponse> {
        const { domain, type, subdomain } = options;
        const path = subdomain
            ? `/dns/deleteByNameType/${domain}/${type}/${subdomain}`
            : `/dns/deleteByNameType/${domain}/${type}`;
        return this.httpClient.makeRequest<DnsDeleteByNameTypeResponse>(path);
    }

    /**
     * Retrieves DNS records for a domain. If an ID is provided, only that record will be retrieved.
     * @param options - The details of the records to retrieve.
     * @returns A promise that resolves to the response from the API.
     */
    retrieve(options: DnsRetrieveRequest): Promise<DnsRetrieveResponse> {
        const { domain, id } = options;
        const path = id ? `/dns/retrieve/${domain}/${id}` : `/dns/retrieve/${domain}`;
        return this.httpClient.makeRequest<DnsRetrieveResponse>(path);
    }

    /**
     * Retrieves DNS records for a domain, filtering by name and type.
     * @param options - The details of the records to retrieve.
     * @returns A promise that resolves to the response from the API.
     */
    retrieveByNameType(options: DnsRetrieveByNameTypeRequest): Promise<DnsRetrieveByNameTypeResponse> {
        const { domain, type, subdomain } = options;
        const path = subdomain
            ? `/dns/retrieveByNameType/${domain}/${type}/${subdomain}`
            : `/dns/retrieveByNameType/${domain}/${type}`;
        return this.httpClient.makeRequest<DnsRetrieveByNameTypeResponse>(path);
    }

    /**
     * Creates a new DNSSEC record for the specified domain.
     * @param options - The details of the DNSSEC record to create.
     * @returns A promise that resolves to the response from the API.
     */
    createDnssecRecord(options: DnsCreateDnssecRecordRequest): Promise<DnsCreateDnssecRecordResponse> {
        const { domain, ...body } = options;
        return this.httpClient.makeRequest<DnsCreateDnssecRecordResponse>(`/dns/createDnssecRecord/${domain}`, body);
    }

    /**
     * Retrieves the DNSSEC records for a domain.
     * @param options - The details of the records to retrieve.
     * @returns A promise that resolves to the response from the API.
     */
    getDnssecRecords(options: DnsGetDnssecRecordsRequest): Promise<DnsGetDnssecRecordsResponse> {
        const { domain } = options;
        return this.httpClient.makeRequest<DnsGetDnssecRecordsResponse>(`/dns/getDnssecRecords/${domain}`);
    }

    /**
     * Deletes a DNSSEC record by its key tag.
     * @param options - The details of the DNSSEC record to delete.
     * @returns A promise that resolves to the response from the API.
     */
    deleteDnssecRecord(options: DnsDeleteDnssecRecordRequest): Promise<DnsDeleteDnssecRecordResponse> {
        const { domain, keyTag } = options;
        return this.httpClient.makeRequest<DnsDeleteDnssecRecordResponse>(
            `/dns/deleteDnssecRecord/${domain}/${keyTag}`
        );
    }
}
