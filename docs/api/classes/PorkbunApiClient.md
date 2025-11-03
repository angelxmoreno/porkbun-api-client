[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / PorkbunApiClient

# Class: PorkbunApiClient

Defined in: [src/PorkbunApiClient.ts:22](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/PorkbunApiClient.ts#L22)

The main client for interacting with the Porkbun API.
It provides access to all API endpoints through its properties.

## Example

```typescript
import { PorkbunApiClient } from 'porkbun-api-client';

const client = new PorkbunApiClient({
  apiKey: process.env.PORKBUN_API_KEY!,
  secretApiKey: process.env.PORKBUN_SECRET_API_KEY!,
});

const { yourIp } = await client.health.ping();
console.log(`My IP is: ${yourIp}`);
```

## Constructors

### Constructor

> **new PorkbunApiClient**(`config`): `PorkbunApiClient`

Defined in: [src/PorkbunApiClient.ts:41](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/PorkbunApiClient.ts#L41)

Creates an instance of the PorkbunApiClient.

#### Parameters

##### config

[`PorkbunConfig`](../interfaces/PorkbunConfig.md)

The configuration options for the client.

#### Returns

`PorkbunApiClient`

## Properties

### dns

> **dns**: [`DnsApi`](DnsApi.md)

Defined in: [src/PorkbunApiClient.ts:31](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/PorkbunApiClient.ts#L31)

Provides access to the DNS-related endpoints.

***

### domain

> **domain**: [`DomainApi`](DomainApi.md)

Defined in: [src/PorkbunApiClient.ts:29](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/PorkbunApiClient.ts#L29)

Provides access to the domain-related endpoints.

***

### health

> **health**: [`HealthApi`](HealthApi.md)

Defined in: [src/PorkbunApiClient.ts:35](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/PorkbunApiClient.ts#L35)

Provides access to the health-related endpoints.

***

### ssl

> **ssl**: [`SslApi`](SslApi.md)

Defined in: [src/PorkbunApiClient.ts:33](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/PorkbunApiClient.ts#L33)

Provides access to the SSL-related endpoints.
