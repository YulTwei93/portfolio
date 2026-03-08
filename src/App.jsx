import { lazy, Suspense } from 'react'
import Aurora from './components/Aurora'
import Navbar from './components/Navbar'
import Hero   from './components/Hero'

const Projects = lazy(() => import('./components/Projects'))
const About    = lazy(() => import('./components/About'))
const Contact  = lazy(() => import('./components/Contact'))
const Footer   = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="relative min-h-screen bg-dark">

      {/* Aurora Hintergrund */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={['#00d4ff', '#0a0a0f', '#ff006e']}
          blend={0.2}
          amplitude={0.3}
          speed={0.2}
        />
      </div>

      {/* Inhalt */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={null}>
            <Projects />
            <About />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>

    </div>
  )
}

export default App