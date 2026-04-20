import { Link } from 'react-router-dom'
import { RegisterForm, SocialLoginButtons } from '@/features/auth'
import { AuthLayout } from '@/components/layout/AuthLayout'

export function RegisterPage() {
  return (
    <AuthLayout
      title="Create your account"
      footer={
        <>
          Already have an account?{' '}
          <Link to="/login" className="text-accent font-medium hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <SocialLoginButtons />

      <div className="flex items-center gap-2.5 text-page-text text-xs">
        <div className="flex-1 h-px bg-page-border" />
        <span>or</span>
        <div className="flex-1 h-px bg-page-border" />
      </div>

      <RegisterForm />
    </AuthLayout>
  )
}
