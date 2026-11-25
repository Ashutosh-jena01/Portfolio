export interface BackendHealth {
  status: string
  service: string
}

export interface DatabaseHealth {
  status: string
  database: string
}

async function apiRequest<T>(endpoint: string): Promise<T> {
  const response = await fetch(endpoint, {
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`)
  }

  return response.json() as Promise<T>
}

export const api = {
  getBackendHealth: () =>
    apiRequest<BackendHealth>('/api/v1/health'),

  getDatabaseHealth: () =>
    apiRequest<DatabaseHealth>('/api/v1/health/database'),
}