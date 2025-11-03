[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / SslApi

# Class: SslApi

Defined in: [src/api/SslApi.ts:16](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/SslApi.ts#L16)

Provides access to the SSL-related endpoints of the Porkbun API.

## Extends

- [`BaseApi`](BaseApi.md)

## Constructors

### Constructor

> **new SslApi**(`httpClient`): `SslApi`

Defined in: [src/api/BaseApi.ts:18](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/BaseApi.ts#L18)

Creates an instance of a BaseApi-derived class.

#### Parameters

##### httpClient

[`PorkbunHttpClient`](PorkbunHttpClient.md)

The HTTP client instance.

#### Returns

`SslApi`

#### Inherited from

[`BaseApi`](BaseApi.md).[`constructor`](BaseApi.md#constructor)

## Methods

### retrieve()

> **retrieve**(`options`): `Promise`\<[`SslRetrieveResponse`](../type-aliases/SslRetrieveResponse.md)\>

Defined in: [src/api/SslApi.ts:27](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/SslApi.ts#L27)

Retrieves the SSL certificate bundle for a domain.

#### Parameters

##### options

[`SslRetrieveRequest`](../interfaces/SslRetrieveRequest.md)

The domain for which to retrieve the SSL bundle.

#### Returns

`Promise`\<[`SslRetrieveResponse`](../type-aliases/SslRetrieveResponse.md)\>

A promise that resolves to the SSL certificate bundle.

#### Example

```typescript
const response = await client.ssl.retrieve({ domain: 'example.com' });
console.log(response.bundle);
```
