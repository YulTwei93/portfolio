import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiMonitor, FiLayout, FiPrinter,
  FiX, FiGithub, FiExternalLink,
  FiChevronLeft, FiChevronRight
} from 'react-icons/fi'
import { SiFigma } from 'react-icons/si'

// ── Bild-Imports ──────────────────────────────────────────────

import kiefernwegCover from '../assets/images/projekte/kiefernweg/kiefernweg-cover.webp'
import kiefernweg1     from '../assets/images/projekte/kiefernweg/01_kiefernweg-desktop.webp'
import kiefernweg2     from '../assets/images/projekte/kiefernweg/02_kiefernweg-tablet.webp'
import kiefernweg3     from '../assets/images/projekte/kiefernweg/03_kiefernweg-mobile.webp'

import urbanveloCover from '../assets/images/projekte/urban-velo/urban-velo-cover.webp'
import urbanvelo1     from '../assets/images/projekte/urban-velo/01_urban-velo-desktop.webp'
import urbanvelo2     from '../assets/images/projekte/urban-velo/02_urban-velo-tablet.webp'
import urbanvelo3     from '../assets/images/projekte/urban-velo/03_urban-velo-mobile.webp'

import botaniqCover from '../assets/images/projekte/botaniq/botaniq_home-cover.webp'
import botaniq1     from '../assets/images/projekte/botaniq/01_botaniq_home.webp'
import botaniq2     from '../assets/images/projekte/botaniq/02_botaniq_geschichte.webp'
import botaniq3     from '../assets/images/projekte/botaniq/03_botaniq_angebote.webp'
import botaniq4     from '../assets/images/projekte/botaniq/04_botaniq_gutscheine.webp'
import botaniq5     from '../assets/images/projekte/botaniq/04_botaniq_gutschein-interface.webp'
import botaniq6     from '../assets/images/projekte/botaniq/05_botaniq_events.webp'
import botaniq7     from '../assets/images/projekte/botaniq/06_botaniq_news.webp'
import botaniq8     from '../assets/images/projekte/botaniq/07_botaniq_entdecken.webp'

import uiDesign1Cover from '../assets/images/projekte/ui-design/ui-design-1-cover.webp'
import uiDesign2Cover from '../assets/images/projekte/ui-design/ui-design-2-cover.webp'
import uiDesign2      from '../assets/images/projekte/ui-design/01_visionbau-desktop.webp'
import uiDesign3      from '../assets/images/projekte/ui-design/02_visionbau-tablet.webp'
import uiDesign4      from '../assets/images/projekte/ui-design/03_visionbau-mobile.webp'

import nordlichtCover       from '../assets/images/projekte/visitenkarte/visitenkarte_nordlicht-design.webp'
import eispalastCover       from '../assets/images/projekte/flyer/flyer_eispalast.webp'
import kulturkanalCover     from '../assets/images/projekte/flyer/flyer_kultur-kanal.webp'
import superhandwerkerCover from '../assets/images/projekte/formulare/formular_superhandwerker-cover.webp'
import superhandwerker01    from '../assets/images/projekte/formulare/01_formular_superhandwerker.webp'
import superhandwerker02    from '../assets/images/projekte/formulare/02_formular_superhandwerker.webp'

// ── Video-Imports ─────────────────────────────────────────────

import uiDesign1Video from '../assets/videos/ui-design-1.mp4'

// ── Konstanten ────────────────────────────────────────────────

const CARD_WIDTH    = 300
const CARD_HEIGHT   = 280
const IMG_HEIGHT    = 160
const CARD_GAP      = 16
const SCROLL_AMOUNT = CARD_WIDTH + CARD_GAP

// ── Projektdaten ──────────────────────────────────────────────

const CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend Entwicklung',
    icon: FiMonitor,
    projects: [
      {
        id: 'kiefernweg',
        title: 'Grundschule Kiefernweg',
        description: `Prüfungssimulation. Planung, Gestaltung und Umsetzung einer responsiven Website für eine fiktive Grundschule. Entwickelt nach Mobile-First-Prinzip mit Fokus auf Barrierefreiheit (WCAG 2.1 AA), modernem Design und technischer Tiefe.

Die Website umfasst mehrere Sektionen: Startseite, Schulvorstellung, Elternverein mit QR-Code-Anmeldefunktion sowie eine interaktive SVG-Anfahrtskarte mit klickbaren Markern und dynamischen Popups.

Besondere Highlights: Touch-Slider, rotierender Circular-Text-Effekt und vollständig tastatur- und screenreader-zugängliche Navigation.`,
        tech: ['HTML', 'CSS', 'JavaScript', 'React'],
        github: 'https://github.com/YulTwei93/grundschule-kiefernweg',
        live: null,
        figma: null,
        cover: kiefernwegCover,
        images: [
          { src: kiefernweg1, caption: 'Desktop-Ansicht' },
          { src: kiefernweg2, caption: 'Tablet-Ansicht' },
          { src: kiefernweg3, caption: 'Mobile-Ansicht' },
        ],
        video: null,
      },
      {
        id: 'urbanvelo',
        title: 'Urban Velo',
        description: `Abschlussprüfungsprojekt (ZFA, Sommer 2022). Konzeption, Gestaltung und technische Umsetzung einer responsiven Multi-Page-Website für einen fiktiven Fahrrad-Fachbetrieb. Da es sich um eine reale Prüfungsarbeit handelt, wurden Firmenname, Texte, Bilder und Logo für die Veröffentlichung angepasst.

Entwickelt nach Mobile-First-Prinzip mit Fokus auf Progressive Enhancement: Die gesamte Website funktioniert vollständig ohne JavaScript. Das Hamburger-Menü, die CSS-Endlosschleifen-Slideshow und die Bildergalerie sind reine CSS-Lösungen. JavaScript wird ausschließlich als optionale Touch-Swipe-Erweiterung eingesetzt.

Jeder der vier Geschäftsbereiche erhält eine eigene Akzentfarbe für klare visuelle Orientierung. Alle Piktogramme wurden selbst in Adobe Illustrator im Outline-Stil erstellt. Lighthouse: 87 % Leistung · 96 % Barrierefreiheit · 100 % Best Practices · 100 % SEO.`,
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/YulTwei93/urban-velo',
        live: null,
        figma: null,
        cover: urbanveloCover,
        images: [
          { src: urbanvelo1, caption: 'Desktop-Ansicht' },
          { src: urbanvelo2, caption: 'Tablet-Ansicht' },
          { src: urbanvelo3, caption: 'Mobile-Ansicht' },
        ],
        video: null,
      },
      {
        id: 'botaniq',
        title: 'Botaniq',
        description: `Abschlussprüfungsprojekt (ZFA, Sommer 2025). Konzeption, Gestaltung und technische Umsetzung einer Web-App für digitale Tablet-Infopoints eines fiktiven Gartencenters. Da es sich um eine reale Prüfungsarbeit handelt, wurden Firmenname, Texte, Bilder und Logo für die Veröffentlichung angepasst.

Umgesetzt als Single-Page-Application für die fixe Auflösung 1366×1024 px (Tablet Landscape), bewusst ohne Scrolling, für intuitive Touch-Bedienung an stationären Infopoints. Das Glassmorphism-Design mit animierten Hintergrund-Blobs und halbtransparenten Elementen richtet sich an eine jüngere Zielgruppe.

Herzstück ist ein interaktiver 4-Schritte-Gutscheingenerator: Motivauswahl, Empfängername, Betrag und Käuferdaten werden clientseitig verarbeitet und als personalisiertes PDF (DIN A6, via jsPDF + Canvas API) direkt im Browser generiert. Kein Server erforderlich.`,
        tech: ['HTML', 'CSS', 'JavaScript', 'jsPDF'],
        github: 'https://github.com/YulTwei93/botaniq',
        live: null,
        figma: null,
        cover: botaniqCover,
        images: [
          { src: botaniq1, caption: 'Startseite' },
          { src: botaniq2, caption: 'Unsere Geschichte' },
          { src: botaniq3, caption: 'Aktuelle Angebote' },
          { src: botaniq4, caption: 'Gutscheine' },
          { src: botaniq5, caption: 'Gutschein erstellen' },
          { src: botaniq6, caption: 'Workshops & Events' },
          { src: botaniq7, caption: 'News & Inspiration' },
          { src: botaniq8, caption: 'Botaniq entdecken' },
        ],
        video: null,
      },
    ],
  },
  {
    id: 'ui',
    label: 'UI Design',
    icon: FiLayout,
    projects: [
      {
        id: 'ui-1',
        title: 'UI Design – Loading Animation',
        description: `Selbstinitiiertes Übungsprojekt – inspiriert durch ein Tutorial-Video, eigenständig in Figma nachgebaut und weiterentwickelt.

Acht Komponenten-Zustände werden über aufeinanderfolgende „After Delay"-Verbindungen (je 1 ms) aneinandergereiht. Der letzte Zustand verweist zurück auf den ersten – so entsteht ein nahtloser, endloser Loop ohne externe Tools oder Code.`,
        tech: ['Figma', 'Components', 'Prototyping'],
        github: null,
        live: null,
        figma: null,
        cover: uiDesign1Cover,
        images: [],
        video: uiDesign1Video,
      },
      {
        id: 'ui-2',
        title: 'UI Design – Visionbau',
        description: `Schulprojekt. UI Design für ein fiktives Architekturbüro, das moderne Wohn- und Bürogebäude realisiert.

Der Prozess startete mit intensiver Recherche und Moodboard-Erstellung, um die richtige visuelle Sprache zu finden: klare geometrische Strukturen, großzügige Weißräume und eine neutrale Farbpalette mit gezielten Akzenten. Typisch für moderne Architektur-Websites.

Umgesetzt in Figma mit konsequentem Auto Layout für saubere, skalierbare Komponenten und interaktivem Prototyping für die Navigation.`,
        tech: ['Figma', 'Auto Layout', 'Prototyping'],
        github: null,
        live: null,
        figma: null,
        cover: uiDesign2Cover,
        images: [
          { src: uiDesign2, caption: 'Desktop-Ansicht' },
          { src: uiDesign3, caption: 'Tablet-Ansicht' },
          { src: uiDesign4, caption: 'Mobile-Ansicht' },
        ],
        video: null,
      },
    ],
  },
  {
    id: 'print',
    label: 'Print & Medien',
    icon: FiPrinter,
    projects: [
      {
        id: 'visitenkarte-nordlicht',
        title: 'Visitenkarte nordlicht.design',
        description: `Schulprojekt. Visitenkarten-Design für das fiktive Design-Studio nordlicht.design mit dem Claim „Gestaltung, die hängenbleibt".

Nach ausführlicher Recherche zur Markenwelt entstand ein minimalistisches zweiseitiges Design: Die Vorderseite kombiniert ein reduziertes Monogramm-Logo mit geometrischen Kreiselementen und einem hellen Blaugrau als Hintergrund. Die Rückseite führt das Konzept mit einem Avatar-Element und klarer Kontaktstruktur fort. Als Akzentfarbe zieht sich ein nordisches Teal durch beide Seiten.

Umgesetzt in Adobe InDesign mit Fokus auf typografischer Hierarchie und druckgerechter Aufbereitung.`,
        tech: ['InDesign'],
        github: null,
        live: null,
        figma: null,
        cover: nordlichtCover,
        images: [{ src: nordlichtCover, caption: 'Visitenkarte nordlicht.design' }],
        video: null,
      },
      {
        id: 'flyer-eispalast',
        title: 'Flyer Eispalast',
        description: `Schulprojekt. Flyer-Design für eine fiktive Eisdiele mit integrierter Kundenstempelkarte.

Besondere Herausforderung war die Perforationslösung: Die Stempelkarte ist als heraustrennbares Element konzipiert, wobei die gegenüberliegende Seite so layoutet werden musste, dass beim Herausreißen kein wichtiger Inhalt verloren geht – eine knifflige Aufgabe im Bereich Druckvorstufe und Layoutplanung.

Alle zentralen Gestaltungselemente sind selbst erstellte Vektorgrafiken in Adobe Illustrator: Das markante Logo wurde gezielt umgearbeitet – die zackige Form zu runden Eiskugeln, der charakteristische Drip als eigenständiges Vektorelement. Die verspielt-pastellige Farbwelt unterstreicht den sommerlichen Charakter des Designs.`,
        tech: ['InDesign', 'Illustrator'],
        github: null,
        live: null,
        figma: null,
        cover: eispalastCover,
        images: [{ src: eispalastCover, caption: 'Flyer Eispalast' }],
        video: null,
      },
      {
        id: 'flyer-kulturkanal',
        title: 'Flyer Kultur am Kanal',
        description: `Schulprojekt. Flyer-Design für eine fiktive Kulturveranstaltung am Kanal.

Schwerpunkt des Projekts war der Umgang mit Tabellen in Adobe InDesign, etwa für Programm- und Zeitpläne der Veranstaltung. Da ich persönlich eher zu reduzierten Designs tendiere, habe ich mich bewusst für eine farbenfrohe Gestaltung entschieden – als Übung außerhalb meiner gestalterischen Komfortzone.

Erstellt mit Adobe InDesign für Layout und Tabellen, Adobe Illustrator für Vektorelemente.`,
        tech: ['InDesign', 'Illustrator'],
        github: null,
        live: null,
        figma: null,
        cover: kulturkanalCover,
        images: [{ src: kulturkanalCover, caption: 'Flyer Kultur am Kanal' }],
        video: null,
      },
      {
        id: 'formular-superhandwerker',
        title: 'Formular Der Superhandwerker',
        description: `Schulprojekt. Interaktives Anmeldeformular für einen fiktiven Handwerkswettbewerb der Handwerkskammer.

Schwerpunkt war die Erstellung eines druckfähigen InDesign-Dokuments, das für die spätere Interaktivität in Adobe Acrobat vorbereitet wurde – mit Formularfeldern, Dropdown-Menüs, Checkboxen und Upload-Bereich.

Weil mir eine Version nicht gereicht hat, entstanden zwei gegensätzliche Interpretationen desselben Inhalts: eine klassisch-sachliche Variante in Schwarz-Weiß mit klarer Struktur und eine farbenfrohe, lebendige Version mit kräftigem Lila-Gelb-Kontrast und expressiver Typografie. Beide Versionen, ein Formular – zwei völlig unterschiedliche Zielgruppenansprachen.`,
        tech: ['InDesign', 'Acrobat'],
        github: null,
        live: null,
        figma: null,
        cover: superhandwerkerCover,
        images: [
          { src: superhandwerker01, caption: 'Version 1 – Klassisch' },
          { src: superhandwerker02, caption: 'Version 2 – Farbenfroh' },
        ],
        video: null,
      },
    ],
  },
]


