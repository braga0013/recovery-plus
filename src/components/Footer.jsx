export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: '#0d2b2b',
      padding: 'clamp(40px, 6vw, 72px) 0 24px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '56px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #1a4242, #245e5e)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#c4a24a" />
                </svg>
              </div>
              <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '17px', color: '#fff' }}>
                Recovery<span style={{ color: '#c4a24a' }}>+</span>
              </span>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: '240px', margin: '0 0 20px' }}>
              Cuidado especializado para cada fase da sua vida, com humanidade e excelência clínica.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {/* Instagram */}
              <a href="https://www.instagram.com/maisrecovery_/" target="_blank" rel="noopener noreferrer" style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.6)',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(196,162,74,0.15)'; e.currentTarget.style.borderColor = '#c4a24a'; e.currentTarget.style.color = '#c4a24a' }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/5551991135158" target="_blank" rel="noopener noreferrer" style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.6)',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(196,162,74,0.15)'; e.currentTarget.style.borderColor = '#c4a24a'; e.currentTarget.style.color = '#c4a24a' }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13px', color: 'rgba(255,255,255,0.7)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
              Navegação
            </h4>
            {[
              { label: 'Início', href: '#home' },
              { label: 'Sobre', href: '#about' },
              { label: 'Especialidades', href: '#services' },
              { label: 'Depoimentos', href: '#testimonials' },
              { label: 'Agendar Consulta', href: '#contact' },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{
                display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '14px',
                color: 'rgba(255,255,255,0.45)', textDecoration: 'none',
                marginBottom: '10px', transition: 'color 0.2s',
              }}
              onMouseOver={(e) => e.target.style.color = '#c4a24a'}
              onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.45)'}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Specialties */}
          <div>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13px', color: 'rgba(255,255,255,0.7)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
              Especialidades
            </h4>
            {[
              'Fisioterapia Pélvica',
              'Gestantes (Pré e Pós-parto)',
              'Pós-operatório',
              'Injetáveis',
              'Reabilitação Ortopédica',
            ].map((s) => (
              <p key={s} style={{
                fontFamily: 'Inter, sans-serif', fontSize: '14px',
                color: 'rgba(255,255,255,0.45)', marginBottom: '10px',
              }}>
                {s}
              </p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13px', color: 'rgba(255,255,255,0.7)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
              Contato
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: '📱', text: '(51) 99113-5158', href: 'https://wa.me/5551991135158' },
                { icon: '📍', text: 'Av. Assis Brasil 3982 - Grand Park Lindóia', href: null },
                { icon: '🕐', text: 'Seg–Sáb, 7h às 22h', href: null },
              ].map((c) => (
                c.href ? (
                  <a key={c.text} href={c.href} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    fontFamily: 'Inter, sans-serif', fontSize: '14px',
                    color: 'rgba(255,255,255,0.45)', textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#c4a24a'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >
                    <span>{c.icon}</span> {c.text}
                  </a>
                ) : (
                  <p key={c.text} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    fontFamily: 'Inter, sans-serif', fontSize: '14px',
                    color: 'rgba(255,255,255,0.45)', margin: 0,
                  }}>
                    <span>{c.icon}</span> {c.text}
                  </p>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            © {year} Recovery+ · Ana Luísa Dias · Todos os direitos reservados
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.2)', margin: 0 }}>CREFITO-5 · RS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
