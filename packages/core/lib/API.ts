import { globalResponseHandler } from "../helpers/globalResponseHandler";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_API as string;
// export const baseUrl = "https://portal.esimcard.com/api/landing";

function mergeHeaders(defaults: HeadersInit, extra?: HeadersInit): HeadersInit {
  return { ...defaults, ...extra };
}

type ApiInit = Omit<RequestInit, "headers" | "body"> & {
  headers?: HeadersInit;
  body?: RequestInit["body"] | Record<string, unknown> | undefined;
};

export async function api<T>(
  path: string,
  token?: string | null,
  init: ApiInit = {}
): Promise<T> {
  const url = path.startsWith("http") ? path : `${baseUrl}${path}`;

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    Accept: "application/json",
  };

  let body = init.body;
  if (body && typeof body === "object" && !(body instanceof FormData)) {
    body = JSON.stringify(body);
  }

  const res = await fetch(url, {
    ...init,
    headers: mergeHeaders(defaultHeaders, init.headers),
    body,
  });

  const data = await res.json();

  if (!res.ok || !data.status) {
    throw new Error(globalResponseHandler(data, res.status));
  }

  if (res.status === 204) return undefined as T;

  return data as T;
}
