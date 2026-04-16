import { ShieldCheck, Sparkles } from "lucide-react";
import { useState } from 'react'
import './credentials.css'


const curriculumOptions = [
  'Alberta Program of Studies',
  'British Columbia Curriculum (coming soon)',
  'Ontario Curriculum (coming soon)',
  'IB Business Management (coming soon)',
]

const credentials = [
  {
    title: 'Entrepreneurial Foundations',
    issuer: 'Issued by Hatchloom Inc.',
    earnedBadge: '✅ Earned · Feb 2026',
    tags: ['Design Thinking', 'Business Model Creation', 'Financial Literacy', 'Pitch & Communication'],
    options: curriculumOptions,
    rows: [
      {
        icon: '📈',
        iconBg: '#F0FDF4',
        name: 'Business Studies (CTS)',
        detail: 'Entrepreneurship & Innovation modules',
        count: '4 of 6',
        progress: 67,
        fill: 'var(--rookie)',
        alert: 'Business Studies (CTS):\n✓ Market analysis\n✓ Value proposition\n✓ Competitive landscape\n✓ Stakeholder mapping\n✗ Supply chain management\n✗ Regulatory environment',
      },
      {
        icon: '🎨',
        iconBg: '#F0FBFD',
        name: 'CTF Design Studies',
        detail: 'Design process, prototyping, iteration',
        count: '3 of 4',
        progress: 76,
        fill: 'var(--explorer)',
        alert: 'CTF Design Studies:\n✓ Empathy mapping\n✓ Ideation & brainstorming\n✓ Rapid prototyping\n✗ User testing & iteration',
      },
      {
        icon: '🧭',
        iconBg: '#FFF7ED',
        name: 'CALM',
        detail: 'Career & Life Management',
        count: '5 of 8',
        progress: 63,
        fill: 'var(--teal)',
        alert: 'CALM (Career & Life Management):\n✓ Budgeting & financial planning\n✓ Goal-setting\n✓ Self-assessment\n✓ Teamwork & collaboration\n✓ Community engagement\n✗ Career planning\n✗ Workplace safety\n✗ Personal wellness',
      },
    ],
  },
  {
    title: 'Financial Literacy Foundations',
    issuer: 'Issued by Hatchloom Inc. · Earned from Financial Literacy 101',
    earnedBadge: '✅ Earned · Jan 2026',
    tags: ['Budgeting', 'Saving & Spending', 'Income & Expenses', 'Financial Goal-Setting'],
    options: curriculumOptions.slice(0, 3),
    rows: [
      {
        icon: '🧭',
        iconBg: '#FFF7ED',
        name: 'CALM',
        detail: 'Financial literacy & personal management',
        count: '4 of 8',
        progress: 50,
        fill: 'var(--teal)',
      },
      {
        icon: '📈',
        iconBg: '#F0FDF4',
        name: 'Business Studies (CTS)',
        detail: 'Financial management basics',
        count: '2 of 6',
        progress: 33,
        fill: 'var(--rookie)',
      },
    ],
  },
  {
    title: 'Financial Literacy Intermediate',
    issuer: 'Issued by Hatchloom Inc. · Earned from Financial Literacy 102',
    earnedBadge: '✅ Earned · Feb 2026',
    tags: ['Credit & Debt', 'Investing Basics', 'Financial Statements', 'Risk & Insurance'],
    options: curriculumOptions.slice(0, 3),
    rows: [
      {
        icon: '🧭',
        iconBg: '#FFF7ED',
        name: 'CALM',
        detail: 'Financial literacy & risk management',
        count: '3 of 8',
        progress: 38,
        fill: 'var(--teal)',
      },
      {
        icon: '📈',
        iconBg: '#F0FDF4',
        name: 'Business Studies (CTS)',
        detail: 'Financial analysis & planning',
        count: '3 of 6',
        progress: 50,
        fill: 'var(--rookie)',
      },
    ],
  },
]

