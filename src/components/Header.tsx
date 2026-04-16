import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/80 backdrop-blur-xl">
      <nav className="page-wrap flex items-center justify-between gap-4 py-4">
        <Link
          to="/"
          className="group flex items-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-2 transition-all hover:border-[var(--accent-primary)] hover:shadow-[0_0_20px_var(--accent-glow)] clickable"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-sm font-bold text-[var(--bg-primary)]">
            JN
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[var(--text-primary)]">Jeferson Narvaez</span>
            <span className="font-mono text-xs text-[var(--text-muted)]">Software Engineer</span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="mailto:jeferson.narvaez@outlook.com"
            className="hidden rounded-lg p-2 text-[var(--text-secondary)] transition-all hover:bg-[var(--bg-card)] hover:text-[var(--accent-primary)] sm:block"
            title="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/jeferson-narvaez-553b90148"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg p-2 text-[var(--text-secondary)] transition-all hover:bg-[var(--bg-card)] hover:text-[var(--accent-primary)] sm:block"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/jefersonnarvaez"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg p-2 text-[var(--text-secondary)] transition-all hover:bg-[var(--bg-card)] hover:text-[var(--accent-primary)] sm:block"
            title="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <div className="ml-2 h-6 w-px bg-[var(--border-color)]" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
