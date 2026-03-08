import '../styles/bento.css'

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
  return (
    <div className="card-grid bento-section">
      {cardData.map((card, index) => (
        <div key={card.label ?? 'intro'} className="magic-bento-card">

          {/* Header */}
          <div className="magic-bento-card__header">
            <div className="magic-bento-card__label">{card.label}</div>
            {index > 0 && (
              <div className="magic-bento-card__number">
                {String(index).padStart(2, '0')}
              </div>
            )}
          </div>

          {/* Inhalt */}
          <div className="magic-bento-card__content">
            {card.title && (
              <h3 className="magic-bento-card__title">{card.title}</h3>
            )}
            <p className="magic-bento-card__description">{card.description}</p>
          </div>

        </div>
      ))}
    </div>
  )
}

export default MagicBento