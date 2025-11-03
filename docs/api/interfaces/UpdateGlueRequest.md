[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / UpdateGlueRequest

# Interface: UpdateGlueRequest

Defined in: [src/api/DomainApi.ts:106](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DomainApi.ts#L106)

The shape of the request body for updating a glue record.

## Properties

### domain

> **domain**: `string`

Defined in: [src/api/DomainApi.ts:108](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DomainApi.ts#L108)

The domain of the glue record to update.

***

### glueHost

> **glueHost**: `string`

Defined in: [src/api/DomainApi.ts:110](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DomainApi.ts#L110)

The subdomain of the glue record.

***

### v4?

> `optional` **v4**: `string`[]

Defined in: [src/api/DomainApi.ts:112](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DomainApi.ts#L112)

An array of new IPv4 addresses for the glue record.

***

### v6?

> `optional` **v6**: `string`[]

Defined in: [src/api/DomainApi.ts:114](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DomainApi.ts#L114)

An array of new IPv6 addresses for the glue record.
