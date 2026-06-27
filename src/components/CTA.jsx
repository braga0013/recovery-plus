export default function CTA() {
  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(60px, 10vw, 120px) 0',
        background: 'linear-gradient(160deg, #faf8f5 0%, #f0ebe0 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative */}
      <div style={{
        position: 'absolute', bottom: '-100px', right: '-100px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,162,74,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
        {/* Ornament */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '64px', height: '64px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #1a4242, #245e5e)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 12px 32px rgba(26,66,66,0.25)',
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c4a24a" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.47 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
            </svg>
          </div>
        </div>

        <span className="reveal" style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px', fontWeight: 600, color: '#c4a24a',
          letterSpacing: '2.5px', textTransform: 'uppercase',
          display: 'inline-block', marginBottom: '20px',
        }}>
          Agende sua consulta
        </span>

        <h2 className="reveal" style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(36px, 5vw, 60px)',
          fontWeight: 600, color: '#1a4242',
          margin: '0 0 24px', lineHeight: 1.15, letterSpacing: '-0.5px',
        }}>
          Pronta para cuidar<br />
          de <em style={{ fontStyle: 'italic', color: '#c4a24a' }}>você</em>?
        </h2>

        <p className="reveal" style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '17px', lineHeight: 1.7, color: '#6b8a8a',
          marginBottom: '44px', maxWidth: '520px', margin: '0 auto 44px',
        }}>
          Dê o primeiro passo para a sua saúde e bem-estar. Entre em contato pelo WhatsApp e agende a sua consulta hoje mesmo.
        </p>

        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
          <a
            href="https://wa.me/5551991135158?text=Olá%20Ana%20Luísa!%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              background: 'linear-gradient(135deg, #25d366, #128c7e)',
              color: '#fff', padding: '18px 40px', borderRadius: '100px',
              fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '16px',
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(37,211,102,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(37,211,102,0.45)' }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,211,102,0.35)' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Falar no WhatsApp
          </a>

          <a
            href="https://www.instagram.com/maisrecovery_/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              border: '1.5px solid rgba(26,66,66,0.2)',
              color: '#1a4242', padding: '18px 32px', borderRadius: '100px',
              fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '15px',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = '#1a4242'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#1a4242' }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1a4242'; e.currentTarget.style.borderColor = 'rgba(26,66,66,0.2)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Seguir no Instagram
          </a>
        </div>

        {/* Trust badges */}
        <div className="reveal" style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px',
          marginTop: '56px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(26,66,66,0.08)',
        }}>
          {[
            { label: 'Atendimento Online e Presencial' },
            { label: 'Horários Flexíveis' },
            { label: 'Consulta Particular' },
          ].map((b) => (
            <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c4a24a" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#6b8a8a', fontWeight: 500 }}>
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
