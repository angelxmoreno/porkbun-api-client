[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / PricingApi

# Class: PricingApi

Defined in: [src/api/PricingApi.ts:4](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/PricingApi.ts#L4)

An abstract base class for all API-specific classes.
It holds a reference to the HTTP client and provides a common constructor.

## Extends

- [`BaseApi`](BaseApi.md)

## Constructors

### Constructor

> **new PricingApi**(`httpClient`): `PricingApi`

Defined in: [src/api/BaseApi.ts:18](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/BaseApi.ts#L18)

Creates an instance of a BaseApi-derived class.

#### Parameters

##### httpClient

[`PorkbunHttpClient`](PorkbunHttpClient.md)

The HTTP client instance.

#### Returns

`PricingApi`

#### Inherited from

[`BaseApi`](BaseApi.md).[`constructor`](BaseApi.md#constructor)

## Methods

### get()

> **get**(): `Promise`\<[`PricingGetResponse`](../type-aliases/PricingGetResponse.md)\>

Defined in: [src/api/PricingApi.ts:5](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/api/PricingApi.ts#L5)

#### Returns

`Promise`\<[`PricingGetResponse`](../type-aliases/PricingGetResponse.md)\>
