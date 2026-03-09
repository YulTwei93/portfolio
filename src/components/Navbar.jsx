import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const NAV_ITEMS = [
  { label: 'Start',    href: '#hero' },
  { label: 'Projekte', href: '#projekte' },
  { label: 'Über',     href: '#ueber-mich' },
  { label: 'Kontakt',  href: '#kontakt' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 flex justify-center w-full px-6 pt-4">

      <nav
        className="flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-lg"
        style={{
          background:           'var(--glass-bg)',
          backdropFilter:       'var(--glass-blur)',
          WebkitBackdropFilter: 'var(--glass-blur)',
          border:               '1px solid var(--glass-border)',
          boxShadow:            '0 4px 30px rgba(0, 0, 0, 0.3)',
        }}
        aria-label="Hauptnavigation"
      >
        <a href="#hero" className="text-lg font-bold text-white transition-colors nav-link font-display">
          YT
        </a>

        <ul className="items-center hidden gap-8 lg:flex" role="list">
          {NAV_ITEMS.map(item => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm transition-colors duration-200 nav-link font-body text-text-secondary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="items-center hidden gap-3 lg:flex">
          <a
            href="https://github.com/YulTwei93"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 icon-link text-text-secondary"
            aria-label="GitHub Profil von Yuliya Tweitmann"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/yuliya-tweitmann-603a80327"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 icon-link text-text-secondary"
            aria-label="LinkedIn Profil von Yuliya Tweitmann"
          >
            <FiLinkedin size={18} />
          </a>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute p-6 rounded-lg top-20 left-6 right-6 lg:hidden"
            style={{
              background:     'rgba(17, 17, 24, 0.95)',
              backdropFilter: 'var(--glass-blur)',
              border:         '1px solid var(--glass-border)',
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col gap-2 mb-6" role="list">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center py-2 text-lg transition-colors nav-link font-body text-text-primary"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="h-px mb-6" style={{ background: 'var(--glass-border)' }} />

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/YulTwei93"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 text-sm transition-colors icon-link text-text-secondary font-body"
              >
                <FiGithub size={16} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yuliya-tweitmann-603a80327"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 text-sm transition-colors icon-link text-text-secondary font-body"
              >
                <FiLinkedin size={16} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
