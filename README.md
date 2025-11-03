# Porkbun (v3) API Client

[![npm version](https://badge.fury.io/js/porkbun-api-client.svg)](https://www.npmjs.com/package/porkbun-api-client)
[![License: MIT](https://img.shields.io/badge/License-MIT-lime.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-lime.svg)](https://www.typescriptlang.org/)
[![codecov](https://codecov.io/gh/angelxmoreno/porkbun-api-client/graph/badge.svg?token=X8DYDTU2N8)](https://codecov.io/gh/angelxmoreno/porkbun-api-client)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/11daea2bb4af4182b226db2888f61246)](https://app.codacy.com/gh/angelxmoreno/porkbun-api-client/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/11daea2bb4af4182b226db2888f61246)](https://app.codacy.com/gh/angelxmoreno/porkbun-api-client/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_coverage)
![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/angelxmoreno/porkbun-api-client?utm_source=oss&utm_medium=github&utm_campaign=angelxmoreno%2Fporkbun-api-client&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)
[![Formatted with Biome](https://img.shields.io/badge/Formatted_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev/)

<a href="https://bun.sh" title="Built with Bun" style="display: inline-flex; align-items: center; padding: 2px 8px; background: #000; border-radius: 3px; text-decoration: none; height: 20px; box-sizing: border-box;">
  <img src="./assets/bun-logo.svg" alt="Bun" width="16" height="16" style="margin-right: 6px;" />
  <span style="color: white; font-family: Arial, sans-serif; font-size: 11px; line-height: 1;">Made with Bun</span>
</a>

A modern, typed TypeScript client for the [Porkbun v3 API](https://porkbun.com/api/json/v3/documentation).

Built with `axios` for requests and tested with [Bun](https://bun.sh/).

## Features

*   **Fully Typed:** Complete TypeScript definitions for all API endpoints and models.
*   **Modern:** Built with `axios` and modern `async/await` syntax.
*   **Organized:** API endpoints are grouped into logical clients (dns, domain, ssl, etc.).
*   **Error Handling:** Throws custom `PorkbunApiError` for API-level failures.

## Installation

```bash
bun add porkbun-api-client
```

Or with `npm`/`yarn`:

```bash
npm install porkbun-api-client
yarn add porkbun-api-client
```

## Basic Usage

Initialize the client with your API and Secret API keys. It's recommended to load these from environment variables.

```typescript
import { PorkbunApiClient } from 'porkbun-api-client';

const client = new PorkbunApiClient({
    apiKey: process.env.PORKBUN_API_KEY!,
    secretApiKey: process.env.PORKBUN_SECRET_API_KEY!,
});

async function checkIp() {
    try {
        // Ping the API
        const { yourIp } = await client.health.ping();
        console.log(`Porkbun sees my IP as: ${yourIp}`);
    } catch (error) {
        console.error('Failed to ping API:', error);
    }
}

checkIp();
```

## API Reference

API endpoints are grouped by functionality.

### Health Check (`client.health`)

#### Ping the API

Checks credentials and gets your IP address.

```typescript
const { yourIp } = await client.health.ping();
console.log(`My IP is: ${yourIp}`);
```

### DNS Management (`client.dns`)

#### Retrieve DNS Records

Retrieves all DNS records for a domain.

```typescript
const { records } = await client.dns.retrieve({ domain: 'example.com' });
console.log(records);
```

#### Create a DNS Record

Creates a new DNS record.

```typescript
const { id } = await client.dns.create({
    domain: 'example.com',
    name: 'www',
    type: 'A',
    content: '1.2.3.4',
    ttl: '300',
});
console.log(`Created record with ID: ${id}`);
```

### Domain Management (`client.domain`)

#### List All Domains

Retrieves a list of all domains in your account.

```typescript
const { domains } = await client.domain.listAll();
console.log(domains);
```

## Error Handling

If the Porkbun API returns an error (e.g., "Invalid API Key" or "Domain not found"), the client will throw a `PorkbunApiError`.

```typescript
import { PorkbunApiClient, PorkbunApiError } from 'porkbun-api-client';

const client = new PorkbunApiClient({ apiKey: 'bad', secretApiKey: 'key' });

try {
    await client.health.ping();
} catch (error) {
    if (error instanceof PorkbunApiError) {
        // Error came from the Porkbun API
        console.error(`API Error: ${error.message}`);
    } else {
        // Network error or other issue
        console.error(`HTTP/Network Error: ${error.message}`);
    }
}
```

## Development

This project uses [Bun](https://bun.sh/) for development and testing.

1.  **Install dependencies:**
    ```bash
    bun install
    ```
2.  **Run tests:**
    ```bash
    bun test
    ```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) to get started.

Also, please be sure to review our [code of conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.