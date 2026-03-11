import '../styles/Bento.css'

const cardData = [
  {
    label: null,
    title: null,
    description: <>Gutes Design endet für mich nicht beim Aussehen, sondern bei der Funktion.<br />Deshalb verbinde ich visuelles Design mit Frontend-Entwicklung und setze Gestaltung in funktionierenden Code um.</>
  },
  {
    label: '<umschulung />',
    title: 'Mediengestalterin Digital & Print',
    description: 'Seit August 2024 bilde ich mich bei cbm Bremen zur Mediengestalterin Digital & Print mit Schwerpunkt Frontend-Web weiter. Ich lerne, wie aus Konzepten und Prototypen in Figma technisch saubere, responsive Anwendungen entstehen – von der ersten Idee bis zum fertigen Code. Geplanter Abschluss: Sommer 2027.'
  },
  {
    label: '<persönliches />',
    title: 'Aus Bremen',
    description: 'Geboren 1993 in Dobrich, Bulgarien. Zuhause in Bremen. Meine internationale Biografie hilft mir, mich schnell in neue Umgebungen und Teams einzufinden. Neugier, Struktur und Lernbereitschaft prägen meine Arbeit, egal ob im Design oder im Code.'
  },
  {
    label: '<skills />',
    title: 'Design & Code',
    description: 'Im Frontend arbeite ich mit HTML, CSS, JavaScript, React und Tailwind CSS. Ich lerne aktiv weiter und setze mein Wissen in kleinen Projekten und Prototypen direkt ein. Im Design nutze ich Figma für UI-Design und Prototypen sowie Photoshop, Illustrator und InDesign für digitale und Print-Medien. Mein Ziel: konsistente Designsysteme, die sich sauber in Code abbilden lassen.'
  },
  {
    label: '<sprachen />',
    title: 'Mehrsprachig',
    description: 'Deutsch ist meine Muttersprache, Englisch beherrsche ich gut. Außerdem habe ich Grundkenntnisse in Bulgarisch und Türkisch.'
  },
  {
    label: '<berufserfahrung />',
    title: 'Serviceangestellte',
    description: '2020–2024: Serviceangestellte bei Admiral Spielhalle/Casino Royal GmbH in Bremen – strukturiertes, serviceorientiertes Arbeiten im direkten Kundenkontakt.'
  }
]

const MagicBento = () => {
  const [, ...cards] = cardData

  return (
    <div className="bento-section">

      {/* Statement – außerhalb des Grids, mit pinken // */}
      <div className="flex gap-3 mb-8">
        <span
          className="flex-shrink-0 font-bold leading-tight font-display"
          style={{ color: 'var(--color-pink)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
          aria-hidden="true"
        >
          //
        </span>
        <p
          className="leading-relaxed font-body"
          style={{ color: 'var(--color-text-secondary)', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
        >
          Gutes Design endet für mich nicht beim Aussehen, sondern bei der Funktion.
          Deshalb entwickle ich im Rahmen meiner Umschulung Fähigkeiten im Frontend
          und lerne, Gestaltung technisch umzusetzen. Ich möchte verstehen, wie aus
          Konzepten funktionierende Anwendungen werden, und daran mitarbeiten.
        </p>
      </div>

      {/* Grid */}
      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={card.label} className="magic-bento-card">

            <div className="magic-bento-card__header">
              <div className="magic-bento-card__label">{card.label}</div>
              <div className="magic-bento-card__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>

            <div className="magic-bento-card__content">
              {card.title && (
                <h3 className="magic-bento-card__title">{card.title}</h3>
              )}
              <p className="magic-bento-card__description">{card.description}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default MagicBento