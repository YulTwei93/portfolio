import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import profileImg from '../assets/images/profile.webp'
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
    <section id="hero" className="relative flex items-center min-h-screen overflow-hidden" style={{ paddingBlock: 'var(--section-py)' }} aria-label="Einführung und Überblick über Yuliya Tweitmann">
      <div className="relative z-10 w-full max-w-6xl px-6 mx-auto ">

        <div className="flex flex-col-reverse items-center gap-8 pt-16 lg:flex-row lg:pt-0 lg:gap-12">

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
              className="mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="font-bold leading-tight font-display text-text-primary"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                Yuliya <span className="text-text-primary">Tweitmann</span>
              </h1>
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
              className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
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

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full opacity-25 pointer-events-none -scale-125 bg-gradient-brand blur-3xl" />
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-[30rem] xl:h-[30rem]">
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
                { node: <span role="img" aria-label="HTML5"><SiHtml5 color="#E34F26" aria-hidden="true" /></span>,            title: 'HTML5' },
                { node: <span role="img" aria-label="CSS3"><SiCss3 color="#1572B6" aria-hidden="true" /></span>,             title: 'CSS3' },
                { node: <span role="img" aria-label="JavaScript"><SiJavascript color="#F7DF1E" aria-hidden="true" /></span>, title: 'JavaScript' },
                { node: <span role="img" aria-label="React"><SiReact color="#61DAFB" aria-hidden="true" /></span>,           title: 'React' },
                { node: <span role="img" aria-label="Tailwind CSS"><SiTailwindcss color="#06B6D4" aria-hidden="true" /></span>, title: 'Tailwind CSS' },
                { node: <span role="img" aria-label="Figma"><SiFigma color="#F24E1E" aria-hidden="true" /></span>,           title: 'Figma' },
                { node: <span role="img" aria-label="Adobe Photoshop"><SiAdobephotoshop color="#31A8FF" aria-hidden="true" /></span>,   title: 'Photoshop' },
                { node: <span role="img" aria-label="Adobe Illustrator"><SiAdobeillustrator color="#FF9A00" aria-hidden="true" /></span>, title: 'Illustrator' },
                { node: <span role="img" aria-label="Adobe InDesign"><SiAdobeindesign color="#FF3366" aria-hidden="true" /></span>,    title: 'InDesign' },
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