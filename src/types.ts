// types.ts
import type Keyv from '@keyvhq/core';
import type { AxiosInstance } from 'axios';

export interface PorkbunConfig {
    apiKey: string;
    secretApiKey: string;
    http?: AxiosInstance;
    forceIPv4?: boolean;
    baseUrl?: string;
    cache?: Keyv;
}

export interface BaseResponse {
    status: 'SUCCESS' | 'ERROR';
}

export type SuccessResponse<T extends Record<string, unknown> = Record<string, never>> = T & {
    status: 'SUCCESS';
};

export interface ErrorResponse extends BaseResponse {
    status: 'ERROR';
    message: string;
}

export type ApiResponse<T extends Record<string, unknown> = Record<string, never>> = SuccessResponse<T> | ErrorResponse;

// --- API-Specific Types ---

// /ping
export type PingResponse = SuccessResponse<{
    yourIp: string;
}>;

// DOMAIN Functionality

// /domain/updateNs/DOMAIN
export type UpdateNsResponse = SuccessResponse;

// /domain/getNs/DOMAIN
export type GetNsResponse = SuccessResponse<{
    ns: string[];
}>;

// /domain/listAll
export type ListAllDomainsResponse = SuccessResponse<{
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

// /domain/addUrlForward/DOMAIN
export type AddUrlForwardResponse = SuccessResponse;

// /domain/getUrlForwarding/DOMAIN
export type GetUrlForwardingResponse = SuccessResponse<{
    forwards: Array<{
        id: string;
        subdomain: string;
        location: string;
        type: 'temporary' | 'permanent';
        includePath: 'yes' | 'no';
        wildcard: 'yes' | 'no';
    }>;
}>;

// /domain/deleteUrlForward/DOMAIN/RECORDID
export type DeleteUrlForwardResponse = SuccessResponse;

// /domain/checkDomain/DOMAIN
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

// /domain/createGlue/DOMAIN/GLUE_HOST_SUBDOMAIN
export type CreateGlueResponse = SuccessResponse;

// /domain/updateGlue/DOMAIN/GLUE_HOST_SUBDOMAIN
export type UpdateGlueResponse = SuccessResponse;

// /domain/deleteGlue/DOMAIN/GLUE_HOST_SUBDOMAIN
export type DeleteGlueResponse = SuccessResponse;

// /domain/getGlue/DOMAIN
export type GetGlueResponse = SuccessResponse<{
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

// /dns/create/DOMAIN
export type DnsCreateResponse = SuccessResponse<{
    id: string;
}>;

// /dns/edit/DOMAIN/ID
export type DnsEditResponse = SuccessResponse;

// /dns/editByNameType/DOMAIN/TYPE/[SUBDOMAIN]
export type DnsEditByNameTypeResponse = SuccessResponse;

// /dns/delete/DOMAIN/ID
export type DnsDeleteResponse = SuccessResponse;

// /dns/deleteByNameType/DOMAIN/TYPE/[SUBDOMAIN]
export type DnsDeleteByNameTypeResponse = SuccessResponse;

// /dns/retrieve/DOMAIN[/ID]
export type DnsRetrieveResponse = SuccessResponse<{
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

// /dns/retrieveByNameType/DOMAIN/TYPE/[SUBDOMAIN]
export type DnsRetrieveByNameTypeResponse = SuccessResponse<{
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

// /dns/createDnssecRecord/DOMAIN
export type DnsCreateDnssecRecordResponse = SuccessResponse;

// /dns/getDnssecRecords/DOMAIN
export type DnsGetDnssecRecordsResponse = SuccessResponse<{
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

// /dns/deleteDnssecRecord/DOMAIN/KEYTAG
export type DnsDeleteDnssecRecordResponse = SuccessResponse;

// SSL Functionality

// /ssl/retrieve/DOMAIN
export type SslRetrieveResponse = SuccessResponse<{
    // The documentation example doesn’t show further fields, but you likely will get
    // certificate bundle details. Represent minimally:
    bundle?: string;
    [key: string]: unknown;
}>;
