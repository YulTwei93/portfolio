import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function LegalModal({ isOpen, onClose, type }) {
  // Scrollen verhindern wenn Modal offen
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC-Taste schließt Modal
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const content = type === "impressum" ? <Impressum /> : <Datenschutz />;
  const title = type === "impressum" ? "Impressum" : "Datenschutzerklärung";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50"
            style={{
              background: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(8px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-2xl p-8"
              style={{
                background: "#111118",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {/* Header */}
              <div
                className="sticky top-0 flex items-center justify-between pb-4 mb-8"
                style={{
                  background: "#111118",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h2 className="text-2xl font-bold font-display text-text-primary">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="flex items-center justify-center w-8 h-8 transition-colors rounded-lg text-text-secondary hover:text-cyan"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <FiX size={16} />
                </button>
              </div>

              {/* Inhalt */}
              <div className="text-sm leading-relaxed font-body text-text-secondary">
                {content}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ── Impressum Inhalt ──
function Impressum() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-1 font-medium text-text-primary">
          Yuliya Shtereva Tweitmann
        </p>
        <p>Sankt-Gallener-Straße 59</p>
        <p>28325 Bremen</p>
      </div>

      <div>
        <h3 className="mb-2 font-semibold text-text-primary font-display">
          Kontakt
        </h3>
        <p>Telefon: +49 (0) 163 736 5805</p>
        <p>
          E-Mail:{" "}
          <a
            href="mailto:yuliya@tweitmann.com"
            className="text-cyan hover:underline"
          >
            yuliya@tweitmann.com
          </a>
        </p>
      </div>

      <div>
        <h3 className="mb-2 font-semibold text-text-primary font-display">
          Redaktionell verantwortlich
        </h3>
        <p>Yuliya Tweitmann</p>
        <p>St.-Gallener-Str. 59</p>
        <p>28325 Bremen</p>
      </div>

      <p className="mt-4 text-xs text-text-secondary">
        Quelle:{" "}
        <a
          href="https://www.e-recht24.de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan hover:underline"
        >
          eRecht24
        </a>
      </p>
    </div>
  );
}

// ── Datenschutz Inhalt ──
function Datenschutz() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-2 font-semibold text-text-primary font-display">
          1. Datenschutz auf einen Blick
        </h3>
        <p className="mb-1 font-semibold text-text-primary">
          Allgemeine Hinweise
        </p>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können.
        </p>
      </div>

      <div>
        <p className="mb-1 font-semibold text-text-primary">
          Datenerfassung auf dieser Website
        </p>
        <p className="mb-2">
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Ihre Daten werden zum einen dadurch erhoben, dass
          Sie uns diese mitteilen, z. B. über das Kontaktformular. Andere Daten
          werden automatisch beim Besuch der Website erfasst (technische Daten
          wie Browser, Betriebssystem, Uhrzeit des Seitenaufrufs).
        </p>
      </div>

      <div>
        <h3 className="mb-2 font-semibold text-text-primary font-display">
          2. Hosting
        </h3>
        <p className="mb-1 font-semibold text-text-primary">All-Inkl</p>
        <p>
          Anbieter ist die ALL-INKL.COM – Neue Medien Münnich, Inh. René
          Münnich, Hauptstraße 68, 02742 Friedersdorf. Details entnehmen Sie der{" "}
          <a
            href="https://all-inkl.com/datenschutzinformationen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan hover:underline"
          >
            Datenschutzerklärung von All-Inkl
          </a>
          .
        </p>
      </div>

      <div>
        <h3 className="mb-2 font-semibold text-text-primary font-display">
          3. Hinweis zur verantwortlichen Stelle
        </h3>
        <p className="mb-1">Yuliya Tweitmann</p>
        <p className="mb-1">Telefon: 0163 736 580 5</p>
        <p>
          E-Mail:{" "}
          <a
            href="mailto:yuliya@tweitmann.com"
            className="text-cyan hover:underline"
          >
            yuliya@tweitmann.com
          </a>
        </p>
      </div>

      <div>
        <h3 className="mb-2 font-semibold text-text-primary font-display">
          4. Datenerfassung auf dieser Website
        </h3>
        <p className="mb-1 font-semibold text-text-primary">Kontaktformular</p>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen angegebenen
          Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese
          Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
      </div>

      <p className="mt-4 text-xs text-text-secondary">
        Quelle:{" "}
        <a
          href="https://www.e-recht24.de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan hover:underline"
        >
          eRecht24
        </a>
      </p>
    </div>
  );
}
