import { useState, useMemo } from 'react'
import { ChevronLeft, ChevronRight, Plus, X, ChevronDown } from 'lucide-react'
import { getPatients, getConsultas, saveConsultas, ESPECIALIDADES, STATUS_LABELS, uid, fmtDate } from './data'

function addDays(date, n) {
  const d = new Date(date)
  d.setDate(d.getDate() + n)
  return d
}

function isoDate(d) { return d.toISOString().split('T')[0] }

function ModalConsulta({ consulta, patients, onClose, onSave }) {
  const [form, setForm] = useState({
    pacienteId: '', data: isoDate(new Date()), hora: '09:00',
    tipo: '', status: 'agendado', observacoes: '',
    ...consulta,
  })

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.pacienteId || !form.data || !form.hora) return
    onSave({ ...form, id: form.id || uid() })
  }

  const inputStyle = {
    width: '100%', padding: '10px 14px', borderRadius: '12px',
    border: '1.5px solid rgba(26,66,66,0.12)', fontSize: '14px', color: '#1a4242',
    fontFamily: 'Inter, sans-serif', background: '#faf8f5', outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.2s', appearance: 'none',
  }
  const labelStyle = { display: 'block', fontSize: '12px', fontWeight: 600, color: '#6b8a8a', marginBottom: '6px' }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(13,43,43,0.5)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: '#fff', borderRadius: '24px', width: '100%', maxWidth: '500px', maxHeight: '90vh', overflow: 'auto', boxShadow: '0 32px 80px rgba(0,0,0,0.25)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 28px 20px', borderBottom: '1px solid rgba(26,66,66,0.08)' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 600, color: '#1a4242', margin: 0 }}>
            {form.id ? 'Editar Consulta' : 'Nova Consulta'}
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b8a8a', display: 'flex' }}><X size={20} /></button>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: '24px 28px 28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={labelStyle}>Paciente *</label>
            <div style={{ position: 'relative' }}>
              <select required style={{ ...inputStyle, paddingRight: '36px', cursor: 'pointer' }} value={form.pacienteId} onChange={e => set('pacienteId', e.target.value)}
                onFocus={e => e.target.style.borderColor = '#c4a24a'} onBlur={e => e.target.style.borderColor = 'rgba(26,66,66,0.12)'}>
                <option value="">Selecionar paciente...</option>
                {patients.sort((a,b)=>a.nome.localeCompare(b.nome)).map(p => <option key={p.id} value={p.id}>{p.nome}</option>)}
              </select>
              <ChevronDown size={14} color="#6b8a8a" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Data *</label>
              <input required type="date" style={inputStyle} value={form.data} onChange={e => set('data', e.target.value)}
                onFocus={e => e.target.style.borderColor = '#c4a24a'} onBlur={e => e.target.style.borderColor = 'rgba(26,66,66,0.12)'} />
            </div>
            <div>
              <label style={labelStyle}>Horário *</label>
              <input required type="time" style={inputStyle} value={form.hora} onChange={e => set('hora', e.target.value)}
                onFocus={e => e.target.style.borderColor = '#c4a24a'} onBlur={e => e.target.style.borderColor = 'rgba(26,66,66,0.12)'} />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Tipo de Atendimento</label>
            <div style={{ position: 'relative' }}>
              <select style={{ ...inputStyle, paddingRight: '36px', cursor: 'pointer' }} value={form.tipo} onChange={e => set('tipo', e.target.value)}
                onFocus={e => e.target.style.borderColor = '#c4a24a'} onBlur={e => e.target.style.borderColor = 'rgba(26,66,66,0.12)'}>
                <option value="">Selecionar...</option>
                {ESPECIALIDADES.map(e => <option key={e} value={e}>{e}</option>)}
              </select>
              <ChevronDown size={14} color="#6b8a8a" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Status</label>
            <div style={{ position: 'relative' }}>
              <select style={{ ...inputStyle, paddingRight: '36px', cursor: 'pointer' }} value={form.status} onChange={e => set('status', e.target.value)}
                onFocus={e => e.target.style.borderColor = '#c4a24a'} onBlur={e => e.target.style.borderColor = 'rgba(26,66,66,0.12)'}>
                {Object.entries(STATUS_LABELS).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
              </select>
              <ChevronDown size={14} color="#6b8a8a" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Observações</label>
            <textarea style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }} value={form.observacoes} onChange={e => set('observacoes', e.target.value)} placeholder="Anotações sobre a consulta..."
              onFocus={e => e.target.style.borderColor = '#c4a24a'} onBlur={e => e.target.style.borderColor = 'rgba(26,66,66,0.12)'} />
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button type="button" onClick={onClose} style={{ padding: '11px 24px', borderRadius: '100px', border: '1.5px solid rgba(26,66,66,0.15)', background: 'none', cursor: 'pointer', fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#6b8a8a' }}>Cancelar</button>
            <button type="submit" style={{ padding: '11px 28px', borderRadius: '100px', background: 'linear-gradient(135deg, #1a4242, #245e5e)', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 600, color: '#fff', fontFamily: 'Inter, sans-serif', boxShadow: '0 4px 16px rgba(26,66,66,0.25)' }}>
              {form.id ? 'Salvar' : 'Agendar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function AdminSchedule() {
  const patients = useMemo(() => getPatients(), [])
  const [consultas, setConsultas] = useState(() => getConsultas())
  const [weekStart, setWeekStart] = useState(() => {
    const d = new Date()
    d.setDate(d.getDate() - d.getDay() + 1)
    d.setHours(0,0,0,0)
    return d
  })
  const [modal, setModal] = useState(null)
  const [selectedDay, setSelectedDay] = useState(isoDate(new Date()))

  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

  const handleSave = (updated) => {
    const next = consultas.some(c => c.id === updated.id)
      ? consultas.map(c => c.id === updated.id ? updated : c)
      : [...consultas, updated]
    setConsultas(next)
    saveConsultas(next)
    setModal(null)
  }

  const handleDelete = (id) => {
    const next = consultas.filter(c => c.id !== id)
    setConsultas(next)
    saveConsultas(next)
  }

  const dayConsultas = consultas
    .filter(c => c.data === selectedDay)
    .sort((a, b) => a.hora.localeCompare(b.hora))

  const today = isoDate(new Date())

  return (
    <div style={{ padding: '32px', overflowY: 'auto', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 600, color: '#1a4242', margin: '0 0 6px' }}>Agenda</h1>
          <p style={{ fontSize: '14px', color: '#6b8a8a', margin: 0 }}>{consultas.filter(c => c.data === today).length} consultas hoje</p>
        </div>
        <button onClick={() => setModal({ data: selectedDay })} style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          background: 'linear-gradient(135deg, #1a4242, #245e5e)',
          color: '#fff', padding: '12px 20px', borderRadius: '100px',
          border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 600,
          fontFamily: 'Inter, sans-serif', boxShadow: '0 4px 16px rgba(26,66,66,0.25)',
        }}>
          <Plus size={16} /> Nova Consulta
        </button>
      </div>

      {/* Week navigation */}
      <div style={{ background: '#fff', borderRadius: '20px', padding: '20px', marginBottom: '24px', boxShadow: '0 2px 12px rgba(26,66,66,0.06)', border: '1px solid rgba(26,66,66,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <button onClick={() => setWeekStart(d => addDays(d, -7))} style={{ background: '#f4f6f8', border: 'none', borderRadius: '10px', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a4242' }}>
            <ChevronLeft size={18} />
          </button>
          <span style={{ fontSize: '15px', fontWeight: 600, color: '#1a4242' }}>
            {days[0].toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
          </span>
          <button onClick={() => setWeekStart(d => addDays(d, 7))} style={{ background: '#f4f6f8', border: 'none', borderRadius: '10px', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a4242' }}>
            <ChevronRight size={18} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
          {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((d, i) => {
            const date = days[i]
            const iso = isoDate(date)
            const count = consultas.filter(c => c.data === iso).length
            const isToday = iso === today
            const isSelected = iso === selectedDay

            return (
              <button key={i} onClick={() => setSelectedDay(iso)} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                padding: '12px 8px', borderRadius: '14px',
                border: '1.5px solid',
                borderColor: isSelected ? '#1a4242' : isToday ? 'rgba(196,162,74,0.4)' : 'transparent',
                background: isSelected ? '#1a4242' : isToday ? 'rgba(196,162,74,0.06)' : '#f8fafa',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}>
                <span style={{ fontSize: '11px', fontWeight: 500, color: isSelected ? 'rgba(255,255,255,0.7)' : '#6b8a8a', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {d}
                </span>
                <span style={{ fontSize: '18px', fontWeight: 700, color: isSelected ? '#fff' : isToday ? '#c4a24a' : '#1a4242', fontFamily: 'Playfair Display, serif' }}>
                  {date.getDate()}
                </span>
                {count > 0 && (
                  <span style={{ fontSize: '11px', fontWeight: 600, color: isSelected ? 'rgba(255,255,255,0.7)' : '#c4a24a', background: isSelected ? 'rgba(255,255,255,0.15)' : 'rgba(196,162,74,0.1)', padding: '1px 6px', borderRadius: '100px' }}>
                    {count}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Day schedule */}
      <div style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(26,66,66,0.06)', border: '1px solid rgba(26,66,66,0.06)' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(26,66,66,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', fontWeight: 600, color: '#1a4242', margin: 0 }}>
            {new Date(selectedDay + 'T12:00').toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
          </h3>
          <span style={{ fontSize: '12px', color: '#6b8a8a' }}>{dayConsultas.length} consulta{dayConsultas.length !== 1 ? 's' : ''}</span>
        </div>

        {dayConsultas.length === 0 ? (
          <div style={{ padding: '56px 24px', textAlign: 'center' }}>
            <p style={{ fontSize: '15px', color: '#6b8a8a', margin: '0 0 16px' }}>Nenhuma consulta para este dia</p>
            <button onClick={() => setModal({ data: selectedDay })} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(26,66,66,0.06)', border: 'none', borderRadius: '100px',
              padding: '10px 20px', cursor: 'pointer', fontSize: '14px', color: '#1a4242', fontFamily: 'Inter, sans-serif',
            }}>
              <Plus size={14} /> Agendar consulta
            </button>
          </div>
        ) : (
          <div style={{ padding: '8px 0' }}>
            {dayConsultas.map((c) => {
              const p = patients.find(p => p.id === c.pacienteId)
              const s = STATUS_LABELS[c.status] || STATUS_LABELS.agendado
              return (
                <div key={c.id} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '16px 24px',
                  borderBottom: '1px solid rgba(26,66,66,0.04)',
                  transition: 'background 0.15s',
                }}
                onMouseOver={e => e.currentTarget.style.background = '#f8fafa'}
                onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                >
                  {/* Time */}
                  <div style={{
                    fontSize: '13px', fontWeight: 700, color: '#1a4242',
                    background: 'rgba(26,66,66,0.06)',
                    padding: '8px 12px', borderRadius: '12px',
                    whiteSpace: 'nowrap', flexShrink: 0,
                  }}>
                    {c.hora}
                  </div>

                  {/* Color bar */}
                  <div style={{ width: '3px', height: '40px', borderRadius: '2px', background: s.color, flexShrink: 0, opacity: 0.5 }} />

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: '#1a4242', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {p?.nome || 'Paciente não encontrada'}
                    </div>
                    <div style={{ fontSize: '13px', color: '#6b8a8a', marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {c.tipo || 'Consulta'}
                      {c.observacoes && ` · ${c.observacoes}`}
                    </div>
                  </div>

                  {/* Status badge */}
                  <span style={{ fontSize: '11px', fontWeight: 600, color: s.color, background: s.bg, padding: '4px 12px', borderRadius: '100px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                    {s.label}
                  </span>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                    <button onClick={() => setModal(c)} style={{ width: '30px', height: '30px', borderRadius: '8px', border: '1px solid rgba(26,66,66,0.12)', background: '#fff', cursor: 'pointer', color: '#1a4242', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                    <button onClick={() => handleDelete(c.id)} style={{ width: '30px', height: '30px', borderRadius: '8px', border: '1px solid rgba(192,57,43,0.15)', background: '#fff', cursor: 'pointer', color: '#c0392b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <X size={12} />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {modal !== null && <ModalConsulta consulta={modal} patients={patients} onClose={() => setModal(null)} onSave={handleSave} />}
    </div>
  )
}
