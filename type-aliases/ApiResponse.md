[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / ApiResponse

# Type Alias: ApiResponse\<T\>

> **ApiResponse**\<`T`\> = [`SuccessResponse`](SuccessResponse.md)\<`T`\> \| [`ErrorResponse`](../interfaces/ErrorResponse.md)

Defined in: [src/types.ts:65](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/types.ts#L65)

A union type representing any possible API response.

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `unknown`\> = `Record`\<`string`, `never`\>

The shape of the data returned in a successful response.