const inProgressCredential = {
  title: 'Advanced Entrepreneurship',
  issuer: 'Issued by Hatchloom Inc.',
  badge: '🔒 2 of 5 requirements',
  tags: ['Venture Building', 'Team Leadership', 'Market Validation', 'Financial Modelling', 'Investor Pitch'],
  note: 'Complete 3 more course blocks to unlock this credential',
}

function CurriculumRow({ row }) {
  return (
    <div
      className="cr-row"
      onClick={() => row.alert && window.alert(row.alert)}
      role={row.alert ? 'button' : undefined}
      tabIndex={row.alert ? 0 : undefined}
      onKeyDown={(e) => {
        if (row.alert && (e.key === 'Enter' || e.key === ' ')) {
          window.alert(row.alert)
        }
      }}
    >
      <div className="cr-icon" style={{ background: row.iconBg }}>{row.icon}</div>
      <div className="cr-info">
        <div className="cr-name">{row.name}</div>
        <div className="cr-detail">{row.detail}</div>
      </div>
      <div className="cr-coverage">
        <div className="cr-bar">
          <div className="cr-fill" style={{ width: `${row.progress}%`, background: row.fill }}></div>
        </div>
        <div className="cr-pct">{row.count}</div>
      </div>
    </div>
  )
}

function CredentialCard({ credential }) {
  const [selected, setSelected] = useState(credential.options[0])

  return (
    <div className="cred-card">
      <div className="cred-top">
        <div>
          <div className="cred-name">{credential.title}</div>
          <div className="cred-issuer">{credential.issuer}</div>
        </div>
        <div className="cred-earned-pill">{credential.earnedBadge}</div>
      </div>

      <div className="cred-skills">
        {credential.tags.map((tag) => (
          <span key={tag} className="cred-skill">{tag}</span>
        ))}
      </div>

      <div className="cr-section">
        <div className="cr-header">
          <div className="cr-title">Curriculum Alignment</div>
          <select
            className="cr-dropdown"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
          {credential.options.map((option) => (
           <option key={option} value={option}>
           {option}
          </option>

            ))}
          </select>
        </div>

        {credential.rows.map((row) => (
          <CurriculumRow key={`${credential.title}-${row.name}`} row={row} />
        ))}
      </div>
    </div>
  )
}

function LockedCredential() {
  return (
    <div className="cred-card locked">
      <div className="cred-top">
        <div>
          <div className="cred-name">{inProgressCredential.title}</div>
          <div className="cred-issuer">{inProgressCredential.issuer}</div>
        </div>
        <div className="cred-earned-pill locked-pill">{inProgressCredential.badge}</div>
      </div>

      <div className="cred-skills">
        {inProgressCredential.tags.map((tag) => (
          <span key={tag} className="cred-skill">{tag}</span>
        ))}
      </div>

      <div className="locked-note">{inProgressCredential.note}</div>
    </div>
  )
}

export default function Credentials() {
  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-[28px] border border-[#ECECF2] bg-white shadow-sm">
        <div className="relative border-b border-[#ECECF2] px-6 py-6 md:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4FFF8] via-[#F2F8FF] to-[#FFF6FB] opacity-80" />
          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF9F2] text-[#2FAF62] shadow-sm">
                <ShieldCheck size={24} />
              </div>

              <div>
                <h1 className="text-[28px] font-black tracking-[-0.02em] text-[#221F35]">
                  Credentials
                </h1>
                <p className="mt-1 text-sm text-[#7B8194]">
                  View earned credentials, curriculum alignment, and what you’re close to unlocking next.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start rounded-full bg-[#EEF9F2] px-4 py-2 text-sm font-semibold text-[#2FAF62]">
              <Sparkles size={16} />
              <span>{credentials.length} earned · 1 in progress</span>
            </div>
          </div>
        </div>

        <main className="credentials-page !min-h-0 !bg-transparent">
          <div className="credentials-shell">
            {credentials.map((credential) => (
              <CredentialCard key={credential.title} credential={credential} />
            ))}

            <div className="sub-title in-progress-title">In Progress (1)</div>
            <LockedCredential />
          </div>
        </main>
      </div>
    </section>
  );
}
