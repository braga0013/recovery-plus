import { useState } from 'react'

const services = [
  {
    id: 1,
    title: 'Pós-Operatório',
    description: 'Reabilitação individualizada após cirurgias ortopédicas, abdominais e ginecológicas. Controle do edema, cicatrização otimizada e retorno seguro às atividades com protocolos comprovados.',
    tags: ['Pós-cirúrgico', 'Cicatrização', 'Funcionalidade'],
    gradient: 'linear-gradient(135deg, #0a2020, #1a4242)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c4a24a" strokeWidth="1.5">
        <path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7L12 2z"/>
        <path d="M12 9v6M9 12h6"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Pós-Parto',
    description: 'Acompanhamento especializado no retorno do corpo após o parto. Reabilitação do assoalho pélvico, correção de diástase e fortalecimento progressivo para uma recuperação completa e segura.',
    tags: ['Assoalho pélvico', 'Diástase', 'Retorno ativo'],
    gradient: 'linear-gradient(135deg, #0d2b2b, #245e5e)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c4a24a" strokeWidth="1.5">
        <path d="M12 22V12"/>
        <path d="M12 12C12 7 7 3 7 3s0 5 5 9"/>
        <path d="M12 12C12 7 17 3 17 3s0 5-5 9"/>
        <path d="M12 12C7 12 3 7 3 7s4 0 9 5"/>
        <path d="M12 12C17 12 21 7 21 7s-4 0-9 5"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Reabilitação Esportiva',
    description: 'Retorno seguro e eficaz após lesões esportivas, com protocolos específicos para cada modalidade e nível de atleta.',
    tags: ['Lesões esportivas', 'Retorno ao esporte', 'Performance'],
    gradient: 'linear-gradient(135deg, #1a4242, #245e5e)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c4a24a" strokeWidth="1.5">
        <circle cx="12" cy="5" r="2"/><path d="M10 9H6l-2 5 2 1 2-3v9h2v-5h4v5h2V12l2 3 2-1-2-5h-4"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Prevenção de Lesões e Fortalecimento Muscular',
    description: 'Programas individualizados de fortalecimento e correção para prevenir lesões antes que aconteçam.',
    tags: ['Fortalecimento', 'Prevenção', 'Funcional'],
    gradient: 'linear-gradient(135deg, #245e5e, #2d7070)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c4a24a" strokeWidth="1.5">
        <path d="M6.5 6.5h11M6.5 17.5h11M3 12h18M9 3l-3 3M15 3l3 3M9 21l-3-3M15 21l3-3"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Preparação Física',
    description: 'Condicionamento físico orientado e supervisionado para elevar seu desempenho com segurança e eficiência.',
    tags: ['Condicionamento', 'Desempenho', 'Saúde'],
    gradient: 'linear-gradient(135deg, #1e4d4d, #2a6262)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c4a24a" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Terapia Manual',
    description: 'Liberação miofascial, massagem terapêutica e relaxante com técnicas manuais especializadas para alívio da dor e recuperação muscular.',
    tags: ['Miofascial', 'Massagem', 'Relaxamento'],
    gradient: 'linear-gradient(135deg, #0d2b2b, #1a4242)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c4a24a" strokeWidth="1.5">
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
        <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
      </svg>
    ),
  },
  {
    id: 7,
    gold: true,
    title: 'Dry Needling e Eletroestimulação',
    description: 'Técnicas avançadas para tratamento de pontos gatilho, dor muscular e recuperação acelerada com resultados comprovados.',
    tags: ['Dry needling', 'TENS/FES', 'Dor miofascial'],
    gradient: 'linear-gradient(135deg, #b89040, #c4a24a)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Reeducação Postural e Reprogramação de Movimentos',
    description: 'Correção de padrões posturais e movimentos compensatórios para eliminar dores crônicas e melhorar a qualidade de vida.',
    tags: ['Postura', 'RPG', 'Movimento funcional'],
    gradient: 'linear-gradient(135deg, #1a4242, #1e5050)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c4a24a" strokeWidth="1.5">
        <line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    id: 9,
    title: 'Recovery Desportivo',
    description: 'Protocolos de recuperação pós-treino e pós-competição para manter atletas em alto rendimento e reduzir o tempo de inatividade.',
    tags: ['Pós-treino', 'Crioterapia', 'Compressão'],
    gradient: 'linear-gradient(135deg, #0d2b2b, #1a3838)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c4a24a" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
]

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false)
  const isGold = service.gold === true

  return (
    <div
      className="reveal"
      style={{ transitionDelay: `${index * 80}ms`, display: 'flex' }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#fff',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: hovered
            ? '0 24px 56px rgba(26,66,66,0.16)'
            : '0 4px 20px rgba(26,66,66,0.07)',
          transition: 'transform 0.35s ease, box-shadow 0.35s ease',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          border: '1px solid rgba(26,66,66,0.06)',
          width: '100%',
        }}
      >
        {/* Header */}
        <div style={{
          background: service.gradient,
          padding: '28px 24px 24px',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
        }}>
          <div style={{ marginBottom: '14px' }}>{service.icon}</div>
          <h3 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '18px',
            fontWeight: 600,
            color: isGold ? '#0d2b2b' : '#fff',
            margin: 0,
            lineHeight: 1.3,
            minHeight: '46px',
            display: 'flex',
            alignItems: 'flex-end',
          }}>
            {service.title}
          </h3>
          {/* Decorative rings */}
          <div style={{ position: 'absolute', top: '-24px', right: '-24px', width: '96px', height: '96px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '-8px', right: '-8px', width: '56px', height: '56px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.07)', pointerEvents: 'none' }} />
        </div>

        {/* Body */}
        <div style={{ padding: '22px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            lineHeight: 1.72,
            color: '#6b8a8a',
            margin: '0 0 20px',
            flex: 1,
            // Clamp to 4 lines for symmetry
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {service.description}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: 'auto' }}>
            {service.tags.map((tag) => (
              <span key={tag} style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                color: isGold ? '#b89040' : '#1a4242',
                backgroundColor: isGold ? 'rgba(196,162,74,0.08)' : 'rgba(26,66,66,0.06)',
                border: `1px solid ${isGold ? 'rgba(196,162,74,0.2)' : 'rgba(26,66,66,0.1)'}`,
                padding: '4px 11px',
                borderRadius: '100px',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: 'clamp(60px, 10vw, 120px) 0',
        background: 'linear-gradient(180deg, #f5f1eb 0%, #faf8f5 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <span className="reveal" style={{
            display: 'inline-block',
            fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
            color: '#c4a24a', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '14px',
          }}>
            Nossos Serviços
          </span>
          <h2 className="reveal" style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(30px, 4vw, 48px)',
            fontWeight: 600, color: '#1a4242',
            margin: '0 0 16px', lineHeight: 1.2, letterSpacing: '-0.5px',
          }}>
            Tratamentos <em style={{ fontStyle: 'italic', color: '#c4a24a' }}>especializados</em><br />
            para o seu corpo
          </h2>
          <p className="reveal" style={{
            fontFamily: 'Inter, sans-serif', fontSize: '16px',
            color: '#6b8a8a', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7,
          }}>
            Protocolos personalizados que respeitam a sua individualidade e devolvem a sua qualidade de vida.
          </p>
        </div>

        {/* Grid — 3 colunas, cards sempre simétricos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '22px',
          alignItems: 'stretch',
        }}
        className="services-grid"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="#contact" style={{
            background: 'linear-gradient(135deg, #c4a24a, #d4b25a)',
            color: '#0d2b2b', padding: '14px 32px', borderRadius: '100px',
            fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px',
            textDecoration: 'none',
            boxShadow: '0 8px 24px rgba(196,162,74,0.32)',
            display: 'inline-block', transition: 'transform 0.2s',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Fale comigo no WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