// ── Resize Hook ───────────────────────────────────────────────

function useIsWide(breakpoint = 1024) {
  const [isWide, setIsWide] = useState(window.innerWidth > breakpoint)
  useEffect(() => {
    const handler = () => setIsWide(window.innerWidth > breakpoint)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [breakpoint])
  return isWide
}

// ── Video-Player ──────────────────────────────────────────────

function PanelVideo({ src, title }) {
  return (
    <video
      key={src}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      aria-label={`Demo-Video: ${title}`}
      className="object-contain w-full h-full"
    />
  )
}

// ── Zoom-Overlay ──────────────────────────────────────────────

function ZoomOverlay({ src, alt, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(16px)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.img
        src={src}
        alt={alt}
        className="rounded-sm"
        style={{ maxWidth: '95vw', maxHeight: '95vh', objectFit: 'contain' }}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={e => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        aria-label="Zoom schließen"
        className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-sm"
        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}
      >
        <FiX size={18} />
      </button>
    </motion.div>
  )
}

// ── Bildergalerie ─────────────────────────────────────────────

function PanelGallery({ images, title }) {
  const [current, setCurrent] = useState(0)
  const [zoomed,  setZoomed]  = useState(false)
  const isWide = useIsWide()
  const valid  = images.filter(item => item?.src)

  if (valid.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <p className="text-xs tracking-widest uppercase font-body" style={{ color: 'rgba(255,255,255,0.2)' }}>
          Mockup folgt
        </p>
      </div>
    )
  }

  return (
    <>
      <AnimatePresence>
        {zoomed && (
          <ZoomOverlay
            src={valid[current].src}
            alt={valid[current].caption || `${title} – Bild ${current + 1}`}
            onClose={() => setZoomed(false)}
          />
        )}
      </AnimatePresence>

      <div className="relative w-full h-full">

        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={valid[current].src}
            alt={valid[current].caption || `${title} – Bild ${current + 1}`}
            className="object-contain w-full h-full"
            style={{ cursor: 'zoom-in' }}
            onClick={() => setZoomed(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        <div
          className="absolute top-3 left-3 px-2 py-1 text-xs rounded-sm font-body"
          style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', color: 'rgba(255,255,255,0.45)', pointerEvents: 'none' }}
        >
          Klicken zum Vergrößern
        </div>

        {valid.length > 1 && (
          <div
            className="absolute top-3 right-3 px-2 py-1 text-xs rounded-sm font-body"
            style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', color: 'rgba(255,255,255,0.6)' }}
          >
            {current + 1} / {valid.length}
          </div>
        )}

        {valid.length > 1 && (
          <>
            <button
              onClick={() => setCurrent(c => (c - 1 + valid.length) % valid.length)}
              aria-label="Vorheriges Bild"
              className="absolute flex items-center justify-center w-10 h-10 rounded-sm"
              style={{
                left:      '12px',
                top:       '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                border:     '1px solid var(--glass-border)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <FiChevronLeft size={18} color="var(--color-text-primary)" />
            </button>
            <button
              onClick={() => setCurrent(c => (c + 1) % valid.length)}
              aria-label="Nächstes Bild"
              className="absolute flex items-center justify-center w-10 h-10 rounded-sm"
              style={{
                right:     '12px',
                top:       '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                border:     '1px solid var(--glass-border)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <FiChevronRight size={18} color="var(--color-text-primary)" />
            </button>
          </>
        )}

        <div
          style={{
            position:      'absolute',
            bottom:        0,
            left:          0,
            right:         0,
            display:       'flex',
            flexDirection: 'column',
            alignItems:    'center',
            gap:           '8px',
            padding:       '40px 16px 12px',
            background:    'linear-gradient(transparent, rgba(0,0,0,0.85))',
            pointerEvents: 'none',
          }}
        >
          {valid[current].caption && (
            <p className="text-sm font-medium font-body" style={{ color: 'rgba(255,255,255,0.9)', margin: 0 }}>
              {valid[current].caption}
            </p>
          )}

          {valid.length > 1 && isWide && (
            <div
              style={{
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                gap:            '6px',
                pointerEvents:  'auto',
                height:         '6px',
                lineHeight:     '0',
              }}
            >
              {valid.map((_, i) => (
                <span
                  key={i}
                  role="button"
                  tabIndex={0}
                  onClick={() => setCurrent(i)}
                  onKeyDown={e => e.key === 'Enter' && setCurrent(i)}
                  aria-label={`Bild ${i + 1} von ${valid.length}`}
                  style={{
                    display:       'inline-block',
                    width:         i === current ? '18px' : '6px',
                    height:        '6px',
                    borderRadius:  '999px',
                    background:    i === current ? 'var(--color-cyan)' : 'rgba(255,255,255,0.4)',
                    cursor:        'pointer',
                    flexShrink:    0,
                    transition:    'width 0.3s ease, background 0.3s ease',
                    verticalAlign: 'middle',
                  }}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </>
  )
}

// ── Vollbild-Modal ────────────────────────────────────────────

function ProjectPanel({ project, onClose }) {
  const isWide = useIsWide()

  return (
    <>
      <motion.div
        className="fixed inset-0 z-40"
        style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(6px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${project.id}`}
        className="fixed z-50 overflow-hidden rounded-lg"
        style={{
          top:           'clamp(0.5rem, 2vw, 3rem)',
          bottom:        'clamp(0.5rem, 2vw, 3rem)',
          left:          'clamp(0.5rem, 2vw, 3rem)',
          right:         'clamp(0.5rem, 2vw, 3rem)',
          background:    'var(--color-dark-2)',
          border:        '1px solid var(--glass-border)',
          boxShadow:     '0 25px 60px rgba(0,0,0,0.6)',
          display:       'flex',
          flexDirection: isWide ? 'row' : 'column',
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      >
        <div
          style={{
            position:   'relative',
            overflow:   'hidden',
            flexShrink: 0,
            width:      isWide ? '50%' : '100%',
            height:     isWide ? '100%' : '50%',
            background: 'radial-gradient(ellipse at center, #1a1a3e 0%, #0d0d1f 50%, #0a0a0f 100%)',
          }}
        >
          {project.video
            ? <PanelVideo src={project.video} title={project.title} />
            : <PanelGallery images={project.images} title={project.title} />
          }
        </div>

        <div
          style={{
            flex:          1,
            display:       'flex',
            flexDirection: 'column',
            overflow:      'hidden',
            minHeight:     0,
            minWidth:      0,
          }}
        >
          <div
            style={{
              display:        'flex',
              alignItems:     'flex-start',
              justifyContent: 'space-between',
              flexShrink:     0,
              padding:        '1.5rem',
              borderBottom:   '1px solid var(--glass-border)',
            }}
          >
            <div>
              <p className="mb-1 text-xs tracking-widest uppercase font-body text-text-secondary">
                {project.tech[0]}
              </p>
              <h2 id={`modal-title-${project.id}`} className="text-2xl font-bold font-display text-text-primary">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Modal schließen"
              style={{
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                flexShrink:     0,
                marginLeft:     '1rem',
                width:          '2.25rem',
                height:         '2.25rem',
                borderRadius:   '0.125rem',
                border:         '1px solid var(--glass-border)',
                background:     'transparent',
                color:          'var(--color-text-secondary)',
                cursor:         'pointer',
              }}
            >
              <FiX size={18} />
            </button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p className="text-sm leading-relaxed font-body text-text-secondary whitespace-pre-line">
              {project.description}
            </p>

            {project.tech.length > 0 && (
              <div>
                <p className="mb-3 text-xs tracking-widest uppercase font-body text-text-secondary">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-sm font-body"
                      style={{
                        background: 'rgba(0,212,255,0.08)',
                        border:     '1px solid rgba(0,212,255,0.25)',
                        color:      'var(--color-cyan)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.75rem', marginTop: 'auto' }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-md font-body"
                  style={{ border: '1px solid var(--color-cyan)', color: 'var(--color-cyan)' }}
                >
                  <FiGithub size={16} />
                  GitHub ansehen
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-md font-body"
                  style={{ background: 'var(--color-cyan)', color: 'var(--color-dark)' }}
                >
                  <FiExternalLink size={16} />
                  Live Demo
                </a>
              )}
              {project.figma && (
                <a
                  href={project.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-md font-body"
                  style={{ border: '1px solid rgba(242,78,30,0.4)', color: '#F24E1E' }}
                >
                  <SiFigma size={16} />
                  Figma öffnen
                </a>
              )}
            </div>
          </div>
        </div>

      </motion.div>
    </>
  )
}

// ── Projektkarte ──────────────────────────────────────────────

function ProjectCard({ project, onClick }) {
  return (
    <motion.button
      onClick={() => onClick(project)}
      className="flex flex-col overflow-hidden text-left rounded-md project-card group"
      style={{
        width:                `${CARD_WIDTH}px`,
        minWidth:             `${CARD_WIDTH}px`,
        height:               `${CARD_HEIGHT}px`,
        flexShrink:           0,
        background:           'var(--glass-bg)',
        backdropFilter:       'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        border:               '1px solid rgba(255,255,255,0.1)',
        boxShadow:            '0 4px 30px rgba(0,0,0,0.3)',
        transition:           'transform 0.2s ease, border-color 0.2s ease',
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.12 }}
    >
      <div
        className="flex-shrink-0 w-full overflow-hidden flex items-center justify-center"
        style={{
          height:     `${IMG_HEIGHT}px`,
          background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 100%)',
        }}
      >
        {project.cover ? (
          <img
            src={project.cover}
            alt={`Vorschau: ${project.title}`}
            className="w-full h-full transition-transform duration-500 group-hover:scale-105"
            style={{ objectFit: 'cover', objectPosition: 'center top', padding: '2px' }}
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-xs tracking-widest uppercase text-white/10 font-body">
              Mockup folgt
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between flex-1 p-4 overflow-hidden">
        <div>
          <h3 className="mb-1 text-sm font-semibold leading-snug transition-colors font-display text-text-primary group-hover:text-cyan">
            {project.title}
          </h3>
          <p
            className="text-xs leading-relaxed font-body text-text-secondary"
            style={{
              display:         '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow:        'hidden',
            }}
          >
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1 mt-2">
          {project.tech.slice(0, 3).map(t => (
            <span
              key={t}
              className="px-1.5 py-0.5 text-xs rounded-sm font-body"
              style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--color-text-secondary)' }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-1.5 py-0.5 text-xs font-body text-text-secondary">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.button>
  )
}

// ── Kategorie-Zeile ───────────────────────────────────────────

function CategoryRow({ category, onCardClick }) {
  const scrollRef = useRef(null)
  const [canScrollLeft,  setCanScrollLeft]  = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  const scrollLeft  = () => scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' })
  const scrollRight = () => scrollRef.current?.scrollBy({ left:  SCROLL_AMOUNT, behavior: 'smooth' })

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-sm"
          style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)' }}
        >
          <category.icon size={14} color="var(--color-cyan)" />
        </div>

        <h3 className="font-semibold font-display text-text-primary whitespace-nowrap">
          {category.label}
        </h3>

        <div className="flex-1 h-px" style={{ background: 'var(--glass-border)' }} />

        <span className="flex-shrink-0 mr-2 text-xs font-body text-text-secondary">
          {category.projects.length} {category.projects.length === 1 ? 'Projekt' : 'Projekte'}
        </span>

        {category.projects.length > 3 && (
          <div className="flex flex-shrink-0 gap-1">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label={`${category.label} – nach links scrollen`}
              className="flex items-center justify-center w-8 h-8 transition-all rounded-sm"
              style={{
                background: 'var(--glass-bg)',
                border:     '1px solid var(--glass-border)',
                opacity:    canScrollLeft ? 1 : 0.3,
                cursor:     canScrollLeft ? 'pointer' : 'default',
              }}
            >
              <FiChevronLeft size={14} color="var(--color-text-primary)" />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              aria-label={`${category.label} – nach rechts scrollen`}
              className="flex items-center justify-center w-8 h-8 transition-all rounded-sm"
              style={{
                background: 'var(--glass-bg)',
                border:     '1px solid var(--glass-border)',
                opacity:    canScrollRight ? 1 : 0.3,
                cursor:     canScrollRight ? 'pointer' : 'default',
              }}
            >
              <FiChevronRight size={14} color="var(--color-text-primary)" />
            </button>
          </div>
        )}
      </div>

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 pb-4 overflow-x-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', paddingTop: '8px' }}
      >
        {category.projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <ProjectCard project={project} onClick={onCardClick} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// ── Hauptkomponente ───────────────────────────────────────────

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projekte" className="relative py-24" aria-labelledby="projects-heading">
      <div className="w-full max-w-6xl px-6 mx-auto">

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-xs tracking-widest uppercase text-text-secondary font-body">
            Meine Arbeiten
          </p>
          <h2 id="projects-heading" className="font-bold font-display text-text-primary">
            Projekte <span className="text-gradient">&</span> Arbeiten
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16">
          {CATEGORIES.map(category => (
            <CategoryRow
              key={category.id}
              category={category}
              onCardClick={setSelectedProject}
            />
          ))}
        </div>

      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectPanel
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
