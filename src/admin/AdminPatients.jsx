import { useState, useMemo } from 'react'
import { Search, Plus, X, Edit2, Phone, Mail, ChevronDown } from 'lucide-react'
import { getPatients, savePatients, ESPECIALIDADES, uid, fmtDate, fmtPhone } from './data'

const EMPTY = { id: '', nome: '', telefone: '', email: '', nascimento: '', especialidade: '', status: 'ativo', observacoes: '' }

function Modal({ patient, onClose, onSave }) {
  const [form, setForm] = useState({ ...EMPTY, ...patient })

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nome.trim()) return
    onSave({ ...form, id: form.id || uid(), criado: form.criado || new Date().toISOString().split('T')[0] })
  }

  const inputStyle = {
    width: '100%', padding: '10px 14px', borderRadius: '12px',
    border: '1.5px solid rgba(26,66,66,0.12)', fontSize: '14px', color: '#1a4242',
    fontFamily: 'Inter, sans-serif', background: '#faf8f5', outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  }
  const labelStyle = { display: 'block', fontSize: '12px', fontWeight: 600, color: '#6b8a8a', marginBottom: '6px', letterSpacing: '0.3px' }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(13,43,43,0.5)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px',
    }}
    onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div style={{
        background: '#fff', borderRadius: '24px', width: '100%', maxWidth: '560px',
        maxHeight: '90vh', overflow: 'auto',
        boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '24px 28px 20px',
          borderBottom: '1px solid rgba(26,66,66,0.08)',
        }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 600, color: '#1a4242', margin: 0 }}>
            {form.id ? 'Editar Paciente' : 'Nova Paciente'}
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b8a8a', padding: '4px', display: 'flex' }}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: '24px 28px 28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Nome completo *</label>
              <input style={inputStyle} value={form.nome} onChange={e => set('nome', e.target.value)} placeholder="Nome da paciente" required
                onFocus={e => e.target.style.borderColor = '#c4a24a'} onBlur={e => e.target.style.borderColor = 'rgba(26,66,66,0.12)'} />
            </div>
            <div>
              <label style={labelStyle}>Telefone / WhatsApp</label>
              <input style={inputStyle} value={form.telefone} onChange={e => set('telefone', fmtPhone(e.target.value))} placeholder="(11) 9 9999-9999"
                onFocus={e => e.target.style.borderColor = '#c4a24a'} onBlur={e => e.target.style.borderColor = 'rgba(26,66,66,0.12)'} />
            </div>
            <div>
              <label style={labelStyle}>Data de Nascimento</label>
              <input type="date" style={inputStyle} value={form.nascimento} onChange={e => set('nascimento', e.target.value)}
                onFocus={e => e.target.style.borderColor = '#c4a24a'} onBlur={e => e.target.style.borderColor = 'rgba(26,66,66,0.12)'} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>E-mail</label>
              <input type="email" style={inputStyle} value={form.email} onChange={e => set('email', e.target.value)} placeholder="email@exemplo.com"
                onFocus={e => e.target.style.borderColor = '#c4a24a'} onBlur={e => e.target.style.borderColor = 'rgba(26,66,66,0.12)'} />
            </div>
            <div>
              <label style={labelStyle}>Especialidade</label>
              <div style={{ position: 'relative' }}>
                <select style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', paddingRight: '36px' }}
                  value={form.especialidade} onChange={e => set('especialidade', e.target.value)}
                  onFocus={e => e.target.style.borderColor = '#c4a24a'} onBlur={e => e.target.style.borderColor = 'rgba(26,66,66,0.12)'}
                >
                  <option value="">Selecionar...</option>
                  {ESPECIALIDADES.map(e => <option key={e} value={e}>{e}</option>)}
                </select>
                <ChevronDown size={14} color="#6b8a8a" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Status</label>
              <div style={{ position: 'relative' }}>
                <select style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', paddingRight: '36px' }}
                  value={form.status} onChange={e => set('status', e.target.value)}
                  onFocus={e => e.target.style.borderColor = '#c4a24a'} onBlur={e => e.target.style.borderColor = 'rgba(26,66,66,0.12)'}
                >
                  <option value="ativo">Ativo</option>
                  <option value="inativo">Inativo</option>
                </select>
                <ChevronDown size={14} color="#6b8a8a" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
              </div>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Observações clínicas</label>
              <textarea style={{ ...inputStyle, minHeight: '88px', resize: 'vertical' }}
                value={form.observacoes} onChange={e => set('observacoes', e.target.value)}
                placeholder="Histórico, queixas, observações importantes..."
                onFocus={e => e.target.style.borderColor = '#c4a24a'} onBlur={e => e.target.style.borderColor = 'rgba(26,66,66,0.12)'}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '4px' }}>
            <button type="button" onClick={onClose} style={{
              padding: '11px 24px', borderRadius: '100px', border: '1.5px solid rgba(26,66,66,0.15)',
              background: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 500, color: '#6b8a8a',
              fontFamily: 'Inter, sans-serif',
            }}>
              Cancelar
            </button>
            <button type="submit" style={{
              padding: '11px 28px', borderRadius: '100px',
              background: 'linear-gradient(135deg, #1a4242, #245e5e)',
              border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 600, color: '#fff',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 4px 16px rgba(26,66,66,0.25)',
            }}>
              {form.id ? 'Salvar alterações' : 'Cadastrar paciente'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function AdminPatients() {
  const [patients, setPatients] = useState(() => getPatients())
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('todos')
  const [modal, setModal] = useState(null)
  const [deleteId, setDeleteId] = useState(null)

  const filtered = useMemo(() => {
    return patients.filter(p => {
      const matchSearch = p.nome.toLowerCase().includes(search.toLowerCase()) ||
        p.telefone.includes(search) || p.especialidade.toLowerCase().includes(search.toLowerCase())
      const matchFilter = filter === 'todos' || p.status === filter
      return matchSearch && matchFilter
    })
  }, [patients, search, filter])

  const handleSave = (updated) => {
    const next = patients.some(p => p.id === updated.id)
      ? patients.map(p => p.id === updated.id ? updated : p)
      : [...patients, updated]
    setPatients(next)
    savePatients(next)
    setModal(null)
  }

  const handleDelete = (id) => {
    const next = patients.filter(p => p.id !== id)
    setPatients(next)
    savePatients(next)
    setDeleteId(null)
  }

  return (
    <div style={{ padding: '32px', overflowY: 'auto', height: '100%' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 600, color: '#1a4242', margin: '0 0 6px' }}>
            Pacientes
          </h1>
          <p style={{ fontSize: '14px', color: '#6b8a8a', margin: 0 }}>{patients.length} cadastradas · {patients.filter(p => p.status === 'ativo').length} ativas</p>
        </div>
        <button
          onClick={() => setModal({})}
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: 'linear-gradient(135deg, #1a4242, #245e5e)',
            color: '#fff', padding: '12px 20px', borderRadius: '100px',
            border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 600,
            fontFamily: 'Inter, sans-serif', boxShadow: '0 4px 16px rgba(26,66,66,0.25)',
          }}
        >
          <Plus size={16} /> Nova Paciente
        </button>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
        <div style={{
          flex: '1', minWidth: '200px', maxWidth: '400px',
          display: 'flex', alignItems: 'center', gap: '10px',
          background: '#fff', border: '1.5px solid rgba(26,66,66,0.1)', borderRadius: '14px',
          padding: '10px 16px',
        }}>
          <Search size={16} color="#6b8a8a" />
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Buscar paciente..."
            style={{ border: 'none', outline: 'none', fontSize: '14px', color: '#1a4242', fontFamily: 'Inter, sans-serif', width: '100%', background: 'transparent' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['todos', 'ativo', 'inativo'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '10px 18px', borderRadius: '100px', border: '1.5px solid',
              borderColor: filter === f ? '#1a4242' : 'rgba(26,66,66,0.12)',
              background: filter === f ? '#1a4242' : '#fff',
              color: filter === f ? '#fff' : '#6b8a8a',
              fontSize: '13px', fontWeight: 500, cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', textTransform: 'capitalize',
            }}>
              {{ todos: 'Todas', ativo: 'Ativas', inativo: 'Inativas' }[f]}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid rgba(26,66,66,0.06)', overflow: 'hidden', boxShadow: '0 2px 12px rgba(26,66,66,0.06)' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
            <thead>
              <tr style={{ background: '#f8fafa', borderBottom: '1px solid rgba(26,66,66,0.06)' }}>
                {['Paciente', 'Especialidade', 'Contato', 'Cadastro', 'Status', ''].map(h => (
                  <th key={h} style={{ padding: '14px 18px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b8a8a', letterSpacing: '0.8px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ padding: '40px', textAlign: 'center', color: '#6b8a8a', fontSize: '14px' }}>
                    Nenhuma paciente encontrada
                  </td>
                </tr>
              )}
              {filtered.map((p, i) => (
                <tr key={p.id} style={{ borderBottom: i < filtered.length - 1 ? '1px solid rgba(26,66,66,0.05)' : 'none', transition: 'background 0.15s' }}
                  onMouseOver={e => e.currentTarget.style.background = '#f8fafa'}
                  onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{ padding: '16px 18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
                        background: 'linear-gradient(135deg, #1a4242, #245e5e)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '12px', fontWeight: 700, color: '#fff',
                      }}>
                        {p.nome.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: '#1a4242' }}>{p.nome}</div>
                        {p.nascimento && <div style={{ fontSize: '12px', color: '#6b8a8a' }}>Nasc. {fmtDate(p.nascimento)}</div>}
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 18px' }}>
                    <span style={{ fontSize: '13px', color: '#4a6a6a', display: 'block', maxWidth: '200px' }}>{p.especialidade || '—'}</span>
                  </td>
                  <td style={{ padding: '16px 18px' }}>
                    {p.telefone && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#4a6a6a', marginBottom: '3px' }}>
                        <Phone size={11} /> {p.telefone}
                      </div>
                    )}
                    {p.email && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#4a6a6a' }}>
                        <Mail size={11} /> {p.email}
                      </div>
                    )}
                  </td>
                  <td style={{ padding: '16px 18px', fontSize: '13px', color: '#6b8a8a', whiteSpace: 'nowrap' }}>
                    {fmtDate(p.criado)}
                  </td>
                  <td style={{ padding: '16px 18px' }}>
                    <span style={{
                      fontSize: '11px', fontWeight: 600,
                      color: p.status === 'ativo' ? '#0a7a4a' : '#6b8a8a',
                      background: p.status === 'ativo' ? 'rgba(10,122,74,0.08)' : 'rgba(107,138,138,0.1)',
                      padding: '4px 10px', borderRadius: '100px',
                    }}>
                      {p.status === 'ativo' ? 'Ativa' : 'Inativa'}
                    </span>
                  </td>
                  <td style={{ padding: '16px 18px' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                      <button onClick={() => setModal(p)} title="Editar" style={{
                        width: '32px', height: '32px', borderRadius: '10px',
                        border: '1px solid rgba(26,66,66,0.12)', background: '#fff',
                        cursor: 'pointer', color: '#1a4242', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Edit2 size={13} />
                      </button>
                      <button onClick={() => setDeleteId(p.id)} title="Excluir" style={{
                        width: '32px', height: '32px', borderRadius: '10px',
                        border: '1px solid rgba(192,57,43,0.15)', background: '#fff',
                        cursor: 'pointer', color: '#c0392b', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <X size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      {modal !== null && <Modal patient={modal} onClose={() => setModal(null)} onSave={handleSave} />}

      {deleteId && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(13,43,43,0.5)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: '#fff', borderRadius: '20px', padding: '32px', maxWidth: '380px', width: '100%', textAlign: 'center', boxShadow: '0 32px 80px rgba(0,0,0,0.25)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(192,57,43,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <X size={22} color="#c0392b" />
            </div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: '#1a4242', margin: '0 0 10px' }}>Excluir paciente?</h3>
            <p style={{ fontSize: '14px', color: '#6b8a8a', margin: '0 0 24px', lineHeight: 1.6 }}>Esta ação não pode ser desfeita. Os dados serão removidos permanentemente.</p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => setDeleteId(null)} style={{ flex: 1, padding: '11px', borderRadius: '100px', border: '1.5px solid rgba(26,66,66,0.15)', background: 'none', cursor: 'pointer', fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#6b8a8a' }}>Cancelar</button>
              <button onClick={() => handleDelete(deleteId)} style={{ flex: 1, padding: '11px', borderRadius: '100px', border: 'none', background: '#c0392b', cursor: 'pointer', fontSize: '14px', fontWeight: 600, fontFamily: 'Inter, sans-serif', color: '#fff' }}>Excluir</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
