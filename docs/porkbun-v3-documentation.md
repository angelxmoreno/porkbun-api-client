# Porkbun JSON v3 API Documentation

This document provides a complete reference for the **DomainApi**, **DnsApi**, and **SslApi** classes, including:

* Endpoint paths
* Expected request objects
* Expected response objects

All documentation is strictly based on the official [Porkbun JSON v3 documentation](https://porkbun.com/api/json/v3/documentation). No invented endpoints or fields are included.

---

## DomainApi

### updateNameServers

* **Endpoint:** `POST /domain/updateNs/DOMAIN`
* **Request:**

```ts
{ ns: string[] }
```

* **Response:**

```ts
{
  status: 'SUCCESS'
}
```

### getNameServers

* **Endpoint:** `POST /domain/getNs/DOMAIN`
* **Request:** none
* **Response:**

```ts
{
  status: 'SUCCESS',
  ns: string[]
}
```

### listAll

* **Endpoint:** `POST /domain/listAll`
* **Request:**

```ts
{ start?: number; includeLabels?: 'yes' }
```

* **Response:**

```ts
{
  status: 'SUCCESS',
  domains: Array<{
    domain: string;
    status: 'ACTIVE' | 'INACTIVE';
    tld: string;
    createDate?: string;
    expireDate?: string;
    securityLock?: '0' | '1';
    whoisPrivacy?: '0' | '1';
    autoRenew?: number;
    notLocal?: number;
    labels?: Array<{
      id: string;
      title: string;
      color: string;
    }>;
  }>;
}
```

### checkDomain

* **Endpoint:** `POST /domain/checkDomain/DOMAIN`
* **Request:** none
* **Response:**

```ts
{
  status: 'SUCCESS',
  response: {
    avail: 'yes' | 'no';
    type: string;
    price: string;
    firstYearPromo?: 'yes' | 'no';
    regularPrice?: string;
    premium?: 'yes' | 'no';
    additional?: {
      renewal?: { type: string; price: string; regularPrice: string };
      transfer?: { type: string; price: string; regularPrice: string };
    };
  },
  limits: {
    TTL: string;
    limit: string;
    used: number;
    naturalLanguage: string;
  };
}
```

### addUrlForward

* **Endpoint:** `POST /domain/addUrlForward/DOMAIN`
* **Request:**

```ts
{
  subdomain: string;
  location: string;
  type: 'temporary' | 'permanent';
  includePath: 'yes' | 'no';
  wildcard: 'yes' | 'no';
}
```

* **Response:**

```ts
{
  status: 'SUCCESS'
}
```

### getUrlForwarding

* **Endpoint:** `POST /domain/getUrlForwarding/DOMAIN`
* **Request:** none
* **Response:**

```ts
{
  status: 'SUCCESS',
  forwards: Array<{
    id: string;
    subdomain: string;
    location: string;
    type: 'temporary' | 'permanent';
    includePath: 'yes' | 'no';
    wildcard: 'yes' | 'no';
  }>;
}
```

### deleteUrlForward

* **Endpoint:** `POST /domain/deleteUrlForward/DOMAIN/RECORDID`
* **Request:** none
* **Response:**

```ts
{
  status: 'SUCCESS'
}
```

### createGlue

* **Endpoint:** `POST /domain/createGlue/DOMAIN/GLUE_HOST_SUBDOMAIN`
* **Request:**

```ts
{ v4?: string[]; v6?: string[] }
```

* **Response:**

```ts
{ status: 'SUCCESS' }
```

### updateGlue

* **Endpoint:** `POST /domain/updateGlue/DOMAIN/GLUE_HOST_SUBDOMAIN`
* **Request:**

```ts
{ v4?: string[]; v6?: string[] }
```

* **Response:**

```ts
{ status: 'SUCCESS' }
```

### deleteGlue

* **Endpoint:** `POST /domain/deleteGlue/DOMAIN/GLUE_HOST_SUBDOMAIN`
* **Request:** none
* **Response:**

```ts
{ status: 'SUCCESS' }
```

### getGlue

* **Endpoint:** `POST /domain/getGlue/DOMAIN`
* **Request:** none
* **Response:**

```ts
{
  status: 'SUCCESS',
  hosts: Array<[
    string,
    {
      v4?: string[];
      v6?: string[];
    }
  ]>
}
```

---

## DnsApi

### create

* **Endpoint:** `POST /dns/create/DOMAIN`
* **Request:**

```ts
{ name: string; type: string; content: string; ttl?: string; prio?: string }
```

* **Response:**

```ts
{ status: 'SUCCESS'; id: string }
```

### edit

* **Endpoint:** `POST /dns/edit/DOMAIN/ID`
* **Request:**

```ts
{ name?: string; type?: string; content?: string; ttl?: string; prio?: string }
```

* **Response:**

```ts
{ status: 'SUCCESS' }
```

### editByNameType

* **Endpoint:** `POST /dns/editByNameType/DOMAIN/TYPE/[SUBDOMAIN]`
* **Request:**

```ts
{ content?: string; ttl?: string; prio?: string }
```

* **Response:**

```ts
{ status: 'SUCCESS' }
```

### delete

* **Endpoint:** `POST /dns/delete/DOMAIN/ID`
* **Request:** none
* **Response:**

```ts
{ status: 'SUCCESS' }
```

### deleteByNameType

* **Endpoint:** `POST /dns/deleteByNameType/DOMAIN/TYPE/[SUBDOMAIN]`
* **Request:** none
* **Response:**

```ts
{ status: 'SUCCESS' }
```

### retrieve

* **Endpoint:** `POST /dns/retrieve/DOMAIN[/ID]`
* **Request:** none
* **Response:**

```ts
{
  status: 'SUCCESS';
  records: Array<{
    id: string;
    domain: string;
    name: string;
    type: string;
    content: string;
    ttl: string;
    [key: string]: unknown;
  }>;
}
```

### retrieveByNameType

* **Endpoint:** `POST /dns/retrieveByNameType/DOMAIN/TYPE/[SUBDOMAIN]`
* **Request:** none
* **Response:**

```ts
{
  status: 'SUCCESS';
  records: Array<{
    id: string;
    domain: string;
    name: string;
    type: string;
    content: string;
    ttl: string;
    [key: string]: unknown;
  }>;
}
```

### createDnssecRecord

* **Endpoint:** `POST /dns/createDnssecRecord/DOMAIN`
* **Request:**

```ts
{ keyTag: string; alg: string; digestType: string; digest: string }
```

* **Response:**

```ts
{ status: 'SUCCESS' }
```

### getDnssecRecords

* **Endpoint:** `POST /dns/getDnssecRecords/DOMAIN`
* **Request:** none
* **Response:**

```ts
{
  status: 'SUCCESS';
  records: Record<string, {
    keyTag: string; alg: string; digestType: string; digest: string; maxSigLife?: string;
  }>;
}
```

### deleteDnssecRecord

* **Endpoint:** `POST /dns/deleteDnssecRecord/DOMAIN/KEYTAG`
* **Request:** none
* **Response:**

```ts
{ status: 'SUCCESS' }
```

---

## SslApi

### retrieve

* **Endpoint:** `POST /ssl/retrieve/DOMAIN`
* **Request:** none
* **Response:**

```ts
{
  status: 'SUCCESS';
  bundle?: string;
  [key: string]: unknown;
}
```
