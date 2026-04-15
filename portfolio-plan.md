# Personal Portfolio Website - Project Plan

## 1. Project Overview

**Project Name:** Portfolio Jeferson Narvaez  
**Type:** Single Page Application (SPA) - Portfolio Website  
**Tech Stack:** React + TanStack Ecosystem  
**Core Purpose:** Showcase professional CV, experience, skills, and projects in an interactive, modern portfolio

---

## 2. TanStack Stack Selection

| Library | Version | Purpose |
|---------|---------|---------|
| TanStack Router | ^1.x | File-based routing with type-safety |
| TanStack Query | ^5.x | Server state management, data fetching |
| TanStack Table | ^8.x | Data tables for experience, skills, education |
| shadcn/ui | latest | UI components with Tailwind CSS |
| Tailwind CSS | ^3.x | Styling framework |

---

## 3. Feature Roadmap

### Phase 1: Core Structure
- [ ] Setup Vite + React + TypeScript project
- [ ] Configure TanStack Router with file-based routing
- [ ] Install Tailwind CSS + shadcn/ui
- [ ] Create layout components (Header, Footer, Navigation)
- [ ] Setup TanStack Query provider

### Phase 2: CV Sections (Data-Driven with TanStack Table)
- [ ] **Hero Section** - Name, title, contact info, profile summary
- [ ] **Professional Experience** - Interactive table with filtering/sorting
- [ ] **Education** - Table view with degree details
- [ ] **Technical Skills** - Categorized skills with proficiency levels
- [ ] **Languages** - Language proficiency display

### Phase 3: Projects & Media
- [ ] **Projects Gallery** - Grid of projects with details modal
- [ ] **Download CV** - PDF download functionality
- [ ] **Contact Form** - Form with validation

### Phase 4: Polish & Performance
- [ ] Dark/Light theme toggle (TanStack UI theming)
- [ ] Animations (framer-motion)
- [ ] SEO optimization
- [ ] Responsive design

---

## 4. Route Structure (TanStack Router)

```
/                       → Home (Hero + Summary)
/experience             → Professional Experience Table
/education              → Education Table
/skills                 → Skills Overview
/projects               → Projects Gallery
/contact                → Contact Form
```

---

## 5. Data Structure (TanStack Query)

```typescript
// experience.ts
interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  location: string;
}

// skills.ts
interface Skill {
  category: string;
  items: { name: string; level: number }[];
}
```

---

## 6. Component Architecture

```
src/
├── routes/
│   ├── __root.tsx
│   ├── index.tsx
│   ├── experience.tsx
│   ├── education.tsx
│   ├── skills.tsx
│   ├── projects.tsx
│   └── contact.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ExperienceTable.tsx
│   │   ├── EducationTable.tsx
│   │   ├── SkillsGrid.tsx
│   │   └── ProjectCard.tsx
│   └── ui/
│       ├── ThemeToggle.tsx
│       └── LoadingSpinner.tsx
├── hooks/
│   └── usePortfolioData.ts
├── lib/
│   └── queryClient.ts
└── data/
    └── cv-data.ts
```

---

## 7. TanStack Table Configuration

**Experience Table Features:**
- Sortable columns (Company, Role, Period)
- Search/filter by technology
- Expandable rows for full description
- Pagination (if > 10 entries)

**Columns:**
| Field | Type | Sortable | Filterable |
|-------|------|----------|-------------|
| Company | string | ✅ | ✅ |
| Role | string | ✅ | ✅ |
| Period | string | ✅ | ❌ |
| Location | string | ✅ | ✅ |
| Technologies | string[] | ❌ | ✅ |
| Description | string | ❌ | ❌ |

---

## 8. TanStack Query Usage

```typescript
// Fetch experience data
const { data, isLoading, error } = useQuery({
  queryKey: ['experience'],
  queryFn: fetchExperience,
});

// Fetch with pagination
const { data } = useQuery({
  queryKey: ['projects', page],
  queryFn: () => fetchProjects(page),
});
```

---

## 9. UI/UX Design

**Color Palette:**
- Primary: #2563EB (Blue)
- Secondary: #10B981 (Emerald)
- Background: #FFFFFF / #0F172A (Light/Dark)
- Text: #1E293B / #F8FAFC

**Typography:**
- Headings: Inter (Bold)
- Body: Inter (Regular)

**Components (shadcn/ui):**
- Cards for projects
- Badges for skills
- Tables with hover states
- Dialog/Modal for project details
- Toast notifications for contact form
- Form components with validation

---

## 10. Implementation Order

1. **Setup** - Vite + React + TS + TanStack Router
2. **Data** - Create static CV data file
3. **Layout** - Header, Nav, Footer
4. **Hero** - Landing section
5. **Tables** - Experience & Education with TanStack Table
6. **Skills** - Categorized display
7. **Projects** - Gallery with modals
8. **Contact** - Form with validation
9. **Polish** - Theme toggle, animations

---

## 11. Success Metrics

- [ ] Lighthouse score > 90
- [ ] Page load < 2 seconds
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] Accessible (WCAG 2.1 AA)
- [ ] Type-safe throughout

---

## 12. Next Steps

### Using TanStack CLI (Recommended)

1. **Create project with TanStack CLI:**
   ```bash
   npx @tanstack/cli@latest create portfolio
   ```
   
   This will scaffold a complete TanStack project with:
   - React + TypeScript
   - TanStack Router (file-based routing)
   - TanStack Query (data fetching)
   - TanStack Table (data tables)
   - Vite as build tool

2. **Select options during setup:**
   - Framework: React
   - TypeScript: Yes
   - Package Manager: npm/yarn/pnpm

3. **Install shadcn/ui with Tailwind:**
   ```bash
   cd portfolio
   
   # Initialize Tailwind (if not already configured)
   npx tailwindcss init -p
   
   # Initialize shadcn/ui
   npx shadcn@latest init
   
   # Add useful components
   npx shadcn@latest add button card badge table dialog form toast input textarea
   ```

4. **Start development:**
   ```bash
   npm run dev
   ```

5. **Begin Phase 1 implementation**

---

**Plan Created:** April 6, 2026  
**Estimated Timeline:** 2-3 weeks