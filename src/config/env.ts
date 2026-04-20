const apiUrl = import.meta.env.VITE_API_URL

if (!apiUrl) {
  throw new Error('VITE_API_URL is not defined. Check your .env.local file.')
}

export const env = {
  apiUrl: apiUrl as string,
} as const

export const API_ROUTES = {
  auth: {
    login:          `${env.apiUrl}/users/login`,
    register:       `${env.apiUrl}/users/register`,
    forgotPassword: `${env.apiUrl}/users/forgot-password`,
    resetPassword:  `${env.apiUrl}/users/reset-password`,
    googleOAuth:    `${env.apiUrl}/users/auth/google`,
  },
} as const
