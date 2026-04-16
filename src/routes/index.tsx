import { createFileRoute } from '@tanstack/react-router'
import { 
  Briefcase, GraduationCap, Award, Mail, Phone, MapPin, 
  Linkedin, Github, FolderKanban, Trophy, ExternalLink, 
  ChevronRight, Code2, Cloud, Database, Sparkles
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: CVPage })

const personalInfo = {
  name: 'Jeferson Narvaez',
  title: 'Software Engineer',
  email: 'jeferson.narvaez@outlook.com',
  phone: '+593 98 967 6161',
  location: 'Quito, Ecuador',
  linkedin: 'linkedin.com/in/jeferson-narvaez-553b90148',
  github: 'github.com/jefersonnarvaez',
}

const summary = `Software Engineer with 5+ years of experience developing robust and scalable solutions. Passionate about creating efficient systems and solving complex problems. Strong background in full-stack development with a focus on clean architecture and best practices.`

const experience = [
  {
    role: 'Software Engineer',
    company: 'Epam Systems',
    period: 'Jul 2023 - Present',
    location: 'Remote',
    achievements: [
      'Architected and implemented microservices using Go and Python, reducing deployment time by 40%',
      'Led migration from monolithic architecture to containerized services using Docker and Kubernetes',
      'Mentored junior developers and conducted code reviews, improving team productivity by 25%',
      'Implemented CI/CD pipelines using GitHub Actions, automating testing and deployment workflows',
      'Designed and developed RESTful APIs with high availability requirements handling 10k+ requests per second',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Globant',
    period: 'Feb 2021 - Jul 2023',
    location: 'Quito, Ecuador',
    achievements: [
      'Developed RESTful APIs and web applications using Java, Spring Boot, and React',
      'Collaborated with cross-functional teams to deliver enterprise-level solutions for Fortune 500 clients',
      'Optimized database queries and improved application performance by 35%',
      'Worked on projects: Banc Sabadell (Banking), Banistmo (Banking), Kia (Automotive), Centrum (Education)',
      'Implemented authentication and authorization systems using OAuth 2.0 and JWT',
    ],
  },
  {
    role: 'Junior Software Developer',
    company: 'Freelance',
    period: 'Jan 2019 - Jan 2021',
    location: 'Quito, Ecuador',
    achievements: [
      'Built custom web applications for small businesses using Python, Django, and JavaScript',
      'Managed full project lifecycle from requirements gathering to deployment',
      'Integrated third-party APIs and payment gateways',
      'Delivered 15+ successful projects for clients in various industries',
    ],
  },
]

const projects = [
  {
    name: 'Payment Integration',
    tech: 'Java, Spring Boot, PostgreSQL, Docker',
    description: 'Developed secure payment processing system handling 50,000+ daily transactions',
  },
  {
    name: 'Microservices Migration',
    tech: 'Go, Python, Docker, Kubernetes',
    description: 'Led migration from monolithic to microservices architecture, reducing deployment time by 40%',
  },
  {
    name: 'Cloud Architecture',
    tech: 'AWS, Terraform, Docker, Kubernetes',
    description: 'Designed and implemented scalable cloud infrastructure for enterprise clients',
  },
  {
    name: 'Real-time Analytics Dashboard',
    tech: 'Python, Apache Kafka, Redis, React',
    description: 'Created real-time data visualization platform processing 1M+ events per day',
  },
]

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Escuela Politécnica Nacional',
    period: '2015 - 2019',
    location: 'Quito, Ecuador',
  },
]

const certifications = [
  { name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
  { name: 'AWS Developer', issuer: 'Amazon Web Services', year: '2022' },
  { name: 'Kubernetes Administrator', issuer: 'CNCF', year: '2023' },
]

const achievements = [
  'Epam Star Award - Q4 2023',
  'Epam Innovation Award - 2024',
  'Globant Innovation Award - 2022',
  'Top performer in Java certification',
]

const skills = {
  languages: ['Go', 'Python', 'Java', 'JavaScript', 'TypeScript'],
  frameworks: ['Spring Boot', 'Django', 'React', 'FastAPI', 'Node.js'],
  cloudDevOps: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
}

const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'B2 - Upper Intermediate' },
]

