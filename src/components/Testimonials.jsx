import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Mariana S.',
    role: 'Pós-parto',
    text: 'A Ana Luísa foi fundamental na minha recuperação após o parto. O acompanhamento dela foi tão cuidadoso e humanizado que me senti completamente segura em cada etapa. Indico para todas as mamães!',
    stars: 5,
    initials: 'MS',
    color: '#1a4242',
  },
  {
    name: 'Carolina M.',
    role: 'Fisioterapia Pélvica',
    text: 'Sofria com incontinência há anos e achava que era algo normal. Graças ao tratamento pélvico com a Ana Luísa, minha qualidade de vida mudou completamente. Profissional incrível!',
    stars: 5,
    initials: 'CM',
    color: '#245e5e',
  },
  {
    name: 'Juliana P.',
    role: 'Pós-operatório',
    text: 'Fiz cirurgia e tive o acompanhamento pós-operatório com ela. A cicatrização foi muito mais rápida do que o esperado. O taping e o protocolo dela fizeram toda a diferença na minha recuperação.',
    stars: 5,
    initials: 'JP',
    color: '#1e4d4d',
  },
  {
    name: 'Fernanda R.',
    role: 'Gestante',
    text: 'Fiz acompanhamento durante toda a gravidez e não poderia ter feito escolha melhor. A Ana Luísa me preparou para o parto de uma forma que me deixou muito mais tranquila e confiante.',
    stars: 5,
    initials: 'FR',
    color: '#0d2b2b',
  },
  {
    name: 'Amanda T.',
    role: 'Injetáveis',
    text: 'Realizei aplicação de botox com a Ana Luísa e o resultado ficou naturalmente lindo! Técnica impecável, ambiente acolhedor e ela explicou tudo antes de começar. Amei!',
    stars: 5,
    initials: 'AT',
    color: '#b89040',
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
                width: '52px', height: '52px', borderRadius: '50%',
                background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '16px', color: '#fff' }}>
                  {t.initials}
                </span>
              </div>
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '15px', color: '#1a4242' }}>
                  {t.name}
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
