export class PorkbunApiError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'PorkbunApiError';
    }
}
