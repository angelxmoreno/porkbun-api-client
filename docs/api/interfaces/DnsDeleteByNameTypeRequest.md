[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / DnsDeleteByNameTypeRequest

# Interface: DnsDeleteByNameTypeRequest

Defined in: [src/api/DnsApi.ts:84](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L84)

The shape of the request body for deleting a DNS record by its name and type.

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### domain

> **domain**: `string`

Defined in: [src/api/DnsApi.ts:86](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L86)

The domain of the record to delete.

***

### subdomain?

> `optional` **subdomain**: `string`

Defined in: [src/api/DnsApi.ts:90](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L90)

The subdomain of the record to delete.

***

### type

> **type**: `string`

Defined in: [src/api/DnsApi.ts:88](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DnsApi.ts#L88)

The type of the record to delete.
