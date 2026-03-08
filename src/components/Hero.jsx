import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import profileImg from '../assets/images/profile.webp'
import Logo from '../assets/icons/yuliya-tweitmann.svg'
import LogoLoop from './LogoLoop'
import {
  SiHtml5, SiCss3, SiJavascript, SiReact,
  SiTailwindcss, SiFigma, SiAdobephotoshop,
  SiAdobeillustrator, SiAdobeindesign,
} from 'react-icons/si'

const TITLES = ['Frontend Entwicklerin', 'Mediengestalterin', 'In Ausbildung']

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed,  setDisplayed]  = useState('')
  const [deleting,   setDeleting]   = useState(false)

  // Tippmaschinen-Logik
  useEffect(() => {
    const current = TITLES[titleIndex]

    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      return () => clearTimeout(t)
    }
    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTitleIndex((titleIndex + 1) % TITLES.length)
    }
  }, [displayed, deleting, titleIndex])

  return (
    <section id="hero" className="relative flex items-center min-h-screen overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl px-6 py-24 mx-auto">

        {/* Zweispaltiges Layout */}
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row">

          {/* ── LINKE SPALTE: Text ── */}
          <div className="flex-1 text-left">

            <motion.p
              className="mb-4 text-sm tracking-widest uppercase text-text-secondary font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Moin! Ich bin
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <img src={Logo} alt="Yuliya Tweitmann" className="w-auto h-16 md:h-20" />
            </motion.div>

            <motion.div
              className="mb-6 text-xl font-display md:text-2xl text-text-secondary h-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span>{displayed}</span>
              <span className="animate-pulse text-cyan">|</span>
            </motion.div>

            <motion.p
              className="max-w-lg mb-10 text-base font-body text-text-secondary md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Ich gestalte und entwickle moderne, zugängliche Websites.
              Mit Design-Feeling und Liebe zum sauberen Code.
            </motion.p>

            <motion.div
              className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/*
                btn-solid + btn-outline → CSS-Klassen aus index.css
                Desktop: hover-Farbe wechselt
                Mobile:  :active → scale(0.97) + opacity
                whileTap → Framer Motion Tap-Feedback zusätzlich
              */}
              <motion.a
                href="#projekte"
                className="px-8 py-3 font-medium text-center btn-solid rounded-xl font-body"
                style={{ background: '#00d4ff', color: '#0a0a0f' }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.1 }}
              >
                Projekte ansehen
              </motion.a>

              <motion.a
                href="#kontakt"
                className="px-8 py-3 font-medium text-center border btn-outline rounded-xl font-body border-cyan text-cyan"
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.1 }}
              >
                Kontakt aufnehmen
              </motion.a>
            </motion.div>
          </div>

          {/* ── RECHTE SPALTE: Profilbild ── */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full opacity-25 pointer-events-none -scale-125 bg-gradient-brand blur-3xl" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[30rem] lg:h-[30rem]">
                <div className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-br from-cyan/20 to-purple/20 blur-xl" />
                <img
                  src={profileImg}
                  alt="Yuliya Tweitmann – Portrait"
                  className="object-cover w-full h-full border-4 rounded-full shadow-2xl border-cyan/50"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Logo Loop ── */}
        <motion.div
          className="mt-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 1 }}
        >
          <p className="mb-4 text-xs tracking-widest uppercase font-body text-text-secondary">
            Mein Stack
          </p>
          <LogoLoop
            logos={[
              { node: <SiHtml5 color="#E34F26" />,            title: 'HTML5' },
              { node: <SiCss3 color="#1572B6" />,             title: 'CSS3' },
              { node: <SiJavascript color="#F7DF1E" />,       title: 'JavaScript' },
              { node: <SiReact color="#61DAFB" />,            title: 'React' },
              { node: <SiTailwindcss color="#06B6D4" />,      title: 'Tailwind CSS' },
              { node: <SiFigma color="#F24E1E" />,            title: 'Figma' },
              { node: <SiAdobephotoshop color="#31A8FF" />,   title: 'Photoshop' },
              { node: <SiAdobeillustrator color="#FF9A00" />, title: 'Illustrator' },
              { node: <SiAdobeindesign color="#FF3366" />,    title: 'InDesign' },
            ]}
            speed={80}
            direction="left"
            logoHeight={32}
            gap={48}
            pauseOnHover
            fadeOut
            fadeOutColor="#0a0a0f"
            ariaLabel="Mein Tech Stack"
          />
        </motion.div>

      </div>
    </section>
  )
}