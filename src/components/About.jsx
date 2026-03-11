import { motion } from 'framer-motion'
import MagicBento from './MagicBento'

export default function About() {
  return (
    <section id="ueber-mich" className="relative" style={{ paddingBlock: 'var(--section-py)' }} aria-labelledby="about-heading">
      <div className="w-full max-w-6xl px-6 mx-auto">

        <motion.div
          className="flex items-end justify-between mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="mb-2 text-xs tracking-widest uppercase text-text-secondary font-body">
              Lern mich kennen
            </p>
            <h2 id="about-heading" className="text-4xl font-bold font-display md:text-5xl text-text-primary">
              Über <span className="text-gradient">mich</span>
            </h2>
          </div>

          <a
            href="/lebenslauf_yuliya-tweitmann.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-cyan text-cyan hover:bg-cyan hover:text-dark transition-colors"
            aria-label="Lebenslauf von Yuliya Tweitmann als PDF herunterladen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Lebenslauf herunterladen
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MagicBento />
        </motion.div>

      </div>
    </section>
  )
}
