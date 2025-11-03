import type {
    AddUrlForwardResponse,
    CheckDomainResponse,
    CreateGlueResponse,
    DeleteGlueResponse,
    DeleteUrlForwardResponse,
    GetGlueResponse,
    GetNsResponse,
    GetUrlForwardingResponse,
    ListAllDomainsResponse,
    UpdateGlueResponse,
    UpdateNsResponse,
} from '../types';
import { BaseApi } from './BaseApi';

// --- Request Types ---
export interface UpdateNameServersRequest {
    domain: string;
    ns: string[];
}

export interface GetNameServersRequest {
    domain: string;
}

export interface ListAllDomainsRequest {
    start?: number;
    includeLabels?: 'yes';
    [key: string]: unknown;
}

export interface CheckDomainRequest {
    domain: string;
}

export interface AddUrlForwardRequest {
    domain: string;
    subdomain: string;
    location: string;
    type: 'temporary' | 'permanent';
    includePath: 'yes' | 'no';
    wildcard: 'yes' | 'no';
}

export interface GetUrlForwardingRequest {
    domain: string;
}

export interface DeleteUrlForwardRequest {
    domain: string;
    recordId: string;
}

export interface CreateGlueRequest {
    domain: string;
    glueHost: string;
    v4?: string[];
    v6?: string[];
}

export interface UpdateGlueRequest {
    domain: string;
    glueHost: string;
    v4?: string[];
    v6?: string[];
}

export interface DeleteGlueRequest {
    domain: string;
    glueHost: string;
}

export interface GetGlueRequest {
    domain: string;
}

// --- Class ---
export class DomainApi extends BaseApi {
    updateNameServers(options: UpdateNameServersRequest): Promise<UpdateNsResponse> {
        const { domain, ns } = options;
        return this.httpClient.makeRequest<UpdateNsResponse>(`/domain/updateNs/${domain}`, { ns });
    }

    getNameServers(options: GetNameServersRequest): Promise<GetNsResponse> {
        const { domain } = options;
        return this.httpClient.makeRequest<GetNsResponse>(`/domain/getNs/${domain}`);
    }

    listAll(options: ListAllDomainsRequest = {}): Promise<ListAllDomainsResponse> {
        return this.httpClient.makeRequest<ListAllDomainsResponse>('/domain/listAll', options);
    }

    checkDomain(options: CheckDomainRequest): Promise<CheckDomainResponse> {
        const { domain } = options;
        return this.httpClient.makeRequest<CheckDomainResponse>(`/domain/checkDomain/${domain}`);
    }

    addUrlForward(options: AddUrlForwardRequest): Promise<AddUrlForwardResponse> {
        const { domain, ...body } = options;
        return this.httpClient.makeRequest<AddUrlForwardResponse>(`/domain/addUrlForward/${domain}`, body);
    }

    getUrlForwarding(options: GetUrlForwardingRequest): Promise<GetUrlForwardingResponse> {
        const { domain } = options;
        return this.httpClient.makeRequest<GetUrlForwardingResponse>(`/domain/getUrlForwarding/${domain}`);
    }

    deleteUrlForward(options: DeleteUrlForwardRequest): Promise<DeleteUrlForwardResponse> {
        const { domain, recordId } = options;
        return this.httpClient.makeRequest<DeleteUrlForwardResponse>(`/domain/deleteUrlForward/${domain}/${recordId}`);
    }

    createGlue(options: CreateGlueRequest): Promise<CreateGlueResponse> {
        const { domain, glueHost, ...body } = options;
        return this.httpClient.makeRequest<CreateGlueResponse>(`/domain/createGlue/${domain}/${glueHost}`, body);
    }

    updateGlue(options: UpdateGlueRequest): Promise<UpdateGlueResponse> {
        const { domain, glueHost, ...body } = options;
        return this.httpClient.makeRequest<UpdateGlueResponse>(`/domain/updateGlue/${domain}/${glueHost}`, body);
    }

    deleteGlue(options: DeleteGlueRequest): Promise<DeleteGlueResponse> {
        const { domain, glueHost } = options;
        return this.httpClient.makeRequest<DeleteGlueResponse>(`/domain/deleteGlue/${domain}/${glueHost}`);
    }

    getGlue(options: GetGlueRequest): Promise<GetGlueResponse> {
        const { domain } = options;
        return this.httpClient.makeRequest<GetGlueResponse>(`/domain/getGlue/${domain}`);
    }
}
