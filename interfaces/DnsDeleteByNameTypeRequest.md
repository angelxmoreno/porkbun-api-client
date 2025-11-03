[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / DnsDeleteByNameTypeRequest

# Interface: DnsDeleteByNameTypeRequest

Defined in: [src/api/DnsApi.ts:84](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DnsApi.ts#L84)

The shape of the request body for deleting a DNS record by its name and type.

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### domain

> **domain**: `string`

Defined in: [src/api/DnsApi.ts:86](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DnsApi.ts#L86)

The domain of the record to delete.

***

### subdomain?

> `optional` **subdomain**: `string`

Defined in: [src/api/DnsApi.ts:90](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DnsApi.ts#L90)

The subdomain of the record to delete.

***

### type

> **type**: `string`

Defined in: [src/api/DnsApi.ts:88](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DnsApi.ts#L88)

The type of the record to delete.