function CVPage() {
  return (
    <main className="page-wrap px-4 py-12 pb-20">
      <section className="mb-16 animate-fade-in">
        <div className="mb-6">
          <span className="section-subtitle mb-2 block">Welcome</span>
          <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <p className="text-xl font-mono text-[var(--accent-primary)] sm:text-2xl">
            {personalInfo.title}
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-6">
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] clickable"
          >
            <Mail className="h-4 w-4" />
            {personalInfo.email}
          </a>
          <span className="flex items-center gap-2 text-[var(--text-secondary)]">
            <Phone className="h-4 w-4" />
            {personalInfo.phone}
          </span>
          <span className="flex items-center gap-2 text-[var(--text-secondary)]">
            <MapPin className="h-4 w-4" />
            {personalInfo.location}
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          <a 
            href={`https://${personalInfo.linkedin}`} 
            target="_blank" 
            rel="noreferrer" 
            className="btn-primary clickable"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
            <ExternalLink className="h-3 w-3 opacity-70" />
          </a>
          <a 
            href={`https://${personalInfo.github}`} 
            target="_blank" 
            rel="noreferrer" 
            className="btn-secondary clickable"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </section>

      <section className="card mb-12 p-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-glow)]">
            <Sparkles className="h-5 w-5 text-[var(--accent-primary)]" />
          </div>
          <h2 className="section-title">About Me</h2>
        </div>
        <p className="text-lg leading-relaxed text-[var(--text-secondary)]">{summary}</p>
      </section>

      <section className="mb-12 animate-fade-in" style={{ animationDelay: '150ms' }}>
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-glow)]">
            <Briefcase className="h-5 w-5 text-[var(--accent-primary)]" />
          </div>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <article key={index} className="card p-6">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">{job.role}</h3>
                  <p className="text-[var(--accent-primary)] font-mono text-sm">{job.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[var(--text-muted)]">{job.period}</p>
                  <p className="text-xs text-[var(--text-muted)]">{job.location}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[var(--text-secondary)]">
                    <ChevronRight className="h-4 w-4 flex-shrink-0 mt-1 text-[var(--accent-primary)]" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-glow)]">
            <FolderKanban className="h-5 w-5 text-[var(--accent-primary)]" />
          </div>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article key={index} className="card p-5 group clickable">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                  {project.name}
                </h3>
                <ExternalLink className="h-4 w-4 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="tag mb-3">{project.tech}</p>
              <p className="text-sm text-[var(--text-secondary)]">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12 grid gap-6 sm:grid-cols-2 animate-fade-in" style={{ animationDelay: '250ms' }}>
        <div className="card p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-glow)]">
              <GraduationCap className="h-5 w-5 text-[var(--accent-primary)]" />
            </div>
            <h2 className="section-title">Education</h2>
          </div>
          <div className="timeline-item">
            <h3 className="text-base font-semibold text-[var(--text-primary)]">{education[0].degree}</h3>
            <p className="text-sm text-[var(--text-secondary)]">{education[0].school}</p>
            <p className="font-mono text-xs text-[var(--text-muted)]">{education[0].period} · {education[0].location}</p>
          </div>
        </div>

        <div className="card p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-glow)]">
              <Trophy className="h-5 w-5 text-[var(--accent-primary)]" />
            </div>
            <h2 className="section-title">Awards</h2>
          </div>
          <div className="space-y-3">
            {achievements.map((award, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)]" />
                <span className="text-sm text-[var(--text-secondary)]">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-glow)]">
            <Award className="h-5 w-5 text-[var(--accent-primary)]" />
          </div>
          <h2 className="section-title">Certifications</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {certifications.map((cert, index) => (
            <article key={index} className="card p-5 text-center clickable">
              <h3 className="mb-2 text-sm font-semibold text-[var(--text-primary)]">{cert.name}</h3>
              <p className="text-xs text-[var(--text-muted)]">{cert.issuer}</p>
              <p className="font-mono text-xs text-[var(--accent-primary)]">{cert.year}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12 animate-fade-in" style={{ animationDelay: '350ms' }}>
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-glow)]">
            <Code2 className="h-5 w-5 text-[var(--accent-primary)]" />
          </div>
          <h2 className="section-title">Technical Skills</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="card p-5">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
              <Code2 className="h-4 w-4 text-[var(--accent-primary)]" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="card p-5">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
              <Sparkles className="h-4 w-4 text-[var(--accent-primary)]" />
              Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="card p-5">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
              <Cloud className="h-4 w-4 text-[var(--accent-primary)]" />
              Cloud & DevOps
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.cloudDevOps.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="card p-5">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
              <Database className="h-4 w-4 text-[var(--accent-primary)]" />
              Databases
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="animate-fade-in" style={{ animationDelay: '400ms' }}>
        <div className="card p-8 text-center">
          <h2 className="section-title mb-4">Let's Work Together</h2>
          <p className="mb-6 text-[var(--text-secondary)]">
            Interested in working together? Feel free to reach out.
          </p>
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="btn-primary mx-auto inline-flex clickable"
          >
            <Mail className="h-4 w-4" />
            {personalInfo.email}
          </a>
        </div>
      </section>
    </main>
  )
}
