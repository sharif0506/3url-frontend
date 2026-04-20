import { Link } from 'react-router-dom'
import { ResetPasswordForm } from '@/features/auth'
import { AuthLayout } from '@/components/layout/AuthLayout'

export function ResetPasswordPage() {
  return (
    <AuthLayout
      title="Set a new password"
      footer={
        <>
          Remembered it?{' '}
          <Link to="/login" className="text-accent font-medium hover:underline">
            Back to sign in
          </Link>
        </>
      }
    >
      <ResetPasswordForm />
    </AuthLayout>
  )
}
