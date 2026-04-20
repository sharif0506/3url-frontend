import { useState, type FormEvent } from 'react'

interface UseForgotPasswordFormReturn {
  email: string
  isLoading: boolean
  isSubmitted: boolean
  error: string | null
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
}

export function useForgotPasswordForm(): UseForgotPasswordFormReturn {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setIsLoading(true)
    try {
      // TODO: replace with real API call
      await new Promise<void>((resolve) => setTimeout(resolve, 800))
      setIsSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return { email, isLoading, isSubmitted, error, handleChange, handleSubmit }
}
