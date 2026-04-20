import { useState, type FormEvent } from 'react'

interface RegisterValues {
  name: string
  email: string
  password: string
  confirmPassword: string
}

interface UseRegisterFormReturn {
  values: RegisterValues
  isLoading: boolean
  error: string | null
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
}

export function useRegisterForm(): UseRegisterFormReturn {
  const [values, setValues] = useState<RegisterValues>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    if (values.password !== values.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setIsLoading(true)
    try {
      // TODO: replace with real API call
      await new Promise<void>((resolve) => setTimeout(resolve, 800))
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return { values, isLoading, error, handleChange, handleSubmit }
}
