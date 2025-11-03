[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / PorkbunConfig

# Interface: PorkbunConfig

Defined in: [src/types.ts:7](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/types.ts#L7)

Configuration options for the Porkbun API client.

## Properties

### apiKey

> **apiKey**: `string`

Defined in: [src/types.ts:9](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/types.ts#L9)

Your Porkbun API Key.

***

### baseUrl?

> `optional` **baseUrl**: `string`

Defined in: [src/types.ts:26](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/types.ts#L26)

The base URL for the Porkbun API.

#### Default

```ts
'https://api.porkbun.com/api/json/v3'
```

***

### cache?

> `optional` **cache**: `Keyv`\<`any`\>

Defined in: [src/types.ts:31](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/types.ts#L31)

An optional Keyv instance for caching API responses.
If not provided, caching will be disabled.

***

### forceIPv4?

> `optional` **forceIPv4**: `boolean`

Defined in: [src/types.ts:21](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/types.ts#L21)

If true, forces the client to use the IPv4-only API endpoint.

#### Default

```ts
false
```

***

### http?

> `optional` **http**: `AxiosInstance`

Defined in: [src/types.ts:16](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/types.ts#L16)

An optional Axios instance to use for making HTTP requests.
If not provided, a new Axios instance will be created.

***

### secretApiKey

> **secretApiKey**: `string`

Defined in: [src/types.ts:11](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/types.ts#L11)

Your Porkbun Secret API Key.
