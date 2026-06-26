import { useMemo } from 'react'
import { Users, Calendar, TrendingUp, Clock } from 'lucide-react'
import { getPatients, getConsultas, fmtDate, STATUS_LABELS } from './data'

function StatCard({ icon: Icon, label, value, sub, color }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '20px',
      padding: '24px',
      boxShadow: '0 2px 12px rgba(26,66,66,0.06)',
      border: '1px solid rgba(26,66,66,0.06)',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '14px',
          background: `${color}12`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon size={20} color={color} strokeWidth={1.8} />
        </div>
      </div>
      <div>
        <div style={{ fontSize: '28px', fontWeight: 700, color: '#1a4242', lineHeight: 1, fontFamily: 'Playfair Display, serif' }}>{value}</div>
        <div style={{ fontSize: '13px', color: '#6b8a8a', marginTop: '6px', fontWeight: 500 }}>{label}</div>
        {sub && <div style={{ fontSize: '12px', color: color, marginTop: '4px' }}>{sub}</div>}
      </div>
    </div>
  )
}

function StatusBadge({ status }) {
  const s = STATUS_LABELS[status] || STATUS_LABELS.agendado
  return (
    <span style={{
      fontSize: '11px', fontWeight: 600,
      color: s.color, background: s.bg,
      padding: '3px 10px', borderRadius: '100px',
      letterSpacing: '0.3px',
    }}>
      {s.label}
    </span>
  )
}

export default function AdminDashboard() {
  const patients = useMemo(() => getPatients(), [])
  const consultas = useMemo(() => getConsultas(), [])

  const today = new Date().toISOString().split('T')[0]
  const todayConsultas = consultas.filter(c => c.data === today).sort((a, b) => a.hora.localeCompare(b.hora))
  const upcomingConsultas = consultas
    .filter(c => c.data > today)
    .sort((a, b) => a.data.localeCompare(b.data) || a.hora.localeCompare(b.hora))
    .slice(0, 5)

  const activePatients = patients.filter(p => p.status === 'ativo').length
  const recentPatients = [...patients].sort((a, b) => b.criado.localeCompare(a.criado)).slice(0, 4)

  return (
    <div style={{ padding: '32px', overflowY: 'auto', height: '100%' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 600, color: '#1a4242', margin: '0 0 6px' }}>
          Bom dia, Ana Luísa 👋
        </h1>
        <p style={{ fontSize: '14px', color: '#6b8a8a', margin: 0 }}>
          {new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        <StatCard icon={Users} label="Pacientes ativos" value={activePatients} sub={`${patients.length} total`} color="#1a4242" />
        <StatCard icon={Calendar} label="Consultas hoje" value={todayConsultas.length} sub="Ver agenda" color="#c4a24a" />
        <StatCard icon={Clock} label="Próximas consultas" value={upcomingConsultas.length} sub="Esta semana" color="#245e5e" />
        <StatCard icon={TrendingUp} label="Total de consultas" value={consultas.filter(c => c.status === 'realizado').length} sub="Realizadas" color="#0a7a4a" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
        {/* Today's schedule */}
        <div style={{ background: '#fff', borderRadius: '20px', padding: '24px', boxShadow: '0 2px 12px rgba(26,66,66,0.06)', border: '1px solid rgba(26,66,66,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 600, color: '#1a4242', margin: 0 }}>
              Agenda de Hoje
            </h3>
            <span style={{ fontSize: '12px', background: 'rgba(196,162,74,0.1)', color: '#c4a24a', padding: '4px 10px', borderRadius: '100px', fontWeight: 600 }}>
              {todayConsultas.length} consultas
            </span>
          </div>

          {todayConsultas.length === 0 ? (
            <p style={{ fontSize: '14px', color: '#6b8a8a', textAlign: 'center', padding: '24px 0' }}>
              Nenhuma consulta para hoje
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {todayConsultas.map((c) => {
                const p = getPatients().find(p => p.id === c.pacienteId)
                return (
                  <div key={c.id} style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '12px', borderRadius: '14px',
                    background: '#f8fafa',
                    border: '1px solid rgba(26,66,66,0.06)',
                  }}>
                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px', fontWeight: 700,
                      color: '#1a4242', background: 'rgba(26,66,66,0.08)',
                      padding: '6px 10px', borderRadius: '10px',
                      whiteSpace: 'nowrap',
                    }}>
                      {c.hora}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#1a4242', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {p?.nome || 'Paciente'}
                      </div>
                      <div style={{ fontSize: '12px', color: '#6b8a8a', marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {c.tipo}
                      </div>
                    </div>
                    <StatusBadge status={c.status} />
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Recent patients */}
        <div style={{ background: '#fff', borderRadius: '20px', padding: '24px', boxShadow: '0 2px 12px rgba(26,66,66,0.06)', border: '1px solid rgba(26,66,66,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 600, color: '#1a4242', margin: 0 }}>
              Pacientes Recentes
            </h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {recentPatients.map((p) => (
              <div key={p.id} style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '12px', borderRadius: '14px',
                background: '#f8fafa',
                border: '1px solid rgba(26,66,66,0.06)',
              }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, #1a4242, #245e5e)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '13px', fontWeight: 700, color: '#fff',
                }}>
                  {p.nome.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#1a4242', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.nome}</div>
                  <div style={{ fontSize: '12px', color: '#6b8a8a', marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.especialidade}</div>
                </div>
                <div style={{
                  fontSize: '11px', color: p.status === 'ativo' ? '#0a7a4a' : '#6b8a8a',
                  background: p.status === 'ativo' ? 'rgba(10,122,74,0.08)' : 'rgba(107,138,138,0.1)',
                  padding: '3px 8px', borderRadius: '100px', fontWeight: 600, flexShrink: 0,
                }}>
                  {p.status === 'ativo' ? 'Ativo' : 'Inativo'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming */}
        <div style={{ background: 'linear-gradient(135deg, #1a4242, #245e5e)', borderRadius: '20px', padding: '24px', gridColumn: '1 / -1' }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 600, color: '#fff', margin: '0 0 20px' }}>
            Próximas Consultas
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
            {upcomingConsultas.map((c) => {
              const p = getPatients().find(p => p.id === c.pacienteId)
              return (
                <div key={c.id} style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '14px',
                  padding: '16px',
                }}>
                  <div style={{ fontSize: '12px', color: '#c4a24a', fontWeight: 600, marginBottom: '8px' }}>
                    {fmtDate(c.data)} às {c.hora}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>{p?.nome}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>{c.tipo}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
