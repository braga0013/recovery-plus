import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const textRef = useRef(null)

  useEffect(() => {
    const el = textRef.current
    if (!el) return
    const onScroll = () => {
      const y = window.scrollY
      el.style.opacity = Math.max(0, 1 - y / 500)
      el.style.transform = `translateY(${y * 0.2}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0d2b2b 0%, #1a4242 40%, #245e5e 100%)',
      }}
    >
      {/* Background decorative elements */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-10%', right: '30%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,162,74,0.07) 0%, transparent 70%)',
        }} />
        <svg style={{ position: 'absolute', bottom: '10%', left: '2%', opacity: 0.06 }} width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="140" stroke="#c4a24a" strokeWidth="1" strokeDasharray="6 10" />
          <circle cx="150" cy="150" r="90" stroke="#c4a24a" strokeWidth="0.5" />
        </svg>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 24px 80px', width: '100%', position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}>
          {/* Left — text */}
          <div ref={textRef}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(196,162,74,0.12)',
              border: '1px solid rgba(196,162,74,0.25)',
              borderRadius: '100px',
              padding: '6px 16px',
              marginBottom: '32px',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#c4a24a', animation: 'pulse-soft 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#c4a24a', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                Recovery+ · Fisioterapia
              </span>
            </div>

            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(44px, 6vw, 76px)',
              fontWeight: 500,
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              margin: '0 0 4px',
            }}>
              Ana Luísa
            </h1>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(44px, 6vw, 76px)',
              fontWeight: 700,
              fontStyle: 'italic',
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              margin: '0 0 20px',
              background: 'linear-gradient(90deg, #c4a24a 0%, #f0d990 50%, #c4a24a 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 4s linear infinite',
            }}>
              Dias
            </h1>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.45)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}>
              Fisioterapeuta · CREFITO-5
            </p>

            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(18px, 2vw, 23px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.82)',
              lineHeight: 1.65,
              marginBottom: '44px',
              maxWidth: '500px',
            }}>
              "Acompanhando sua evolução com cuidado especializado em cada etapa."
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '52px' }}>
              <a href="#contact" style={{
                background: 'linear-gradient(135deg, #c4a24a, #d4b25a)',
                color: '#0d2b2b', padding: '15px 34px', borderRadius: '100px',
                fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px',
                letterSpacing: '0.3px', textDecoration: 'none',
                boxShadow: '0 8px 28px rgba(196,162,74,0.38)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(196,162,74,0.5)' }}
              onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(196,162,74,0.38)' }}
              >
                Agendar Consulta
              </a>
              <a href="#services" style={{
                border: '1px solid rgba(255,255,255,0.22)',
                color: '#fff', padding: '15px 34px', borderRadius: '100px',
                fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '14px',
                textDecoration: 'none', transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseOver={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)' }}
              onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)' }}
              >
                Ver Especialidades
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '36px' }}>
              {[
                { number: '5+', label: 'Anos de experiência' },
                { number: '500+', label: 'Pacientes atendidas' },
                { number: '100%', label: 'Humanizado' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '30px', fontWeight: 700, color: '#c4a24a', lineHeight: 1 }}>{s.number}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '4px', letterSpacing: '0.3px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div style={{ flexShrink: 0 }} className="hero-photo-wrap">
            <div style={{ position: 'relative' }}>
              {/* Glow ring */}
              <div style={{
                position: 'absolute', inset: '-12px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #c4a24a, transparent 60%, #c4a24a)',
                opacity: 0.3,
                animation: 'spin-slow 8s linear infinite',
              }} />
              {/* Photo container */}
              <div style={{
                width: 'clamp(280px, 28vw, 400px)',
                aspectRatio: '3/4',
                borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%',
                overflow: 'hidden',
                position: 'relative',
                border: '3px solid rgba(196,162,74,0.3)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
              }}>
                <img
                  src="/images/ana-luisa.jpeg"
                  alt="Ana Luísa Dias — Fisioterapeuta"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentNode.style.background = 'linear-gradient(160deg, #245e5e, #1a4242)'
                  }}
                />
                {/* Overlay gradient at bottom */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
                  background: 'linear-gradient(to top, rgba(13,43,43,0.5), transparent)',
                  pointerEvents: 'none',
                }} />
              </div>

              {/* Floating card */}
              <div style={{
                position: 'absolute', bottom: '-16px', left: '-32px',
                background: '#fff', borderRadius: '16px',
                padding: '14px 18px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                border: '1px solid rgba(196,162,74,0.15)',
              }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#6b8a8a', marginBottom: '4px', letterSpacing: '0.5px' }}>Especialidade</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '14px', fontWeight: 600, color: '#1a4242' }}>Fisioterapia Pélvica</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#c4a24a', marginTop: '2px' }}>& Obstétrica</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        animation: 'float 3s ease-in-out infinite',
      }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>scroll</span>
        <ChevronDown size={18} color="rgba(196,162,74,0.5)" />
      </div>

      {/* Bottom curve */}
      <div style={{ position: 'absolute', bottom: '-1px', left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 80" fill="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0 80 C360 20 1080 20 1440 80 L1440 80 L0 80 Z" fill="#faf8f5" />
        </svg>
      </div>

      <style>{`
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes float { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
        @keyframes pulse-soft { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @media (max-width: 768px) {
          .hero-photo-wrap { display: none !important; }
        }
      `}</style>
    </section>
  )
}
