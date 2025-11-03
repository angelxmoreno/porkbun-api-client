[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / DomainApi

# Class: DomainApi

Defined in: [src/api/DomainApi.ts:138](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DomainApi.ts#L138)

Provides access to the domain-related endpoints of the Porkbun API.

## Extends

- [`BaseApi`](BaseApi.md)

## Constructors

### Constructor

> **new DomainApi**(`httpClient`): `DomainApi`

Defined in: [src/api/BaseApi.ts:18](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/BaseApi.ts#L18)

Creates an instance of a BaseApi-derived class.

#### Parameters

##### httpClient

[`PorkbunHttpClient`](PorkbunHttpClient.md)

The HTTP client instance.

#### Returns

`DomainApi`

#### Inherited from

[`BaseApi`](BaseApi.md).[`constructor`](BaseApi.md#constructor)

## Methods

### addUrlForward()

> **addUrlForward**(`options`): `Promise`\<[`AddUrlForwardResponse`](../type-aliases/AddUrlForwardResponse.md)\>

Defined in: [src/api/DomainApi.ts:183](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DomainApi.ts#L183)

Adds a URL forwarder for a domain.

#### Parameters

##### options

[`AddUrlForwardRequest`](../interfaces/AddUrlForwardRequest.md)

The details of the URL forwarder to add.

#### Returns

`Promise`\<[`AddUrlForwardResponse`](../type-aliases/AddUrlForwardResponse.md)\>

A promise that resolves to the response from the API.

***

### checkDomain()

> **checkDomain**(`options`): `Promise`\<[`CheckDomainResponse`](../type-aliases/CheckDomainResponse.md)\>

Defined in: [src/api/DomainApi.ts:173](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DomainApi.ts#L173)

Checks the availability of a domain.

#### Parameters

##### options

[`CheckDomainRequest`](../interfaces/CheckDomainRequest.md)

The domain to check.

#### Returns

`Promise`\<[`CheckDomainResponse`](../type-aliases/CheckDomainResponse.md)\>

A promise that resolves to the availability information.

***

### createGlue()

> **createGlue**(`options`): `Promise`\<[`CreateGlueResponse`](../type-aliases/CreateGlueResponse.md)\>

Defined in: [src/api/DomainApi.ts:213](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DomainApi.ts#L213)

Creates a glue record for a domain.

#### Parameters

##### options

[`CreateGlueRequest`](../interfaces/CreateGlueRequest.md)

The details of the glue record to create.

#### Returns

`Promise`\<[`CreateGlueResponse`](../type-aliases/CreateGlueResponse.md)\>

A promise that resolves to the response from the API.

***

### deleteGlue()

> **deleteGlue**(`options`): `Promise`\<[`DeleteGlueResponse`](../type-aliases/DeleteGlueResponse.md)\>

Defined in: [src/api/DomainApi.ts:233](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DomainApi.ts#L233)

Deletes a glue record for a domain.

#### Parameters

##### options

[`DeleteGlueRequest`](../interfaces/DeleteGlueRequest.md)

The details of the glue record to delete.

#### Returns

`Promise`\<[`DeleteGlueResponse`](../type-aliases/DeleteGlueResponse.md)\>

A promise that resolves to the response from the API.

***

### deleteUrlForward()

> **deleteUrlForward**(`options`): `Promise`\<[`DeleteUrlForwardResponse`](../type-aliases/DeleteUrlForwardResponse.md)\>

Defined in: [src/api/DomainApi.ts:203](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DomainApi.ts#L203)

Deletes a URL forwarder by its ID.

#### Parameters

##### options

[`DeleteUrlForwardRequest`](../interfaces/DeleteUrlForwardRequest.md)

The details of the URL forwarder to delete.

#### Returns

`Promise`\<[`DeleteUrlForwardResponse`](../type-aliases/DeleteUrlForwardResponse.md)\>

A promise that resolves to the response from the API.

***

### getGlue()

> **getGlue**(`options`): `Promise`\<[`GetGlueResponse`](../type-aliases/GetGlueResponse.md)\>

Defined in: [src/api/DomainApi.ts:243](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DomainApi.ts#L243)

Retrieves the glue records for a domain.

#### Parameters

##### options

[`GetGlueRequest`](../interfaces/GetGlueRequest.md)

The domain to query.

#### Returns

`Promise`\<[`GetGlueResponse`](../type-aliases/GetGlueResponse.md)\>

A promise that resolves to the list of glue records.

***

### getNameServers()

> **getNameServers**(`options`): `Promise`\<[`GetNsResponse`](../type-aliases/GetNsResponse.md)\>

Defined in: [src/api/DomainApi.ts:154](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DomainApi.ts#L154)

Retrieves the nameservers for a domain.

#### Parameters

##### options

[`GetNameServersRequest`](../interfaces/GetNameServersRequest.md)

The details of the domain to query.

#### Returns

`Promise`\<[`GetNsResponse`](../type-aliases/GetNsResponse.md)\>

A promise that resolves to the response from the API.

***

### getUrlForwarding()

> **getUrlForwarding**(`options`): `Promise`\<[`GetUrlForwardingResponse`](../type-aliases/GetUrlForwardingResponse.md)\>

Defined in: [src/api/DomainApi.ts:193](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DomainApi.ts#L193)

Retrieves the URL forwarding records for a domain.

#### Parameters

##### options

[`GetUrlForwardingRequest`](../interfaces/GetUrlForwardingRequest.md)

The domain to query.

#### Returns

`Promise`\<[`GetUrlForwardingResponse`](../type-aliases/GetUrlForwardingResponse.md)\>

A promise that resolves to the list of URL forwarding records.

***

### listAll()

> **listAll**(`options`): `Promise`\<[`ListAllDomainsResponse`](../type-aliases/ListAllDomainsResponse.md)\>

Defined in: [src/api/DomainApi.ts:164](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DomainApi.ts#L164)

Lists all domains in the account.

#### Parameters

##### options

[`ListAllDomainsRequest`](../interfaces/ListAllDomainsRequest.md) = `{}`

Optional parameters for pagination and including labels.

#### Returns

`Promise`\<[`ListAllDomainsResponse`](../type-aliases/ListAllDomainsResponse.md)\>

A promise that resolves to the list of domains.

***

### updateGlue()

> **updateGlue**(`options`): `Promise`\<[`UpdateGlueResponse`](../type-aliases/UpdateGlueResponse.md)\>

Defined in: [src/api/DomainApi.ts:223](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DomainApi.ts#L223)

Updates a glue record for a domain.

#### Parameters

##### options

[`UpdateGlueRequest`](../interfaces/UpdateGlueRequest.md)

The details of the glue record to update.

#### Returns

`Promise`\<[`UpdateGlueResponse`](../type-aliases/UpdateGlueResponse.md)\>

A promise that resolves to the response from the API.

***

### updateNameServers()

> **updateNameServers**(`options`): `Promise`\<[`UpdateNsResponse`](../type-aliases/UpdateNsResponse.md)\>

Defined in: [src/api/DomainApi.ts:144](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DomainApi.ts#L144)

Updates the nameservers for a domain.

#### Parameters

##### options

[`UpdateNameServersRequest`](../interfaces/UpdateNameServersRequest.md)

The details of the nameservers to update.

#### Returns

`Promise`\<[`UpdateNsResponse`](../type-aliases/UpdateNsResponse.md)\>

A promise that resolves to the response from the API.
