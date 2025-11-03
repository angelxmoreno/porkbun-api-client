[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / CreateGlueRequest

# Interface: CreateGlueRequest

Defined in: [src/api/DomainApi.ts:92](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DomainApi.ts#L92)

The shape of the request body for creating a glue record.

## Properties

### domain

> **domain**: `string`

Defined in: [src/api/DomainApi.ts:94](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DomainApi.ts#L94)

The domain for which to create the glue record.

***

### glueHost

> **glueHost**: `string`

Defined in: [src/api/DomainApi.ts:96](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DomainApi.ts#L96)

The subdomain of the glue record.

***

### v4?

> `optional` **v4**: `string`[]

Defined in: [src/api/DomainApi.ts:98](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DomainApi.ts#L98)

An array of IPv4 addresses for the glue record.

***

### v6?

> `optional` **v6**: `string`[]

Defined in: [src/api/DomainApi.ts:100](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/DomainApi.ts#L100)

An array of IPv6 addresses for the glue record.
