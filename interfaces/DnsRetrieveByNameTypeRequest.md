[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / DnsRetrieveByNameTypeRequest

# Interface: DnsRetrieveByNameTypeRequest

Defined in: [src/api/DnsApi.ts:108](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DnsApi.ts#L108)

The shape of the request body for retrieving DNS records by name and type.

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### domain

> **domain**: `string`

Defined in: [src/api/DnsApi.ts:110](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DnsApi.ts#L110)

The domain for which to retrieve records.

***

### subdomain?

> `optional` **subdomain**: `string`

Defined in: [src/api/DnsApi.ts:114](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DnsApi.ts#L114)

The subdomain of the records to retrieve.

***

### type

> **type**: `string`

Defined in: [src/api/DnsApi.ts:112](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DnsApi.ts#L112)

The type of the records to retrieve.
