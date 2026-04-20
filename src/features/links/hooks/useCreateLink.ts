import { useState, type FormEvent } from 'react'
import { createLinkApi } from '@/features/links/api/linksApi'
import type { Link } from '@/features/links/types'

export function useCreateLink(onCreated: (link: Link) => void) {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setIsLoading(true)
    try {
      const link = await createLinkApi(url)
      setUrl('')
      onCreated(link)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to shorten URL.')
    } finally {
      setIsLoading(false)
    }
  }

  return { url, isLoading, error, handleChange, handleSubmit }
}
