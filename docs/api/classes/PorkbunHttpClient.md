[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / PorkbunHttpClient

# Class: PorkbunHttpClient

Defined in: [src/PorkbunHttpClient.ts:15](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/PorkbunHttpClient.ts#L15)

A low-level HTTP client for making authenticated requests to the Porkbun API.
This class handles the boilerplate of authentication and error handling.
It is used internally by the API-specific classes like `DnsApi` and `DomainApi`.

## Constructors

### Constructor

> **new PorkbunHttpClient**(`config`): `PorkbunHttpClient`

Defined in: [src/PorkbunHttpClient.ts:25](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/PorkbunHttpClient.ts#L25)

Creates an instance of the PorkbunHttpClient.

#### Parameters

##### config

[`PorkbunConfig`](../interfaces/PorkbunConfig.md)

The configuration options for the client.

#### Returns

`PorkbunHttpClient`

## Methods

### makeRequest()

> **makeRequest**\<`T`, `B`\>(`endpoint`, `data?`): `Promise`\<[`SuccessResponse`](../type-aliases/SuccessResponse.md)\<`T`\>\>

Defined in: [src/PorkbunHttpClient.ts:42](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/PorkbunHttpClient.ts#L42)

Makes an authenticated POST request to a specified Porkbun API endpoint.

#### Type Parameters

##### T

`T` *extends* `Record`\<`string`, `unknown`\>

The expected shape of the data in a successful response.

##### B

`B` *extends* `Record`\<`string`, `unknown`\> = `Record`\<`string`, `unknown`\>

The shape of the request body.

#### Parameters

##### endpoint

`string`

The API endpoint to call (e.g., '/dns/create/example.com').

##### data?

`B`

The data to send in the request body.

#### Returns

`Promise`\<[`SuccessResponse`](../type-aliases/SuccessResponse.md)\<`T`\>\>

A promise that resolves to the successful API response data.

#### Throws

When the API returns a status of "ERROR".

#### Throws

When a network or other HTTP error occurs.
