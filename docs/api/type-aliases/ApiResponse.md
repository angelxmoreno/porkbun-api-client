[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / ApiResponse

# Type Alias: ApiResponse\<T\>

> **ApiResponse**\<`T`\> = [`SuccessResponse`](SuccessResponse.md)\<`T`\> \| [`ErrorResponse`](../interfaces/ErrorResponse.md)

Defined in: [src/types.ts:65](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/types.ts#L65)

A union type representing any possible API response.

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `unknown`\> = `Record`\<`string`, `never`\>

The shape of the data returned in a successful response.
