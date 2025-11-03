[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / BaseApi

# Abstract Class: BaseApi

Defined in: [src/api/BaseApi.ts:7](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/BaseApi.ts#L7)

An abstract base class for all API-specific classes.
It holds a reference to the HTTP client and provides a common constructor.

## Extended by

- [`DnsApi`](DnsApi.md)
- [`DomainApi`](DomainApi.md)
- [`HealthApi`](HealthApi.md)
- [`PricingApi`](PricingApi.md)
- [`SslApi`](SslApi.md)

## Constructors

### Constructor

> **new BaseApi**(`httpClient`): `BaseApi`

Defined in: [src/api/BaseApi.ts:18](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/api/BaseApi.ts#L18)

Creates an instance of a BaseApi-derived class.

#### Parameters

##### httpClient

[`PorkbunHttpClient`](PorkbunHttpClient.md)

The HTTP client instance.

#### Returns

`BaseApi`
