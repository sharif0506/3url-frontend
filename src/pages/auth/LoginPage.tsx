import { Link, useSearchParams } from 'react-router-dom'
import { LoginForm, SocialLoginButtons } from '@/features/auth'
import { AuthLayout } from '@/components/layout/AuthLayout'

export function LoginPage() {
  const [searchParams] = useSearchParams()
  const oauthError = searchParams.get('error')

  return (
    <AuthLayout
      title="Sign in to your account"
      footer={
        <>
          New to 3URL?{' '}
          <Link to="/register" className="text-accent font-medium hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      {oauthError && (
        <p
          className="text-sm text-red-500 bg-red-500/8 border border-red-500/25 rounded-lg px-3 py-2.5 m-0"
          role="alert"
        >
          {oauthError}
        </p>
      )}

      <SocialLoginButtons />

      <div className="flex items-center gap-2.5 text-page-text text-xs">
        <div className="flex-1 h-px bg-page-border" />
        <span>or</span>
        <div className="flex-1 h-px bg-page-border" />
      </div>

      <LoginForm />
    </AuthLayout>
  )
}
