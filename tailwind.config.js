/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* Farben über CSS-Variablen – zentral in index.css definiert */
      colors: {
        'dark':           'var(--color-dark)',
        'dark-2':         'var(--color-dark-2)',
        'dark-3':         'var(--color-dark-3)',
        'cyan':           'var(--color-cyan)',
        'pink':           'var(--color-pink)',
        'text-primary':   'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
      },
      /* Fonts */
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'body':    ['Inter', 'sans-serif'],
      },
      /* Gradient */
      backgroundImage: {
        'gradient-brand': 'var(--gradient-brand)',
      },
      /* Einheitliche Border-Radius Werte – immer über diese Namen */
      borderRadius: {
        'sm':   'var(--radius-sm)',   /* 8px  – Tags, Badges */
        'md':   'var(--radius-md)',   /* 12px – Buttons, Inputs, Cards */
        'lg':   'var(--radius-lg)',   /* 16px – Modals, große Cards */
        'full': 'var(--radius-full)', /* Kreis – Profilbild, Dots */
      },
      /* Section Spacing */
      spacing: {
        'section': 'var(--section-py)',
      },
    },
  },
  plugins: [],
}