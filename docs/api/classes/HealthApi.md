[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / HealthApi

# Class: HealthApi

Defined in: [src/api/HealthApi.ts:7](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/HealthApi.ts#L7)

Provides access to the health-related endpoints of the Porkbun API.

## Extends

- [`BaseApi`](BaseApi.md)

## Constructors

### Constructor

> **new HealthApi**(`httpClient`): `HealthApi`

Defined in: [src/api/BaseApi.ts:18](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/BaseApi.ts#L18)

Creates an instance of a BaseApi-derived class.

#### Parameters

##### httpClient

[`PorkbunHttpClient`](PorkbunHttpClient.md)

The HTTP client instance.

#### Returns

`HealthApi`

#### Inherited from

[`BaseApi`](BaseApi.md).[`constructor`](BaseApi.md#constructor)

## Methods

### ping()

> **ping**(): `Promise`\<[`PingResponse`](../type-aliases/PingResponse.md)\>

Defined in: [src/api/HealthApi.ts:18](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/HealthApi.ts#L18)

Pings the API to check credentials and get your IP address.
This is a useful method for testing your API credentials.

#### Returns

`Promise`\<[`PingResponse`](../type-aliases/PingResponse.md)\>

A promise that resolves to the ping response.

#### Example

```typescript
const response = await client.health.ping();
console.log(response.yourIp);
```
