[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / DnsGetDnssecRecordsResponse

# Type Alias: DnsGetDnssecRecordsResponse

> **DnsGetDnssecRecordsResponse** = [`SuccessResponse`](SuccessResponse.md)\<\{ `records`: `Record`\<`string`, \{ `alg`: `string`; `digest`: `string`; `digestType`: `string`; `keyTag`: `string`; `maxSigLife?`: `string`; \}\>; \}\>

Defined in: [src/types.ts:273](https://github.com/angelxmoreno/porkbun-api-client/blob/db467d53999744b7c59645f5742e9ca01c0ebbd6/src/types.ts#L273)

Response for retrieving DNSSEC records for a domain.
