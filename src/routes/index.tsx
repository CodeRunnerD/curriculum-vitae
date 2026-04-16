import { createFileRoute } from '@tanstack/react-router'
import { Mountain, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, Linkedin, Github, FolderKanban, Trophy } from 'lucide-react'

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

const summary = `Mountain to Code. Software Engineer with 5+ years of experience developing robust and scalable solutions. Passionate about creating efficient systems and solving complex problems. Strong background in full-stack development with a focus on clean architecture and best practices.`

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
      'Collaborated with cross-functional teams to deliver cloud-native solutions for enterprise clients',
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
      'Participated in agile ceremonies and contributed to sprint planning',
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
  {
    name: 'Serverless Applications',
    tech: 'AWS Lambda, API Gateway, DynamoDB',
    description: 'Built serverless solutions reducing infrastructure costs by 30%',
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
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
  { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2022' },
  { name: 'Certified Kubernetes Administrator', issuer: 'CNCF', year: '2023' },
]

const achievements = [
  'Epam Star Award - Q4 2023',
  'Epam Innovation Award - 2024',
  'Globant Innovation Award - 2022',
  'Top performer in Java certification - Globant',
]

const skills = {
  languages: ['Go', 'Python', 'Java', 'JavaScript'],
  frameworks: ['Spring Boot', 'Django', 'React', 'FastAPI', 'Node.js'],
  cloudDevOps: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
}

const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'B2 - Upper Intermediate' },
]

const interests = [
  'Mountain to Code',
  'Cloud Architecture',
  'Open Source',
  'Continuous Learning',
]

function CVPage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />
        
        <header className="mb-6">
          <h1 className="display-title mb-2 text-4xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-5xl">
            {personalInfo.name}
          </h1>
          <p className="text-xl text-[var(--sea-ink-soft)]">{personalInfo.title}</p>
        </header>

        <div className="flex flex-wrap gap-4 mb-6 text-sm text-[var(--sea-ink-soft)]">
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-[var(--lagoon-deep)]">
            <Mail className="h-4 w-4" />
            {personalInfo.email}
          </a>
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            {personalInfo.phone}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {personalInfo.location}
          </span>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-[var(--lagoon-deep)] hover:underline">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-[var(--lagoon-deep)] hover:underline">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </section>

      <section className="mt-6 island-shell rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4">
          <Mountain className="h-5 w-5 text-[var(--lagoon-deep)]" />
          <h2 className="text-xl font-semibold text-[var(--sea-ink)]">Profile</h2>
        </div>
        <p className="text-[var(--sea-ink-soft)] leading-relaxed">{summary}</p>
      </section>

      <section className="mt-6 island-shell rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="h-5 w-5 text-[var(--lagoon-deep)]" />
          <h2 className="text-xl font-semibold text-[var(--sea-ink)]">Professional Experience</h2>
        </div>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <article key={index} className="relative pl-8 border-l-2 border-[var(--line)]">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-[var(--lagoon)]" />
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-[var(--sea-ink)]">{job.role}</h3>
                <p className="text-[var(--sea-ink-soft)]">{job.company} · {job.period} · {job.location}</p>
              </div>
              <ul className="space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm text-[var(--sea-ink-soft)] flex gap-2">
                    <span className="text-[var(--lagoon-deep)]">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 island-shell rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <FolderKanban className="h-5 w-5 text-[var(--lagoon-deep)]" />
          <h2 className="text-xl font-semibold text-[var(--sea-ink)]">Projects</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article key={index} className="rounded-xl border border-[var(--line)] p-4">
              <h3 className="text-base font-semibold text-[var(--sea-ink)]">{project.name}</h3>
              <p className="text-sm text-[var(--lagoon-deep)] mb-2">{project.tech}</p>
              <p className="text-sm text-[var(--sea-ink-soft)]">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 island-shell rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="h-5 w-5 text-[var(--lagoon-deep)]" />
          <h2 className="text-xl font-semibold text-[var(--sea-ink)]">Awards & Achievements</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {achievements.map((award, index) => (
            <article key={index} className="flex items-center gap-2">
              <span className="text-[var(--lagoon-deep)]">★</span>
              <span className="text-sm text-[var(--sea-ink-soft)]">{award}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 island-shell rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="h-5 w-5 text-[var(--lagoon-deep)]" />
          <h2 className="text-xl font-semibold text-[var(--sea-ink)]">Education</h2>
        </div>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <article key={index} className="relative pl-6 border-l-2 border-[var(--line)]">
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[var(--lagoon)]" />
              <h3 className="text-base font-semibold text-[var(--sea-ink)]">{edu.degree}</h3>
              <p className="text-[var(--sea-ink-soft)]">{edu.school} · {edu.period} · {edu.location}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 island-shell rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <Award className="h-5 w-5 text-[var(--lagoon-deep)]" />
          <h2 className="text-xl font-semibold text-[var(--sea-ink)]">Certifications</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <article key={index} className="rounded-xl border border-[var(--line)] p-4">
              <h3 className="text-base font-semibold text-[var(--sea-ink)]">{cert.name}</h3>
              <p className="text-sm text-[var(--sea-ink-soft)]">{cert.issuer} · {cert.year}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 island-shell rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-[var(--sea-ink)] mb-6">Technical Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-[var(--sea-ink)] mb-3">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span key={skill} className="rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1 text-sm text-[var(--sea-ink)]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--sea-ink)] mb-3">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill) => (
                <span key={skill} className="rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1 text-sm text-[var(--sea-ink)]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--sea-ink)] mb-3">Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {skills.cloudDevOps.map((skill) => (
                <span key={skill} className="rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1 text-sm text-[var(--sea-ink)]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--sea-ink)] mb-3">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((skill) => (
                <span key={skill} className="rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1 text-sm text-[var(--sea-ink)]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 island-shell rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-[var(--sea-ink)] mb-6">Languages</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {languages.map((lang, index) => (
            <article key={index} className="rounded-xl border border-[var(--line)] p-4">
              <h3 className="text-base font-semibold text-[var(--sea-ink)]">{lang.name}</h3>
              <p className="text-sm text-[var(--sea-ink-soft)]">{lang.level}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 island-shell rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-[var(--sea-ink)] mb-6">Interests</h2>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <span key={index} className="rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1 text-sm text-[var(--sea-ink)]">
              {interest}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}