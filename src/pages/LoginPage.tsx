import { LoginForm, SocialLoginButtons } from '@/features/auth'
import { ThemeToggle } from '@/components/ui'
import styles from './LoginPage.module.css'

function Logo() {
  return (
    <svg
      className={styles.logoIcon}
      viewBox="0 0 70 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Vertical stroke */}
      <line
        x1="22" y1="16"
        x2="22" y2="74"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Horizontal crossbar to right node */}
      <line
        x1="22" y1="45"
        x2="50" y2="45"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Arc from top node to bottom node, curving right */}
      <path
        d="M 22 16 A 36 29 0 0 1 22 74"
        stroke="currentColor"
        strokeWidth="4.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Top node */}
      <circle cx="22" cy="16" r="7" fill="currentColor" />
      {/* Right node (crossbar end) */}
      <circle cx="50" cy="45" r="7" fill="currentColor" />
      {/* Bottom node */}
      <circle cx="22" cy="74" r="7" fill="currentColor" />
    </svg>
  )
}

export function LoginPage() {
  return (
    <main className={styles.page}>
      <ThemeToggle />
      <div className={styles.brand}>
        <Logo />
        <span className={styles.brandName}>3URL</span>
      </div>

      <div className={styles.card}>
        <h1 className={styles.title}>Sign in to your account</h1>
        <SocialLoginButtons />
        <div className={styles.divider}>
          <span>or</span>
        </div>
        <LoginForm />
      </div>

      <div className={styles.signupBox}>
        <p>
          New to 3URL?{' '}
          <a href="/register" className={styles.signupLink}>
            Create an account
          </a>
        </p>
      </div>
    </main>
  )
}
