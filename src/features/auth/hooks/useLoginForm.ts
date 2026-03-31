import { useState, type FormEvent } from 'react'
import type { LoginCredentials } from '@/features/auth/types'

interface UseLoginFormReturn {
  values: LoginCredentials
  isLoading: boolean
  error: string | null
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
}

export function useLoginForm(): UseLoginFormReturn {
  const [values, setValues] = useState<LoginCredentials>({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      // TODO: replace with real API call
      await new Promise<void>((resolve) => setTimeout(resolve, 800))
    } catch {
      setError('Invalid email or password. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return { values, isLoading, error, handleChange, handleSubmit }
}
