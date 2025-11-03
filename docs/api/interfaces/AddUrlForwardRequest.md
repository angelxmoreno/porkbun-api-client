[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / AddUrlForwardRequest

# Interface: AddUrlForwardRequest

Defined in: [src/api/DomainApi.ts:56](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DomainApi.ts#L56)

The shape of the request body for adding a URL forwarder.

## Properties

### domain

> **domain**: `string`

Defined in: [src/api/DomainApi.ts:58](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DomainApi.ts#L58)

The domain for which to add the forwarder.

***

### includePath

> **includePath**: `"yes"` \| `"no"`

Defined in: [src/api/DomainApi.ts:66](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DomainApi.ts#L66)

Whether to include the path in the forward.

***

### location

> **location**: `string`

Defined in: [src/api/DomainApi.ts:62](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DomainApi.ts#L62)

The destination URL.

***

### subdomain

> **subdomain**: `string`

Defined in: [src/api/DomainApi.ts:60](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DomainApi.ts#L60)

The subdomain to forward.

***

### type

> **type**: `"temporary"` \| `"permanent"`

Defined in: [src/api/DomainApi.ts:64](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DomainApi.ts#L64)

The type of forwarding.

***

### wildcard

> **wildcard**: `"yes"` \| `"no"`

Defined in: [src/api/DomainApi.ts:68](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/DomainApi.ts#L68)

Whether to use a wildcard for the forward.
