import { useTheme } from '@/context/ThemeContext'
import sunSrc from '@/assets/sun.svg'
import moonSrc from '@/assets/moon.svg'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      className={[
        'fixed top-4 right-4 z-50',
        'flex items-center justify-center w-9 h-9',
        'rounded-lg border border-page-border bg-page-bg',
        'cursor-pointer transition-colors duration-200',
        'hover:bg-accent-bg hover:border-accent-border',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
      ].join(' ')}
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <img
        src={isDark ? sunSrc : moonSrc}
        alt=""
        width="18"
        height="18"
        className="dark:invert"
      />
    </button>
  )
}
