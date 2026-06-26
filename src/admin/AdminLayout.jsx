import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard, Users, Calendar, X, Menu, LogOut, ChevronRight
} from 'lucide-react'

const nav = [
  { to: '/gestao', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/gestao/pacientes', label: 'Pacientes', icon: Users },
  { to: '/gestao/agenda', label: 'Agenda', icon: Calendar },
]

export default function AdminLayout() {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f6f8', fontFamily: 'Inter, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{
        width: open ? '240px' : '72px',
        transition: 'width 0.3s ease',
        background: 'linear-gradient(180deg, #0d2b2b 0%, #1a4242 100%)',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
        zIndex: 40,
      }}>
        {/* Logo / toggle */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: open ? 'space-between' : 'center',
          padding: '20px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          {open && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '30px', height: '30px', borderRadius: '50%',
                background: 'rgba(196,162,74,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#c4a24a">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '15px', color: '#fff', whiteSpace: 'nowrap' }}>
                Recovery<span style={{ color: '#c4a24a' }}>+</span>
              </span>
            </div>
          )}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', padding: '4px', display: 'flex' }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '16px 8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {nav.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              title={!open ? label : undefined}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: open ? 'flex-start' : 'center',
                gap: open ? '12px' : '0',
                padding: '11px 12px',
                borderRadius: '12px',
                textDecoration: 'none',
                color: isActive ? '#c4a24a' : 'rgba(255,255,255,0.55)',
                background: isActive ? 'rgba(196,162,74,0.1)' : 'transparent',
                border: isActive ? '1px solid rgba(196,162,74,0.2)' : '1px solid transparent',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              })}
              onMouseOver={(e) => {
                const active = e.currentTarget.style.color === 'rgb(196, 162, 74)'
                if (!active) { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#fff' }
              }}
              onMouseOut={(e) => {
                const active = e.currentTarget.getAttribute('aria-current')
                if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }
              }}
            >
              <Icon size={18} strokeWidth={1.8} style={{ flexShrink: 0 }} />
              {open && <span style={{ fontSize: '14px', fontWeight: 500 }}>{label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Bottom actions */}
        <div style={{ padding: '16px 8px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <button
            onClick={() => navigate('/')}
            title="Ver site público"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: open ? 'flex-start' : 'center',
              gap: open ? '12px' : '0',
              padding: '11px 12px', borderRadius: '12px',
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap', overflow: 'hidden',
              width: '100%',
            }}
          >
            <ChevronRight size={16} style={{ flexShrink: 0 }} />
            {open && <span style={{ fontSize: '13px' }}>Ver site público</span>}
          </button>
          <button
            onClick={() => navigate('/')}
            title="Sair"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: open ? 'flex-start' : 'center',
              gap: open ? '12px' : '0',
              padding: '11px 12px', borderRadius: '12px',
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap', overflow: 'hidden',
              width: '100%',
            }}
          >
            <LogOut size={16} style={{ flexShrink: 0 }} />
            {open && <span style={{ fontSize: '13px' }}>Sair</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
        <Outlet />
      </main>
    </div>
  )
}
