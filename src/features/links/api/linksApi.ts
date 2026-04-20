import { env } from '@/config/env'
import type { Link, LinkStats } from '@/features/links/types'

function authHeaders() {
  const token = localStorage.getItem('token')
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
}

export async function fetchLinksApi(): Promise<Link[]> {
  // TODO: replace with real endpoint
  const res = await fetch(`${env.apiUrl}/links`, {
    headers: authHeaders(),
  })
  if (!res.ok) throw new Error('Failed to fetch links.')
  const data = await res.json()
  return data.data
}

export async function fetchStatsApi(): Promise<LinkStats> {
  // TODO: replace with real endpoint
  const res = await fetch(`${env.apiUrl}/links/stats`, {
    headers: authHeaders(),
  })
  if (!res.ok) throw new Error('Failed to fetch stats.')
  const data = await res.json()
  return data.data
}

export async function createLinkApi(originalUrl: string): Promise<Link> {
  // TODO: replace with real endpoint
  const res = await fetch(`${env.apiUrl}/links`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ originalUrl }),
  })
  const data = await res.json()
  if (!res.ok) {
    const message = data.errors?.[0]?.message ?? data.message ?? 'Failed to shorten URL.'
    throw new Error(message)
  }
  return data.data
}

export async function deleteLinkApi(id: string): Promise<void> {
  // TODO: replace with real endpoint
  const res = await fetch(`${env.apiUrl}/links/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  })
  if (!res.ok) throw new Error('Failed to delete link.')
}
