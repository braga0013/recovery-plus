import { CheckCircle2 } from 'lucide-react'

const credentials = [
  'Fisioterapia Pélvica e Obstétrica',
  'Reabilitação Pós-operatória',
  'Aplicação de Injetáveis',
  'Reabilitação Ortopédica',
  'Atendimento Humanizado',
  'Protocolos Personalizados',
]

export default function About() {
  return (
    <section id="about" style={{ padding: 'clamp(60px, 10vw, 120px) 0', backgroundColor: '#faf8f5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}>
          {/* Photo */}
          <div className="reveal" style={{ position: 'relative' }}>
            <div style={{
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: '28px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 32px 80px rgba(26,66,66,0.2)',
              background: 'linear-gradient(160deg, #1a4242 0%, #245e5e 100%)',
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
                }}
              />
              {/* Bottom gradient overlay */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                background: 'linear-gradient(to top, rgba(13,43,43,0.6), transparent)',
                pointerEvents: 'none',
              }} />
              {/* Name overlay */}
              <div style={{
                position: 'absolute', bottom: '24px', left: '24px', right: '24px',
              }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 600, color: '#fff', margin: '0 0 4px' }}>
                  Ana Luísa Dias
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.65)', margin: 0 }}>
                  Fisioterapeuta · CREFITO-5
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              backgroundColor: '#fff',
              borderRadius: '20px',
              padding: '18px 22px',
              boxShadow: '0 16px 48px rgba(26,66,66,0.12)',
              border: '1px solid rgba(196,162,74,0.15)',
            }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '30px', fontWeight: 700, color: '#1a4242', lineHeight: 1 }}>5+</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#6b8a8a', marginTop: '4px' }}>Anos de experiência</div>
            </div>

            {/* Gold accent line */}
            <div style={{
              position: 'absolute', top: '40px', left: '-16px',
              width: '4px', height: '100px',
              background: 'linear-gradient(180deg, #c4a24a, transparent)',
              borderRadius: '2px',
            }} />
          </div>

          {/* Text */}
          <div>
            <span className="reveal" style={{
              display: 'inline-block',
              fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
              color: '#c4a24a', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '14px',
            }}>
              Sobre mim
            </span>

            <h2 className="reveal" style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 600, color: '#1a4242',
              lineHeight: 1.2, letterSpacing: '-0.5px',
              margin: '0 0 22px',
            }}>
              Bem-vinda ao seu espaço de cuidado, saúde e{' '}
              <em style={{ color: '#c4a24a', fontStyle: 'italic' }}>bem-estar</em>
            </h2>

            <p className="reveal" style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: 1.8,
              color: '#4a6a6a', marginBottom: '18px',
            }}>
              Sou especialista em <strong style={{ color: '#1a4242' }}>Fisioterapia Pélvica e Obstétrica</strong>, e a minha missão é caminhar ao seu lado na fase mais transformadora da sua vida, oferecendo um acompanhamento humanizado do pré ao pós-parto e durante toda a fase do pós-operatório.
            </p>

            <p className="reveal" style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: 1.8,
              color: '#4a6a6a', marginBottom: '32px',
            }}>
              Além de atuar na <strong style={{ color: '#1a4242' }}>reabilitação ortopédica e esportiva</strong> e na <strong style={{ color: '#1a4242' }}>aplicação de injetáveis</strong>. Aqui, cada tratamento é desenhado sob medida, respeitando a sua individualidade e devolvendo a sua qualidade de vida.
            </p>

            {/* Credentials */}
            <div className="reveal" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '36px',
            }}>
              {credentials.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px' }}>
                  <CheckCircle2 size={15} color="#c4a24a" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#4a6a6a', lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="reveal">
              <a href="#services" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #1a4242, #245e5e)',
                color: '#fff', padding: '13px 30px', borderRadius: '100px',
                fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(26,66,66,0.22)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(26,66,66,0.32)' }}
              onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,66,66,0.22)' }}
              >
                Ver especialidades
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
