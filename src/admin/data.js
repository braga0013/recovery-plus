// Mock seed data + localStorage persistence helpers

const SEED_PATIENTS = [
  { id: '1', nome: 'Mariana Santos', telefone: '(11) 9 9823-4561', email: 'mariana@email.com', nascimento: '1992-05-14', especialidade: 'Gestantes (Pré e Pós-parto)', status: 'ativo', observacoes: 'Gestação de 28 semanas. Queixa de dor lombar.', criado: '2024-03-10' },
  { id: '2', nome: 'Carolina Mendes', telefone: '(11) 9 9712-8834', email: 'carol@email.com', nascimento: '1988-11-22', especialidade: 'Fisioterapia Pélvica e Obstétrica', status: 'ativo', observacoes: 'Incontinência urinária de esforço.', criado: '2024-03-18' },
  { id: '3', nome: 'Juliana Pereira', telefone: '(11) 9 9634-2190', email: 'juli@email.com', nascimento: '1995-07-08', especialidade: 'Pós-operatório e Taping', status: 'ativo', observacoes: 'Pós-cirurgia abdominoplastia. Semana 3.', criado: '2024-04-02' },
  { id: '4', nome: 'Fernanda Rocha', telefone: '(11) 9 9501-3377', email: 'ferocha@email.com', nascimento: '1990-02-19', especialidade: 'Reabilitação Ortopédica', status: 'ativo', observacoes: 'Lesão no joelho. LCA.', criado: '2024-04-15' },
  { id: '5', nome: 'Amanda Torres', telefone: '(11) 9 9488-9012', email: 'amanda.t@email.com', nascimento: '1998-09-30', especialidade: 'Injetáveis', status: 'inativo', observacoes: 'Toxina botulínica facial. Última sessão em março.', criado: '2024-02-20' },
  { id: '6', nome: 'Beatriz Lima', telefone: '(11) 9 9777-5544', email: 'bia.lima@email.com', nascimento: '1985-12-03', especialidade: 'Fisioterapia Pélvica e Obstétrica', status: 'ativo', observacoes: 'Disfunção do assoalho pélvico pós-parto.', criado: '2024-05-01' },
  { id: '7', nome: 'Larissa Costa', telefone: '(11) 9 9321-6780', email: 'lari.costa@email.com', nascimento: '2000-04-17', especialidade: 'Reabilitação Ortopédica', status: 'ativo', observacoes: 'Dor cervical crônica. Postura.', criado: '2024-05-10' },
]

const today = new Date()
const fmt = (d) => d.toISOString().split('T')[0]
const addDays = (d, n) => { const r = new Date(d); r.setDate(r.getDate() + n); return r }

const SEED_CONSULTAS = [
  { id: 'c1', pacienteId: '1', data: fmt(today), hora: '08:30', tipo: 'Gestantes (Pré e Pós-parto)', status: 'confirmado', observacoes: 'Sessão de fortalecimento do assoalho pélvico.' },
  { id: 'c2', pacienteId: '2', data: fmt(today), hora: '09:30', tipo: 'Fisioterapia Pélvica e Obstétrica', status: 'agendado', observacoes: 'Avaliação de retorno.' },
  { id: 'c3', pacienteId: '3', data: fmt(today), hora: '11:00', tipo: 'Pós-operatório e Taping', status: 'confirmado', observacoes: 'Troca de taping e drenagem linfática.' },
  { id: 'c4', pacienteId: '6', data: fmt(today), hora: '14:00', tipo: 'Fisioterapia Pélvica e Obstétrica', status: 'agendado', observacoes: '' },
  { id: 'c5', pacienteId: '4', data: fmt(addDays(today, 1)), hora: '09:00', tipo: 'Reabilitação Ortopédica', status: 'agendado', observacoes: 'Exercícios de fortalecimento.' },
  { id: 'c6', pacienteId: '7', data: fmt(addDays(today, 1)), hora: '10:30', tipo: 'Reabilitação Ortopédica', status: 'agendado', observacoes: '' },
  { id: 'c7', pacienteId: '5', data: fmt(addDays(today, 2)), hora: '15:00', tipo: 'Injetáveis', status: 'agendado', observacoes: 'Aplicação Bioestimulador.' },
  { id: 'c8', pacienteId: '1', data: fmt(addDays(today, 3)), hora: '08:30', tipo: 'Gestantes (Pré e Pós-parto)', status: 'agendado', observacoes: '' },
  { id: 'c9', pacienteId: '2', data: fmt(addDays(today, -1)), hora: '10:00', tipo: 'Fisioterapia Pélvica e Obstétrica', status: 'realizado', observacoes: 'Evoluindo bem.' },
  { id: 'c10', pacienteId: '3', data: fmt(addDays(today, -2)), hora: '11:00', tipo: 'Pós-operatório e Taping', status: 'realizado', observacoes: 'Cicatrização excelente.' },
]

function load(key, seed) {
  try {
    const raw = localStorage.getItem(key)
    if (raw) return JSON.parse(raw)
    localStorage.setItem(key, JSON.stringify(seed))
    return seed
  } catch {
    return seed
  }
}

function save(key, data) {
  try { localStorage.setItem(key, JSON.stringify(data)) } catch {}
}

export function getPatients() { return load('rp_patients', SEED_PATIENTS) }
export function savePatients(p) { save('rp_patients', p) }

export function getConsultas() { return load('rp_consultas', SEED_CONSULTAS) }
export function saveConsultas(c) { save('rp_consultas', c) }

export const ESPECIALIDADES = [
  'Reabilitação Esportiva',
  'Prevenção de Lesões e Fortalecimento Muscular',
  'Preparação Física',
  'Terapia Manual',
  'Dry Needling e Eletroestimulação',
  'Reeducação Postural e Reprogramação de Movimentos',
  'Recovery Desportivo',
  'Fisioterapia Pélvica e Obstétrica',
  'Gestantes (Pré e Pós-parto)',
  'Pós-operatório e Taping',
  'Injetáveis',
]

export const STATUS_LABELS = {
  agendado: { label: 'Agendado', color: '#1a4242', bg: 'rgba(26,66,66,0.08)' },
  confirmado: { label: 'Confirmado', color: '#0a7a4a', bg: 'rgba(10,122,74,0.08)' },
  realizado: { label: 'Realizado', color: '#6b8a8a', bg: 'rgba(107,138,138,0.1)' },
  cancelado: { label: 'Cancelado', color: '#c0392b', bg: 'rgba(192,57,43,0.08)' },
}

export function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

export function fmtDate(iso) {
  if (!iso) return ''
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

export function fmtPhone(v) {
  const n = v.replace(/\D/g, '').slice(0, 11)
  if (n.length <= 2) return n.length ? `(${n}` : ''
  if (n.length <= 7) return `(${n.slice(0,2)}) ${n.slice(2)}`
  if (n.length <= 11) return `(${n.slice(0,2)}) ${n.slice(2,7)}-${n.slice(7)}`
  return v
}
