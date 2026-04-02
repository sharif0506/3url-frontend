import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginApi } from '@/features/auth/api/loginApi'
import type { LoginCredentials } from '@/features/auth/types'

interface UseLoginFormReturn {
  values: LoginCredentials
  isLoading: boolean
  error: string | null
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => Promise<void>
}

export function useLoginForm(): UseLoginFormReturn {
  const [values, setValues] = useState<LoginCredentials>({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const { data } = await loginApi(values.email, values.password)
      localStorage.setItem('token', data.token)
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to reach the server.')
      setIsLoading(false)
    }
  }

  return { values, isLoading, error, handleChange, handleSubmit }
}
