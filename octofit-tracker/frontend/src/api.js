const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api';

export const apiRuntime = codespaceName ? 'Codespaces' : 'Localhost fallback';

export function normalizeCollection(payload, resourceName) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (!payload || typeof payload !== 'object') {
    return [];
  }

  const candidates = [
    payload[resourceName],
    payload.results,
    payload.items,
    payload.data,
    payload.docs,
  ];

  return candidates.find(Array.isArray) ?? [];
}

export async function fetchCollection(resourceName) {
  const response = await fetch(`${apiBaseUrl}/${resourceName}/`);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const payload = await response.json();

  return {
    items: normalizeCollection(payload, resourceName),
    payload,
  };
}