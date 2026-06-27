const patients = [
  {
    name: 'Thiago Veigh',
    role: 'Criador de Conteúdo · Atleta',
    photo: '/images/Thiago%20Veigh.jpeg',
  },
  {
    name: 'Nilmar (Ex Inter)',
    role: 'Ex-atacante · Internacional',
    photo: '/images/Nilmar%20(Ex%20Inter).jpeg',
  },
  {
    name: 'Bolívar (Ex Inter)',
    role: 'Ex-jogador · Internacional',
    photo: '/images/Bol%C3%ADvar%20(Ex%20Inter).jpeg',
  },
]

const VerifiedBadge = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
    <path d="M12 0L14.59 3.07L18.51 2.22L19.22 6.17L22.63 8L21 11.86L22.63 15.72L19.22 17.55L18.51 21.5L14.59 20.65L12 23.72L9.41 20.65L5.49 21.5L4.78 17.55L1.37 15.72L3 11.86L1.37 8L4.78 6.17L5.49 2.22L9.41 3.07Z" fill="#1d9bf0"/>
    <path d="M8 12L10.5 14.5L16 9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
)

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        padding: 'clamp(60px, 10vw, 120px) 0',
        backgroundColor: '#faf8f5',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: '20%', left: '-100px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,162,74,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <span className="reveal" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px', fontWeight: 600, color: '#c4a24a',
            letterSpacing: '2.5px', textTransform: 'uppercase',
            display: 'inline-block', marginBottom: '16px',
          }}>
            Pacientes Atendidos
          </span>
          <h2 className="reveal" style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(30px, 4vw, 48px)',
            fontWeight: 600, color: '#1a4242',
            margin: '0 0 16px', lineHeight: 1.2, letterSpacing: '-0.5px',
          }}>
            Quem já passou pelo{' '}
            <em style={{ fontStyle: 'italic', color: '#c4a24a' }}>meu cuidado</em>
          </h2>
        </div>

        {/* Photo grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
        className="patients-grid"
        >
          {patients.map((p, i) => (
            <div
              key={p.name}
              className="reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                aspectRatio: '3/4',
                boxShadow: '0 8px 40px rgba(26,66,66,0.12)',
                border: '1px solid rgba(26,66,66,0.06)',
                background: '#1a4242',
              }}>
                <img
                  src={p.photo}
                  alt={p.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                  }}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '45%',
                  background: 'linear-gradient(to top, rgba(13,43,43,0.88) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }} />
                {/* Name badge */}
                <div style={{
                  position: 'absolute', bottom: '22px', left: '20px', right: '20px',
                }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '7px',
                    marginBottom: '4px',
                  }}>
                    <span style={{
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: 600, fontSize: '17px', color: '#fff',
                    }}>
                      {p.name}
                    </span>
                    <VerifiedBadge />
                  </div>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px', color: 'rgba(255,255,255,0.6)',
                  }}>
                    {p.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .patients-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .patients-grid { grid-template-columns: repeat(3, 1fr) !important; } }
      `}</style>
    </section>
  )
}
