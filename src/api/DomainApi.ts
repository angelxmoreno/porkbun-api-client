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

/**
 * The shape of the request body for updating nameservers.
 */
export interface UpdateNameServersRequest {
    /** The domain for which to update nameservers. */
    domain: string;
    /** An array of new nameservers. */
    ns: string[];
}

/**
 * The shape of the request body for retrieving nameservers.
 */
export interface GetNameServersRequest {
    /** The domain for which to retrieve nameservers. */
    domain: string;
}

/**
 * The shape of the request body for listing all domains.
 */
export interface ListAllDomainsRequest {
    /** The starting position for pagination. */
    start?: number;
    /** Whether to include labels in the response. */
    includeLabels?: 'yes';
    [key: string]: unknown;
}

/**
 * The shape of the request body for checking domain availability.
 */
export interface CheckDomainRequest {
    /** The domain to check. */
    domain: string;
}

/**
 * The shape of the request body for adding a URL forwarder.
 */
export interface AddUrlForwardRequest {
    /** The domain for which to add the forwarder. */
    domain: string;
    /** The subdomain to forward. */
    subdomain: string;
    /** The destination URL. */
    location: string;
    /** The type of forwarding. */
    type: 'temporary' | 'permanent';
    /** Whether to include the path in the forward. */
    includePath: 'yes' | 'no';
    /** Whether to use a wildcard for the forward. */
    wildcard: 'yes' | 'no';
}

/**
 * The shape of the request body for retrieving URL forwarding records.
 */
export interface GetUrlForwardingRequest {
    /** The domain for which to retrieve forwarding records. */
    domain: string;
}

/**
 * The shape of the request body for deleting a URL forwarder.
 */
export interface DeleteUrlForwardRequest {
    /** The domain of the forwarder to delete. */
    domain: string;
    /** The ID of the forwarding record to delete. */
    recordId: string;
}

/**
 * The shape of the request body for creating a glue record.
 */
export interface CreateGlueRequest {
    /** The domain for which to create the glue record. */
    domain: string;
    /** The subdomain of the glue record. */
    glueHost: string;
    /** An array of IPv4 addresses for the glue record. */
    v4?: string[];
    /** An array of IPv6 addresses for the glue record. */
    v6?: string[];
}

/**
 * The shape of the request body for updating a glue record.
 */
export interface UpdateGlueRequest {
    /** The domain of the glue record to update. */
    domain: string;
    /** The subdomain of the glue record. */
    glueHost: string;
    /** An array of new IPv4 addresses for the glue record. */
    v4?: string[];
    /** An array of new IPv6 addresses for the glue record. */
    v6?: string[];
}

/**
 * The shape of the request body for deleting a glue record.
 */
export interface DeleteGlueRequest {
    /** The domain of the glue record to delete. */
    domain: string;
    /** The subdomain of the glue record to delete. */
    glueHost: string;
}

/**
 * The shape of the request body for retrieving glue records.
 */
export interface GetGlueRequest {
    /** The domain for which to retrieve glue records. */
    domain: string;
}

/**
 * Provides access to the domain-related endpoints of the Porkbun API.
 */
export class DomainApi extends BaseApi {
    /**
     * Updates the nameservers for a domain.
     * @param options - The details of the nameservers to update.
     * @returns A promise that resolves to the response from the API.
     */
    updateNameServers(options: UpdateNameServersRequest): Promise<UpdateNsResponse> {
        const { domain, ns } = options;
        return this.httpClient.makeRequest<UpdateNsResponse>(`/domain/updateNs/${domain}`, { ns });
    }

    /**
     * Retrieves the nameservers for a domain.
     * @param options - The details of the domain to query.
     * @returns A promise that resolves to the response from the API.
     */
    getNameServers(options: GetNameServersRequest): Promise<GetNsResponse> {
        const { domain } = options;
        return this.httpClient.makeRequest<GetNsResponse>(`/domain/getNs/${domain}`);
    }

    /**
     * Lists all domains in the account.
     * @param options - Optional parameters for pagination and including labels.
     * @returns A promise that resolves to the list of domains.
     */
    listAll(options: ListAllDomainsRequest = {}): Promise<ListAllDomainsResponse> {
        return this.httpClient.makeRequest<ListAllDomainsResponse>('/domain/listAll', options);
    }

    /**
     * Checks the availability of a domain.
     * @param options - The domain to check.
     * @returns A promise that resolves to the availability information.
     */
    checkDomain(options: CheckDomainRequest): Promise<CheckDomainResponse> {
        const { domain } = options;
        return this.httpClient.makeRequest<CheckDomainResponse>(`/domain/checkDomain/${domain}`);
    }

    /**
     * Adds a URL forwarder for a domain.
     * @param options - The details of the URL forwarder to add.
     * @returns A promise that resolves to the response from the API.
     */
    addUrlForward(options: AddUrlForwardRequest): Promise<AddUrlForwardResponse> {
        const { domain, ...body } = options;
        return this.httpClient.makeRequest<AddUrlForwardResponse>(`/domain/addUrlForward/${domain}`, body);
    }

    /**
     * Retrieves the URL forwarding records for a domain.
     * @param options - The domain to query.
     * @returns A promise that resolves to the list of URL forwarding records.
     */
    getUrlForwarding(options: GetUrlForwardingRequest): Promise<GetUrlForwardingResponse> {
        const { domain } = options;
        return this.httpClient.makeRequest<GetUrlForwardingResponse>(`/domain/getUrlForwarding/${domain}`);
    }

    /**
     * Deletes a URL forwarder by its ID.
     * @param options - The details of the URL forwarder to delete.
     * @returns A promise that resolves to the response from the API.
     */
    deleteUrlForward(options: DeleteUrlForwardRequest): Promise<DeleteUrlForwardResponse> {
        const { domain, recordId } = options;
        return this.httpClient.makeRequest<DeleteUrlForwardResponse>(`/domain/deleteUrlForward/${domain}/${recordId}`);
    }

    /**
     * Creates a glue record for a domain.
     * @param options - The details of the glue record to create.
     * @returns A promise that resolves to the response from the API.
     */
    createGlue(options: CreateGlueRequest): Promise<CreateGlueResponse> {
        const { domain, glueHost, ...body } = options;
        return this.httpClient.makeRequest<CreateGlueResponse>(`/domain/createGlue/${domain}/${glueHost}`, body);
    }

    /**
     * Updates a glue record for a domain.
     * @param options - The details of the glue record to update.
     * @returns A promise that resolves to the response from the API.
     */
    updateGlue(options: UpdateGlueRequest): Promise<UpdateGlueResponse> {
        const { domain, glueHost, ...body } = options;
        return this.httpClient.makeRequest<UpdateGlueResponse>(`/domain/updateGlue/${domain}/${glueHost}`, body);
    }

    /**
     * Deletes a glue record for a domain.
     * @param options - The details of the glue record to delete.
     * @returns A promise that resolves to the response from the API.
     */
    deleteGlue(options: DeleteGlueRequest): Promise<DeleteGlueResponse> {
        const { domain, glueHost } = options;
        return this.httpClient.makeRequest<DeleteGlueResponse>(`/domain/deleteGlue/${domain}/${glueHost}`);
    }

    /**
     * Retrieves the glue records for a domain.
     * @param options - The domain to query.
     * @returns A promise that resolves to the list of glue records.
     */
    getGlue(options: GetGlueRequest): Promise<GetGlueResponse> {
        const { domain } = options;
        return this.httpClient.makeRequest<GetGlueResponse>(`/domain/getGlue/${domain}`);
    }
}
