import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const CONTACT_ITEMS = [
  {
    icon: FiMail,
    href: 'mailto:yuliya@tweitmann.com',
    label: 'yuliya@tweitmann.com',
  },
  {
    icon: FiGithub,
    href: 'https://github.com/YulTwei93',
    label: 'github.com/YulTwei93',
    external: true,
  },
  {
    icon: FiLinkedin,
    href: 'https://linkedin.com/in/yuliya-tweitmann-603a80327',
    label: 'linkedin.com/in/yuliya-tweitmann',
    external: true,
  },
]

const inputStyle = {
  background: 'var(--glass-bg)',
  border: '1px solid var(--glass-border)',
}

export default function Contact() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus]     = useState('idle')

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="relative py-24">
      <div className="w-full max-w-6xl px-6 mx-auto">

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-xs tracking-widest uppercase text-text-secondary font-body">
            Schreib mir
          </p>
          <h2 className="font-bold font-display text-text-primary">
            Kontakt <span className="text-gradient">aufnehmen</span>
          </h2>
        </motion.div>

        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p
              className="mb-10 text-base leading-relaxed font-body text-text-secondary"
              style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}
            >
              Du möchtest mehr über meine Arbeit erfahren oder hast eine
              Möglichkeit für ein Praktikum im Bereich Frontend oder Design?
              Schreib mir, ich freue mich über deine Nachricht!
            </p>

            <div className="flex flex-col gap-4">
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-3 transition-colors text-text-secondary hover:text-cyan group"
                >
                  <div className="icon-box">
                    <item.icon size={16} color="var(--color-cyan)" />
                  </div>
                  <span className="text-sm font-body">{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs tracking-widest uppercase font-body text-text-secondary">
                  Name
                </label>
                <input
                  autoComplete="name"
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Dein Name"
                  className="w-full px-4 py-3 text-sm transition-all rounded-md outline-none font-body text-text-primary placeholder-text-secondary"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.5)'}
                  onBlur={e  => e.target.style.borderColor = 'var(--glass-border)'}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs tracking-widest uppercase font-body text-text-secondary">
                  E-Mail
                </label>
                <input
                  autoComplete="email"
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="deine@email.de"
                  className="w-full px-4 py-3 text-sm transition-all rounded-md outline-none font-body text-text-primary placeholder-text-secondary"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.5)'}
                  onBlur={e  => e.target.style.borderColor = 'var(--glass-border)'}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs tracking-widest uppercase font-body text-text-secondary">
                  Nachricht
                </label>
                <textarea
                  autoComplete="off"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Deine Nachricht..."
                  rows={6}
                  className="w-full px-4 py-3 text-sm transition-all rounded-md outline-none resize-none font-body text-text-primary placeholder-text-secondary"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.5)'}
                  onBlur={e  => e.target.style.borderColor = 'var(--glass-border)'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex items-center justify-center gap-2 px-8 py-3 font-medium transition-opacity rounded-md font-body"
                style={{
                  background: 'var(--color-cyan)',
                  color:      'var(--color-dark)',
                  opacity:    status === 'sending' ? 0.7 : 1,
                }}
              >
                <FiSend size={14} />
                {status === 'sending' ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>

              {status === 'success' && (
                <p className="text-sm text-center font-body" style={{ color: 'var(--color-cyan)' }}>
                  ✓ Nachricht erfolgreich gesendet!
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-center font-body" style={{ color: 'var(--color-pink)' }}>
                  ✗ Etwas ist schiefgelaufen. Bitte versuche es erneut.
                </p>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
