import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export function GoogleCallbackPage() {
  const navigate = useNavigate()
  const processed = useRef(false)

  useEffect(() => {
    if (processed.current) return
    processed.current = true

    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')
    const error = params.get('error')

    if (token) {
      localStorage.setItem('token', token)
      navigate('/dashboard', { replace: true })
    } else {
      const message = error ?? 'Google login failed. Please try again.'
      navigate(`/login?error=${encodeURIComponent(message)}`, { replace: true })
    }
  }, [navigate])

  return null
}