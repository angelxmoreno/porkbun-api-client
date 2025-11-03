[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / DnsApi

# Class: DnsApi

Defined in: [src/api/DnsApi.ts:150](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L150)

Provides access to the DNS-related endpoints of the Porkbun API.

## Extends

- [`BaseApi`](BaseApi.md)

## Constructors

### Constructor

> **new DnsApi**(`httpClient`): `DnsApi`

Defined in: [src/api/BaseApi.ts:18](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/BaseApi.ts#L18)

Creates an instance of a BaseApi-derived class.

#### Parameters

##### httpClient

[`PorkbunHttpClient`](PorkbunHttpClient.md)

The HTTP client instance.

#### Returns

`DnsApi`

#### Inherited from

[`BaseApi`](BaseApi.md).[`constructor`](BaseApi.md#constructor)

## Methods

### create()

> **create**(`options`): `Promise`\<[`DnsCreateResponse`](../type-aliases/DnsCreateResponse.md)\>

Defined in: [src/api/DnsApi.ts:166](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L166)

Creates a new DNS record for the specified domain.

#### Parameters

##### options

[`DnsCreateRequest`](../interfaces/DnsCreateRequest.md)

The details of the DNS record to create.

#### Returns

`Promise`\<[`DnsCreateResponse`](../type-aliases/DnsCreateResponse.md)\>

A promise that resolves to the response from the API.

#### Example

```typescript
const response = await client.dns.create({
  domain: 'example.com',
  name: 'www',
  type: 'A',
  content: '1.2.3.4',
});
console.log(response.id);
```

***

### createDnssecRecord()

> **createDnssecRecord**(`options`): `Promise`\<[`DnsCreateDnssecRecordResponse`](../type-aliases/DnsCreateDnssecRecordResponse.md)\>

Defined in: [src/api/DnsApi.ts:246](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L246)

Creates a new DNSSEC record for the specified domain.

#### Parameters

##### options

[`DnsCreateDnssecRecordRequest`](../interfaces/DnsCreateDnssecRecordRequest.md)

The details of the DNSSEC record to create.

#### Returns

`Promise`\<[`DnsCreateDnssecRecordResponse`](../type-aliases/DnsCreateDnssecRecordResponse.md)\>

A promise that resolves to the response from the API.

***

### delete()

> **delete**(`options`): `Promise`\<[`DnsDeleteResponse`](../type-aliases/DnsDeleteResponse.md)\>

Defined in: [src/api/DnsApi.ts:199](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L199)

Deletes a DNS record by its ID.

#### Parameters

##### options

[`DnsDeleteRequest`](../interfaces/DnsDeleteRequest.md)

The details of the DNS record to delete.

#### Returns

`Promise`\<[`DnsDeleteResponse`](../type-aliases/DnsDeleteResponse.md)\>

A promise that resolves to the response from the API.

***

### deleteByNameType()

> **deleteByNameType**(`options`): `Promise`\<[`DnsDeleteByNameTypeResponse`](../type-aliases/DnsDeleteByNameTypeResponse.md)\>

Defined in: [src/api/DnsApi.ts:209](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L209)

Deletes a DNS record by its name and type.

#### Parameters

##### options

[`DnsDeleteByNameTypeRequest`](../interfaces/DnsDeleteByNameTypeRequest.md)

The details of the DNS record to delete.

#### Returns

`Promise`\<[`DnsDeleteByNameTypeResponse`](../type-aliases/DnsDeleteByNameTypeResponse.md)\>

A promise that resolves to the response from the API.

***

### deleteDnssecRecord()

> **deleteDnssecRecord**(`options`): `Promise`\<[`DnsDeleteDnssecRecordResponse`](../type-aliases/DnsDeleteDnssecRecordResponse.md)\>

Defined in: [src/api/DnsApi.ts:266](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L266)

Deletes a DNSSEC record by its key tag.

#### Parameters

##### options

[`DnsDeleteDnssecRecordRequest`](../interfaces/DnsDeleteDnssecRecordRequest.md)

The details of the DNSSEC record to delete.

#### Returns

`Promise`\<[`DnsDeleteDnssecRecordResponse`](../type-aliases/DnsDeleteDnssecRecordResponse.md)\>

A promise that resolves to the response from the API.

***

### edit()

> **edit**(`options`): `Promise`\<[`DnsEditResponse`](../type-aliases/DnsEditResponse.md)\>

Defined in: [src/api/DnsApi.ts:176](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L176)

Edits an existing DNS record.

#### Parameters

##### options

[`DnsEditRequest`](../interfaces/DnsEditRequest.md)

The details of the DNS record to edit.

#### Returns

`Promise`\<[`DnsEditResponse`](../type-aliases/DnsEditResponse.md)\>

A promise that resolves to the response from the API.

***

### editByNameType()

> **editByNameType**(`options`): `Promise`\<[`DnsEditByNameTypeResponse`](../type-aliases/DnsEditByNameTypeResponse.md)\>

Defined in: [src/api/DnsApi.ts:186](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L186)

Edits an existing DNS record, finding it by its name and type.

#### Parameters

##### options

[`DnsEditByNameTypeRequest`](../interfaces/DnsEditByNameTypeRequest.md)

The details of the DNS record to edit.

#### Returns

`Promise`\<[`DnsEditByNameTypeResponse`](../type-aliases/DnsEditByNameTypeResponse.md)\>

A promise that resolves to the response from the API.

***

### getDnssecRecords()

> **getDnssecRecords**(`options`): `Promise`\<[`DnsGetDnssecRecordsResponse`](../type-aliases/DnsGetDnssecRecordsResponse.md)\>

Defined in: [src/api/DnsApi.ts:256](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L256)

Retrieves the DNSSEC records for a domain.

#### Parameters

##### options

[`DnsGetDnssecRecordsRequest`](../interfaces/DnsGetDnssecRecordsRequest.md)

The details of the records to retrieve.

#### Returns

`Promise`\<[`DnsGetDnssecRecordsResponse`](../type-aliases/DnsGetDnssecRecordsResponse.md)\>

A promise that resolves to the response from the API.

***

### retrieve()

> **retrieve**(`options`): `Promise`\<[`DnsRetrieveResponse`](../type-aliases/DnsRetrieveResponse.md)\>

Defined in: [src/api/DnsApi.ts:222](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L222)

Retrieves DNS records for a domain. If an ID is provided, only that record will be retrieved.

#### Parameters

##### options

[`DnsRetrieveRequest`](../interfaces/DnsRetrieveRequest.md)

The details of the records to retrieve.

#### Returns

`Promise`\<[`DnsRetrieveResponse`](../type-aliases/DnsRetrieveResponse.md)\>

A promise that resolves to the response from the API.

***

### retrieveByNameType()

> **retrieveByNameType**(`options`): `Promise`\<[`DnsRetrieveByNameTypeResponse`](../type-aliases/DnsRetrieveByNameTypeResponse.md)\>

Defined in: [src/api/DnsApi.ts:233](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L233)

Retrieves DNS records for a domain, filtering by name and type.

#### Parameters

##### options

[`DnsRetrieveByNameTypeRequest`](../interfaces/DnsRetrieveByNameTypeRequest.md)

The details of the records to retrieve.

#### Returns

`Promise`\<[`DnsRetrieveByNameTypeResponse`](../type-aliases/DnsRetrieveByNameTypeResponse.md)\>

A promise that resolves to the response from the API.
