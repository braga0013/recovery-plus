import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Thiago Veigh',
    role: 'Criador de Conteúdo · Atleta',
    text: 'A Ana Luísa é simplesmente incrível! Fiz meu acompanhamento pós-treino com ela e a diferença no meu desempenho e recuperação foi absurda. Profissional de alto nível, super atenta e com protocolos específicos para cada necessidade. Recomendo demais!',
    stars: 5,
    photo: '/images/Thiago%20Veigh.jpeg',
    verified: true,
  },
  {
    name: 'Nilmar (Ex Inter)',
    role: 'Ex-atacante · Internacional',
    text: 'Durante minha carreira passei por lesões sérias, mas o acompanhamento da Ana Luísa foi diferente de tudo que já vi. Trabalho impecável, muito conhecimento técnico e um cuidado genuíno com o atleta. Ela fez toda a diferença na minha recuperação!',
    stars: 5,
    photo: '/images/Nilmar%20(Ex%20Inter).jpeg',
    verified: true,
  },
  {
    name: 'Bolívar (Ex Inter)',
    role: 'Ex-jogador · Internacional',
    text: 'Passei anos dependendo de fisioterapia de qualidade e posso afirmar que a Ana Luísa está entre as melhores. Protocolo de recuperação eficiente, atendimento humanizado e resultados surpreendentemente rápidos. Nota dez!',
    stars: 5,
    photo: '/images/Bol%C3%ADvar%20(Ex%20Inter).jpeg',
    verified: true,
  },
]

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#c4a24a" color="#c4a24a" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (dir) => {
    setDirection(dir)
    setActive((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }

  const t = testimonials[active]

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
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '20%', left: '-100px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,162,74,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 72px)' }}>
          <span className="reveal" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px', fontWeight: 600, color: '#c4a24a',
            letterSpacing: '2.5px', textTransform: 'uppercase',
            display: 'inline-block', marginBottom: '16px',
          }}>
            Depoimentos
          </span>
          <h2 className="reveal" style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            fontWeight: 600, color: '#1a4242',
            margin: '0 0 20px', lineHeight: 1.2, letterSpacing: '-0.5px',
          }}>
            O que dizem as<br />
            <em style={{ fontStyle: 'italic', color: '#c4a24a' }}>minhas pacientes</em>
          </h2>
        </div>

        {/* Featured testimonial */}
        <div className="reveal" style={{
          background: '#fff',
          borderRadius: '32px',
          padding: 'clamp(32px, 5vw, 64px)',
          boxShadow: '0 8px 48px rgba(26,66,66,0.08)',
          border: '1px solid rgba(26,66,66,0.06)',
          maxWidth: '820px',
          margin: '0 auto 48px',
          position: 'relative',
        }}>
          {/* Quote mark */}
          <div style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '120px',
            color: 'rgba(196,162,74,0.12)',
            position: 'absolute',
            top: '0px',
            left: '32px',
            lineHeight: 1,
            userSelect: 'none',
          }}>
            "
          </div>

          <div style={{ position: 'relative' }}>
            <Stars count={t.stars} />
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              fontStyle: 'italic',
              color: '#2a5454',
              lineHeight: 1.7,
              margin: '20px 0 32px',
            }}>
              "{t.text}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '50%',
                overflow: 'hidden', flexShrink: 0,
                border: '2px solid rgba(196,162,74,0.3)',
                background: '#1a4242',
              }}>
                <img src={t.photo} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '15px', color: '#1a4242', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {t.name}
                  {t.verified && (
                    <svg width="15" height="15" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                      <path d="M12 0L14.59 3.07L18.51 2.22L19.22 6.17L22.63 8L21 11.86L22.63 15.72L19.22 17.55L18.51 21.5L14.59 20.65L12 23.72L9.41 20.65L5.49 21.5L4.78 17.55L1.37 15.72L3 11.86L1.37 8L4.78 6.17L5.49 2.22L9.41 3.07Z" fill="#1d9bf0"/>
                      <path d="M8 12L10.5 14.5L16 9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  )}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#c4a24a', marginTop: '2px' }}>
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => go(-1)}
            style={{
              width: '44px', height: '44px', borderRadius: '50%',
              border: '1px solid rgba(26,66,66,0.15)',
              background: '#fff', cursor: 'pointer', color: '#1a4242',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
              boxShadow: '0 2px 8px rgba(26,66,66,0.08)',
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = '#1a4242'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#1a4242' }}
            onMouseOut={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1a4242'; e.currentTarget.style.borderColor = 'rgba(26,66,66,0.15)' }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > active ? 1 : -1); setActive(i) }}
                style={{
                  width: i === active ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '100px',
                  background: i === active ? '#c4a24a' : 'rgba(26,66,66,0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            style={{
              width: '44px', height: '44px', borderRadius: '50%',
              border: '1px solid rgba(26,66,66,0.15)',
              background: '#fff', cursor: 'pointer', color: '#1a4242',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
              boxShadow: '0 2px 8px rgba(26,66,66,0.08)',
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = '#1a4242'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#1a4242' }}
            onMouseOut={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1a4242'; e.currentTarget.style.borderColor = 'rgba(26,66,66,0.15)' }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
