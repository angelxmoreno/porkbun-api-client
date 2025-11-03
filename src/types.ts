import type Keyv from '@keyvhq/core';
import type { AxiosInstance } from 'axios';

/**
 * Configuration options for the Porkbun API client.
 */
export interface PorkbunConfig {
    /** Your Porkbun API Key. */
    apiKey: string;
    /** Your Porkbun Secret API Key. */
    secretApiKey: string;
    /**
     * An optional Axios instance to use for making HTTP requests.
     * If not provided, a new Axios instance will be created.
     */
    http?: AxiosInstance;
    /**
     * If true, forces the client to use the IPv4-only API endpoint.
     * @default false
     */
    forceIPv4?: boolean;
    /**
     * The base URL for the Porkbun API.
     * @default 'https://api.porkbun.com/api/json/v3'
     */
    baseUrl?: string;
    /**
     * An optional Keyv instance for caching API responses.
     * If not provided, caching will be disabled.
     */
    cache?: Keyv;
}

/**
 * The base shape of all responses from the Porkbun API.
 */
export interface BaseResponse {
    /** The status of the API response. */
    status: 'SUCCESS' | 'ERROR';
}

/**
 * Represents a successful API response.
 * @template T - The shape of the data returned in the successful response.
 */
export type SuccessResponse<T extends Record<string, unknown> = Record<string, never>> = T & {
    /** Indicates a successful API call. */
    status: 'SUCCESS';
};

/**
 * Represents an error response from the API.
 */
export interface ErrorResponse extends BaseResponse {
    /** Indicates a failed API call. */
    status: 'ERROR';
    /** A descriptive error message. */
    message: string;
}

/**
 * A union type representing any possible API response.
 * @template T - The shape of the data returned in a successful response.
 */
export type ApiResponse<T extends Record<string, unknown> = Record<string, never>> = SuccessResponse<T> | ErrorResponse;

// --- API-Specific Types ---

/**
 * The response from the `/ping` endpoint.
 */
export type PingResponse = SuccessResponse<{
    /** Your IP address as seen by the Porkbun API. */
    yourIp: string;
}>;

// DOMAIN Functionality

/**
 * Response for updating the nameservers of a domain.
 */
export type UpdateNsResponse = SuccessResponse;

/**
 * Response for retrieving the nameservers of a domain.
 */
export type GetNsResponse = SuccessResponse<{
    /** An array of nameserver strings. */
    ns: string[];
}>;

/**
 * Response for listing all domains in the account.
 */
export type ListAllDomainsResponse = SuccessResponse<{
    /** An array of domain objects. */
    domains: Array<{
        domain: string;
        status: 'ACTIVE' | 'INACTIVE';
        tld: string;
        createDate?: string;
        expireDate?: string;
        securityLock?: '0' | '1';
        whoisPrivacy?: '0' | '1';
        autoRenew?: number;
        notLocal?: number;
        labels?: Array<{
            id: string;
            title: string;
            color: string;
        }>;
    }>;
}>;

/**
 * Response for adding a URL forwarder.
 */
export type AddUrlForwardResponse = SuccessResponse;

/**
 * Response for retrieving URL forwarding records for a domain.
 */
export type GetUrlForwardingResponse = SuccessResponse<{
    /** An array of URL forwarding records. */
    forwards: Array<{
        id: string;
        subdomain: string;
        location: string;
        type: 'temporary' | 'permanent';
        includePath: 'yes' | 'no';
        wildcard: 'yes' | 'no';
    }>;
}>;

/**
 * Response for deleting a URL forwarder.
 */
export type DeleteUrlForwardResponse = SuccessResponse;

/**
 * Response for checking the availability of a domain.
 */
export type CheckDomainResponse = SuccessResponse<{
    response: {
        avail: 'yes' | 'no';
        type: string;
        price: string;
        firstYearPromo?: 'yes' | 'no';
        regularPrice?: string;
        premium?: 'yes' | 'no';
        additional?: {
            renewal?: {
                type: string;
                price: string;
                regularPrice: string;
            };
            transfer?: {
                type: string;
                price: string;
                regularPrice: string;
            };
        };
    };
    limits: {
        TTL: string;
        limit: string;
        used: number;
        naturalLanguage: string;
    };
}>;

/**
 * Response for creating a glue record.
 */
export type CreateGlueResponse = SuccessResponse;

/**
 * Response for updating a glue record.
 */
export type UpdateGlueResponse = SuccessResponse;

/**
 * Response for deleting a glue record.
 */
export type DeleteGlueResponse = SuccessResponse;

/**
 * Response for retrieving glue records for a domain.
 */
export type GetGlueResponse = SuccessResponse<{
    /** An array of glue record host objects. */
    hosts: Array<
        [
            string,
            {
                v4?: string[];
                v6?: string[];
            },
        ]
    >;
}>;

// DNS Functionality

/**
 * Response for creating a new DNS record.
 */
export type DnsCreateResponse = SuccessResponse<{
    /** The ID of the newly created record. */
    id: string;
}>;

/**
 * Response for editing a DNS record.
 */
export type DnsEditResponse = SuccessResponse;

/**
 * Response for editing a DNS record by its name and type.
 */
export type DnsEditByNameTypeResponse = SuccessResponse;

/**
 * Response for deleting a DNS record.
 */
export type DnsDeleteResponse = SuccessResponse;

/**
 * Response for deleting a DNS record by its name and type.
 */
export type DnsDeleteByNameTypeResponse = SuccessResponse;

/**
 * Response for retrieving DNS records for a domain.
 */
export type DnsRetrieveResponse = SuccessResponse<{
    /** An array of DNS record objects. */
    records: Array<{
        id: string;
        domain: string;
        name: string;
        type: string;
        content: string;
        ttl: string;
        [key: string]: unknown;
    }>;
}>;

/**
 * Response for retrieving DNS records by name and type.
 */
export type DnsRetrieveByNameTypeResponse = SuccessResponse<{
    /** An array of DNS record objects. */
    records: Array<{
        id: string;
        domain: string;
        name: string;
        type: string;
        content: string;
        ttl: string;
        [key: string]: unknown;
    }>;
}>;

/**
 * Response for creating a DNSSEC record.
 */
export type DnsCreateDnssecRecordResponse = SuccessResponse;

/**
 * Response for retrieving DNSSEC records for a domain.
 */
export type DnsGetDnssecRecordsResponse = SuccessResponse<{
    /** A record object where keys are the record IDs. */
    records: Record<
        string,
        {
            keyTag: string;
            alg: string;
            digestType: string;
            digest: string;
            maxSigLife?: string;
        }
    >;
}>;

/**
 * Response for deleting a DNSSEC record.
 */
export type DnsDeleteDnssecRecordResponse = SuccessResponse;

// SSL Functionality

/**
 * Response for retrieving an SSL certificate bundle for a domain.
 */
export type SslRetrieveResponse = SuccessResponse<{
    /** The SSL certificate bundle. */
    bundle?: string;
    [key: string]: unknown;
}>;

/**
 * Response for retrieving the pricing of all TLDs.
 */
export type PricingGetResponse = SuccessResponse<{
    /** A record object where keys are the TLDs. */
    pricing: Record<string, { registration: string; renewal: string; transfer: string }>;
}>;
