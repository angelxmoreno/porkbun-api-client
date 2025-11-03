[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / CheckDomainResponse

# Type Alias: CheckDomainResponse

> **CheckDomainResponse** = [`SuccessResponse`](SuccessResponse.md)\<\{ `limits`: \{ `limit`: `string`; `naturalLanguage`: `string`; `TTL`: `string`; `used`: `number`; \}; `response`: \{ `additional?`: \{ `renewal?`: \{ `price`: `string`; `regularPrice`: `string`; `type`: `string`; \}; `transfer?`: \{ `price`: `string`; `regularPrice`: `string`; `type`: `string`; \}; \}; `avail`: `"yes"` \| `"no"`; `firstYearPromo?`: `"yes"` \| `"no"`; `premium?`: `"yes"` \| `"no"`; `price`: `string`; `regularPrice?`: `string`; `type`: `string`; \}; \}\>

Defined in: [src/types.ts:143](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/types.ts#L143)

Response for checking the availability of a domain.
