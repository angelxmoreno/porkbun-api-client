[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / DnsEditByNameTypeRequest

# Interface: DnsEditByNameTypeRequest

Defined in: [src/api/DnsApi.ts:54](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L54)

The shape of the request body for editing a DNS record by its name and type.

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### content?

> `optional` **content**: `string`

Defined in: [src/api/DnsApi.ts:64](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L64)

The new content for the record.

***

### domain

> **domain**: `string`

Defined in: [src/api/DnsApi.ts:56](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L56)

The domain of the record to edit.

***

### name?

> `optional` **name**: `string`

Defined in: [src/api/DnsApi.ts:62](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L62)

The new subdomain for the record.

***

### subdomain?

> `optional` **subdomain**: `string`

Defined in: [src/api/DnsApi.ts:60](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L60)

The subdomain of the record to edit.

***

### ttl?

> `optional` **ttl**: `string`

Defined in: [src/api/DnsApi.ts:66](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L66)

The new TTL for the record.

***

### type

> **type**: `string`

Defined in: [src/api/DnsApi.ts:58](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L58)

The type of the record to edit.
