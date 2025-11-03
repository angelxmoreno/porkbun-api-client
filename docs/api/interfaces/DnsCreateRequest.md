[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / DnsCreateRequest

# Interface: DnsCreateRequest

Defined in: [src/api/DnsApi.ts:18](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L18)

The shape of the request body for creating a DNS record.

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### content

> **content**: `string`

Defined in: [src/api/DnsApi.ts:26](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L26)

The content of the DNS record.

***

### domain

> **domain**: `string`

Defined in: [src/api/DnsApi.ts:20](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L20)

The domain for which to create the record.

***

### name

> **name**: `string`

Defined in: [src/api/DnsApi.ts:22](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L22)

The subdomain for the record.

***

### ttl?

> `optional` **ttl**: `string`

Defined in: [src/api/DnsApi.ts:28](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L28)

The Time To Live (TTL) of the record in seconds.

***

### type

> **type**: `string`

Defined in: [src/api/DnsApi.ts:24](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L24)

The type of DNS record (e.g., A, CNAME, MX).
