import { Link } from 'react-router-dom'
import { ForgotPasswordForm } from '@/features/auth'
import { AuthLayout } from '@/components/layout/AuthLayout'

export function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Forgot your password?"
      footer={
        <>
          Remember your password?{' '}
          <Link to="/login" className="text-accent font-medium hover:underline">
            Back to sign in
          </Link>
        </>
      }
    >
      <p className="text-sm text-page-text text-center -mt-2">
        Enter your email and we'll send you a reset link.
      </p>
      <ForgotPasswordForm />
    </AuthLayout>
  )
}
