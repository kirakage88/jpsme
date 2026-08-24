import { useEffect, useState } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PuzzlesPage from './pages/PuzzlesPage'

function getInitialTheme() {
  const stored = localStorage.getItem('jpsme-theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function SkipLink() {
  return (
    <button
      type="button"
      className="skip-link"
      onClick={() => {
        const main = document.querySelector('main')
        if (main) {
          main.setAttribute('tabindex', '-1')
          main.focus({ preventScroll: true })
          main.scrollIntoView()
        }
      }}
    >
      Skip to content
    </button>
  )
}

/* Scrolls to the home section named in ?s=, otherwise to the top, on route change. */
function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/' && location.search) {
      const target = new URLSearchParams(location.search).get('s')
      const el = target ? document.getElementById(target) : null
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location])

  return null
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('jpsme-theme', theme)
  }, [theme])

  return (
    <HashRouter>
      <SkipLink />
      <ScrollManager />
      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/puzzles" element={<PuzzlesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App