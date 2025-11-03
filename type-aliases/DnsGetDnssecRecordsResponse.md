[**Porkbun API Client Documentation**](../README.md)

***

[Porkbun API Client Documentation](../README.md) / DnsGetDnssecRecordsResponse

# Type Alias: DnsGetDnssecRecordsResponse

> **DnsGetDnssecRecordsResponse** = [`SuccessResponse`](SuccessResponse.md)\<\{ `records`: `Record`\<`string`, \{ `alg`: `string`; `digest`: `string`; `digestType`: `string`; `keyTag`: `string`; `maxSigLife?`: `string`; \}\>; \}\>

Defined in: [src/types.ts:273](https://github.com/angelxmoreno/porkbun-api-client/blob/2ea97332a56bbdbd149edfcd5105c2c4e8d1c127/src/types.ts#L273)

Response for retrieving DNSSEC records for a domain.
