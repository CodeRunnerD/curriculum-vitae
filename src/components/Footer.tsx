import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-4 py-12">
      <div className="page-wrap">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
            <span className="font-mono text-sm text-[var(--text-muted)]">
              © {year} Jeferson Narvaez
            </span>
            <span className="flex items-center gap-1 text-sm text-[var(--text-secondary)]">
              Built with <Heart className="h-3 w-3 text-[var(--accent-primary)]" /> and modern tech
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:jeferson.narvaez@outlook.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-all hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] clickable"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://linkedin.com/in/jeferson-narvaez-553b90148"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-3 text-[var(--text-muted)] transition-all hover:bg-[var(--bg-card)] hover:text-[var(--accent-primary)] clickable"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/jefersonnarvaez"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-3 text-[var(--text-muted)] transition-all hover:bg-[var(--bg-card)] hover:text-[var(--accent-primary)] clickable"
            title="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
