import { useState, useEffect, useCallback } from 'react'
import { fetchLinksApi, fetchStatsApi, deleteLinkApi } from '@/features/links/api/linksApi'
import type { Link, LinkStats } from '@/features/links/types'

export function useLinks() {
  const [links, setLinks] = useState<Link[]>([])
  const [stats, setStats] = useState<LinkStats>({ totalLinks: 0, totalClicks: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const [linksData, statsData] = await Promise.all([fetchLinksApi(), fetchStatsApi()])
      setLinks(linksData)
      setStats(statsData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => { load() }, [load])

  async function deleteLink(id: string) {
    try {
      await deleteLinkApi(id)
      setLinks((prev) => prev.filter((l) => l.id !== id))
      setStats((prev) => ({ ...prev, totalLinks: prev.totalLinks - 1 }))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete link.')
    }
  }

  return { links, stats, isLoading, error, reload: load, deleteLink }
}
