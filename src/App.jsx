import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Activities from './components/Activities'
import Gallery from './components/Gallery'
import Join from './components/Join'
import Footer from './components/Footer'
import CogDivider from './components/CogDivider'

function getInitialTheme() {
  const stored = localStorage.getItem('jpsme-theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('jpsme-theme', theme)
  }, [theme])

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))} />
      <main>
        <Hero />
        <About />
        <CogDivider />
        <Activities />
        <CogDivider />
        <Gallery />
        <Join />
      </main>
      <Footer />
    </>
  )
}

export default App