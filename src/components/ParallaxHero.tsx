import { useEffect, useRef } from 'react'

interface MountainLayerProps {
  color: string
  snowColor?: string
  speed?: number
  opacity?: number
}

const MountainLayer1 = ({ color, snowColor }: MountainLayerProps) => (
  <svg
    viewBox="0 0 1440 320"
    className="absolute bottom-0 left-0 w-full"
    preserveAspectRatio="none"
    style={{ height: '100%' }}
  >
    <path
      fill={color}
      d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
    <path
      fill={snowColor || '#ffffff'}
      opacity="0.8"
      d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,192L1392,192C1344,192,1248,192,1152,192C1056,192,960,192,864,192C768,192,672,192,576,192C480,192,384,192,288,192C192,192,96,192,48,192L0,192Z"
    />
  </svg>
)

const MountainLayer2 = ({ color, snowColor, opacity }: MountainLayerProps) => (
  <svg
    viewBox="0 0 1440 400"
    className="absolute bottom-0 left-0 w-full"
    preserveAspectRatio="none"
    style={{ height: '85%', opacity }}
  >
    <path
      fill={color}
      d="M0,320L60,298.7C120,277,240,235,360,224C480,213,600,235,720,245.3C840,256,960,256,1080,234.7C1200,213,1320,171,1380,149.3L1440,128L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
    />
    <path
      fill={snowColor || '#ffffff'}
      opacity="0.6"
      d="M180,280L240,240C300,200,420,120,540,120C660,120,780,200,900,220C1020,240,1140,200,1260,180C1380,160,1440,160,1440,160L1440,200C1380,200,1260,200,1140,200C1020,200,900,200,780,200C660,200,540,200,420,200C300,200,180,200,120,200L60,200L0,200Z"
    />
  </svg>
)

const MountainLayer3 = ({ color, snowColor, opacity }: MountainLayerProps) => (
  <svg
    viewBox="0 0 1440 450"
    className="absolute bottom-0 left-0 w-full"
    preserveAspectRatio="none"
    style={{ height: '70%', opacity }}
  >
    <path
      fill={color}
      d="M0,384L60,362.7C120,341,240,299,360,288C480,277,600,299,720,309.3C840,320,960,320,1080,304C1200,288,1320,256,1380,240L1440,224L1440,450L1380,450C1320,450,1200,450,1080,450C960,450,840,450,720,450C600,450,480,450,360,450C240,450,120,450,60,450L0,450Z"
    />
    <path
      fill={snowColor || '#ffffff'}
      opacity="0.5"
      d="M240,320L300,280C360,240,480,160,600,160C720,160,840,240,960,260C1080,280,1200,240,1320,220C1380,210,1440,200,1440,200L1440,240C1380,240,1260,240,1140,240C1020,240,900,240,780,240C660,240,540,240,420,240C300,240,180,240,120,240L60,240L0,240Z"
    />
  </svg>
)

const SunMoon = () => (
  <svg
    viewBox="0 0 200 200"
    className="absolute w-32 h-32 md:w-48 md:h-48"
    style={{ top: '5%', right: '10%' }}
  >
    <defs>
      <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="60" fill="url(#sunGradient)" opacity="0.9" />
    <circle cx="100" cy="100" r="80" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.3" />
    <circle cx="100" cy="100" r="95" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.2" />
  </svg>
)

const Stars = () => (
  <svg
    viewBox="0 0 1440 400"
    className="absolute inset-0 w-full h-full pointer-events-none"
    preserveAspectRatio="none"
  >
    {Array.from({ length: 50 }).map((_, i) => (
      <circle
        key={i}
        cx={`${(i * 37) % 100}%`}
        cy={`${(i * 23) % 60}%`}
        r={i % 3 === 0 ? 1.5 : 1}
        fill="#ffffff"
        opacity={0.3 + (i % 5) * 0.1}
      />
    ))}
  </svg>
)

const Clouds = () => (
  <svg
    viewBox="0 0 1440 200"
    className="absolute w-full h-32 top-20 opacity-20"
    preserveAspectRatio="none"
  >
    <ellipse cx="200" cy="100" rx="120" ry="40" fill="#ffffff" />
    <ellipse cx="250" cy="80" rx="80" ry="35" fill="#ffffff" />
    <ellipse cx="700" cy="120" rx="150" ry="45" fill="#ffffff" />
    <ellipse cx="800" cy="100" rx="100" ry="40" fill="#ffffff" />
    <ellipse cx="1200" cy="90" rx="130" ry="38" fill="#ffffff" />
  </svg>
)

interface ParallaxHeroProps {
  variant?: 'hero' | 'minimal'
}

export default function ParallaxHero({ variant = 'hero' }: ParallaxHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const layer1Ref = useRef<HTMLDivElement>(null)
  const layer2Ref = useRef<HTMLDivElement>(null)
  const layer3Ref = useRef<HTMLDivElement>(null)
  const sunRef = useRef<HTMLDivElement>(null)
  const starsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const container = containerRef.current
      if (!container) return

      const containerTop = container.offsetTop
      const containerHeight = container.offsetHeight
      const viewportHeight = window.innerHeight

      if (scrollY + viewportHeight < containerTop || scrollY > containerTop + containerHeight) {
        return
      }

      const relativeScroll = scrollY - containerTop + viewportHeight
      const progress = Math.min(relativeScroll / (containerHeight + viewportHeight), 1)

      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translateY(${progress * 30}px)`
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translateY(${progress * 60}px)`
      }
      if (layer3Ref.current) {
        layer3Ref.current.style.transform = `translateY(${progress * 90}px)`
      }
      if (sunRef.current) {
        sunRef.current.style.transform = `translateY(${progress * 20}px) rotate(${progress * 15}deg)`
        sunRef.current.style.opacity = `${1 - progress * 0.5}`
      }
      if (starsRef.current) {
        starsRef.current.style.opacity = `${1 - progress * 0.8}`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (variant === 'minimal') {
    return (
      <div className="mountain-minimal">
        <MountainLayer1 color="#1e293b" snowColor="#e2e8f0" />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="parallax-container"
      style={{ height: '300px', position: 'relative', overflow: 'hidden' }}
    >
      <div ref={starsRef} className="absolute inset-0">
        <Stars />
      </div>

      <div ref={sunRef} className="absolute">
        <SunMoon />
      </div>

      <Clouds />

      <div ref={layer3Ref} className="absolute bottom-0 left-0 w-full" style={{ willChange: 'transform' }}>
        <MountainLayer3 color="#0f172a" snowColor="#94a3b8" opacity={0.7} />
      </div>

      <div ref={layer2Ref} className="absolute bottom-0 left-0 w-full" style={{ willChange: 'transform' }}>
        <MountainLayer2 color="#1e293b" snowColor="#cbd5e1" opacity={0.85} />
      </div>

      <div ref={layer1Ref} className="absolute bottom-0 left-0 w-full" style={{ willChange: 'transform' }}>
        <MountainLayer1 color="#334155" snowColor="#f1f5f9" />
      </div>
    </div>
  )
}
