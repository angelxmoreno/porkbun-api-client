/**
 * Custom error class for handling API-specific errors from the Porkbun API.
 * This error is thrown when the API returns a response with a "status" of "ERROR".
 *
 * @example
 * ```typescript
 * try {
 *   await client.dns.createRecord('example.com', { ... });
 * } catch (error) {
 *   if (error instanceof PorkbunApiError) {
 *     console.error(`API Error: ${error.message}`);
 *   }
 * }
 * ```
 */
export class PorkbunApiError extends Error {
    /**
     * Creates an instance of PorkbunApiError.
     * @param message The error message returned by the Porkbun API.
     */
    constructor(message: string) {
        super(message);
        this.name = 'PorkbunApiError';
    }
}
