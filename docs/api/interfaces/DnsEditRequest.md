[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / DnsEditRequest

# Interface: DnsEditRequest

Defined in: [src/api/DnsApi.ts:35](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L35)

The shape of the request body for editing a DNS record.

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### content?

> `optional` **content**: `string`

Defined in: [src/api/DnsApi.ts:45](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L45)

The new content for the record.

***

### domain

> **domain**: `string`

Defined in: [src/api/DnsApi.ts:37](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L37)

The domain of the record to edit.

***

### id

> **id**: `string`

Defined in: [src/api/DnsApi.ts:39](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L39)

The ID of the record to edit.

***

### name?

> `optional` **name**: `string`

Defined in: [src/api/DnsApi.ts:41](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L41)

The new subdomain for the record.

***

### ttl?

> `optional` **ttl**: `string`

Defined in: [src/api/DnsApi.ts:47](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L47)

The new TTL for the record.

***

### type?

> `optional` **type**: `string`

Defined in: [src/api/DnsApi.ts:43](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L43)

The new type for the record.
