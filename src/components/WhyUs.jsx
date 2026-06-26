const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Cuidado Humanizado',
    text: 'Cada paciente é única. Ouvimos, compreendemos e acolhemos antes de qualquer protocolo.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Atendimento Exclusivo',
    text: 'Consultas individuais e sem pressa. O seu tempo de cuidado é priorizado do início ao fim.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: 'Protocolos Baseados em Evidência',
    text: 'Técnicas atualizadas com embasamento científico para resultados reais e seguros.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Acompanhamento Contínuo',
    text: 'Suporte do pré ao pós-tratamento. Sua evolução é monitorada de perto em cada fase.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Excelência Clínica',
    text: 'Formação especializada e atualização constante para oferecer o melhor em fisioterapia.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Ambiente Acolhedor',
    text: 'Um espaço pensado para você se sentir à vontade, segura e bem cuidada desde a chegada.',
  },
]

export default function WhyUs() {
  return (
    <section
      id="why-us"
      style={{
        padding: 'clamp(60px, 10vw, 120px) 0',
        background: 'linear-gradient(160deg, #0d2b2b 0%, #1a4242 60%, #1e4d4d 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,162,74,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 72px)' }}>
          <span className="reveal" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: '#c4a24a',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '16px',
          }}>
            Por que escolher
          </span>
          <h2 className="reveal" style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            fontWeight: 600,
            color: '#fff',
            margin: '0 0 20px',
            lineHeight: 1.2,
            letterSpacing: '-0.5px',
          }}>
            Onde cada detalhe<br />
            <em style={{ fontStyle: 'italic', color: '#c4a24a' }}>faz a diferença</em>
          </h2>
          <p className="reveal" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '17px',
            color: 'rgba(255,255,255,0.55)',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Mais do que fisioterapia — um espaço de cuidado integral que respeita a sua história e singularidade.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  padding: '32px 28px',
                  transition: 'background 0.3s, border-color 0.3s, transform 0.3s',
                  cursor: 'default',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(196,162,74,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(196,162,74,0.2)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ color: '#c4a24a', marginBottom: '20px' }}>{p.icon}</div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#fff',
                  margin: '0 0 12px',
                  lineHeight: 1.3,
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom curve */}
      <div style={{ position: 'absolute', bottom: '-1px', left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0 60 C480 0 960 0 1440 60 L1440 60 L0 60 Z" fill="#faf8f5" />
        </svg>
      </div>
    </section>
  )
}
