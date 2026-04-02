import { API_ROUTES } from '@/config/env'

interface LoginResponse {
  message: string
  data: {
    token: string
  }
}

interface LoginErrorResponse {
  message: string
  errors?: { field: string; message: string }[]
}

export async function loginApi(email: string, password: string): Promise<LoginResponse> {
  const res = await fetch(API_ROUTES.auth.login, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, authProvider: 'local' }),
  })

  const data: LoginResponse & LoginErrorResponse = await res.json()

  if (!res.ok) {
    const message = data.errors?.[0]?.message ?? data.message ?? 'Login failed.'
    throw new Error(message)
  }

  return data
}
