import { useState } from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import LegalModal from './LegalModal'
import Logo from '../assets/icons/yuliya-tweitmann.svg'

const NAV_ITEMS = [
  { label: 'Start',    href: '#hero' },
  { label: 'Projekte', href: '#projekte' },
  { label: 'Über',     href: '#ueber-mich' },
  { label: 'Kontakt',  href: '#kontakt' },
]

export default function Footer() {
  const [modal, setModal] = useState(null)

  return (
    <>
      <LegalModal
        isOpen={modal !== null}
        onClose={() => setModal(null)}
        type={modal}
      />

      <footer className="relative mt-0">
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

        <div className="w-full max-w-6xl px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-10 mb-10 md:grid-cols-3">

            <div className="flex flex-col gap-4">
              <a href="#hero" aria-label="Zur Startseite">
                <img src={Logo} alt="Yuliya Tweitmann" className="w-auto h-7" />
              </a>
              <p className="text-xs leading-relaxed font-body text-text-secondary">
                Mediengestalterin Digital & Print in Ausbildung.
                Schwerpunkt Frontend-Web.
              </p>
              <address className="text-xs not-italic leading-relaxed font-body text-text-secondary">
                Sankt-Gallener-Straße 59<br />
                28325 Bremen<br />
                <a
                  href="mailto:yuliya@tweitmann.com"
                  className="transition-colors hover:text-cyan"
                >
                  yuliya@tweitmann.com
                </a>
              </address>
              <p className="text-xs font-body text-text-secondary">
                Gebaut mit React, TailwindCSS & Framer Motion
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="mb-1 text-xs tracking-widest uppercase font-body text-text-secondary">
                Navigation
              </p>
              {NAV_ITEMS.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm transition-colors font-body text-text-secondary hover:text-cyan w-fit"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p className="mb-1 text-xs tracking-widest uppercase font-body text-text-secondary">
                Soziale Netzwerke
              </p>
              <a
                href="https://github.com/YulTwei93"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors font-body text-text-secondary hover:text-cyan w-fit"
              >
                <FiGithub size={14} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yuliya-tweitmann-603a80327"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors font-body text-text-secondary hover:text-cyan w-fit"
              >
                <FiLinkedin size={14} />
                LinkedIn
              </a>

              <div className="flex flex-col gap-2 mt-4">
                <p className="mb-1 text-xs tracking-widest uppercase font-body text-text-secondary">
                  Rechtliches
                </p>
                <button
                  onClick={() => setModal('impressum')}
                  className="p-0 text-sm text-left transition-colors bg-transparent border-none cursor-pointer font-body text-text-secondary hover:text-cyan w-fit"
                >
                  Impressum
                </button>
                <button
                  onClick={() => setModal('datenschutz')}
                  className="p-0 text-sm text-left transition-colors bg-transparent border-none cursor-pointer font-body text-text-secondary hover:text-cyan w-fit"
                >
                  Datenschutzerklärung
                </button>
              </div>
            </div>

          </div>

          <div
            className="flex flex-col items-center justify-between gap-2 pt-6 lg:flex-row"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p className="text-xs font-body text-text-secondary">
              © {new Date().getFullYear()} Yuliya Tweitmann – Alle Rechte vorbehalten
            </p>
            <p className="text-xs font-body text-text-secondary">
              Bremen, Deutschland
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}