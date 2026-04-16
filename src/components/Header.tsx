import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-lg">
      <nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4">
        <h2 className="m-0 flex-shrink-0 text-base font-semibold tracking-tight">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-sm text-[var(--sea-ink)] no-underline shadow-[0_8px_24px_rgba(30,90,72,0.08)] sm:px-4 sm:py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[linear-gradient(90deg,#56c6be,#7ed3bf)]" />
            Jeferson Narvaez
          </Link>
        </h2>

        <div className="ml-auto flex items-center gap-1.5 sm:ml-0 sm:gap-2">
          <a
            href="https://linkedin.com/in/jeferson-narvaez-553b90148"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)] sm:block"
          >
            <span className="sr-only">Follow on LinkedIn</span>
            <svg viewBox="0 0 16 16" aria-hidden="true" width="24" height="24">
              <path
                fill="currentColor"
                d="M12 1.5c-2.1 0-3.9.8-5.3 2.2-.7.7-1.2 1.6-1.4 2.5-.1.5-.1 1 0 1.5.1.5.3 1 .6 1.4.3.4.7.7 1.2.9.3.1.6.2.9.2.4 0 .7-.1 1-.2.3-.1.6-.3.8-.5.2-.2.4-.5.5-.8.1-.3.1-.7.1-1 0-.3 0-.6-.1-.9-.1-.3-.2-.6-.4-.8-.2-.3-.5-.5-.8-.6-.3-.1-.7-.2-1-.2-.3 0-.6 0-.9.1-.3.1-.6.2-.8.4-.3.2-.5.5-.7.8-.1.3-.2.7-.2 1 0 .4 0 .7.1 1.1v.1h-.1v-.1c-.2-.3-.3-.6-.4-1-.1-.4-.1-.8 0-1.2.1-.4.3-.8.5-1.2.2-.4.5-.7.9-1 .4-.3.8-.4 1.3-.4.5 0 .9.1 1.3.4.4.3.7.6 1 1 .3.4.5.8.6 1.3.1.5.1 1 0 1.5-.1.5-.3 1-.6 1.4-.3.4-.7.7-1.1.9-.5.2-1 .3-1.5.2-.5-.1-1-.3-1.4-.6-.4-.3-.7-.7-.9-1.2-.2-.5-.3-1-.3-1.6s.1-1.1.3-1.6c.2-.5.5-.9.9-1.2.4-.3.9-.6 1.4-.8zM8.5 10.5h-1v-5h1v5zm1 0c0-.8-.2-1.4-.5-2-.3-.5-.8-1-1.4-1.3-.6-.3-1.3-.5-2-.5s-1.4.2-2 .5c-.6.3-1.1.7-1.4 1.3-.3.6-.5 1.2-.5 2s.2 1.4.5 2c.3.6.8 1.1 1.4 1.4.6.3 1.3.5 2 .5s1.4-.2 2-.5c.6-.3 1.1-.8 1.4-1.4.3-.6.5-1.2.5-2z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/jefersonnarvaez"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)] sm:block"
          >
            <span className="sr-only">Go to GitHub</span>
            <svg viewBox="0 0 16 16" aria-hidden="true" width="24" height="24">
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}