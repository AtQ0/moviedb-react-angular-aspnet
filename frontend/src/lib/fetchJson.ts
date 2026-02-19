import type { ApiError } from "./shared/movies";

export async function fetchJson(input: RequestInfo, init?: RequestInit) {
    const res = await fetch(input, init);
    const body: unknown = await res.json();

    if (!res.ok) {
        const error = body as ApiError;

        throw new Error(
            typeof error.message === "string"
                ? error.message
                : `Request failed. Status: ${res.status}`,
        );
    }

    return body;
}
