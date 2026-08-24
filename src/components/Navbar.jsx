import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ListIcon, MoonIcon, SunIcon } from '@phosphor-icons/react'
import logo from '../assets/logo.png'
import './Navbar.css'

const LINKS = [
  { to: '/?s=about', label: 'About' },
  { to: '/?s=activities', label: 'What We Do' },
  { to: '/?s=gallery', label: 'Gallery' },
  { to: '/?s=join', label: 'Join' },
]

function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled || pathname !== '/' ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link className="nav__brand" to="/" onClick={() => setOpen(false)}>
          <img src={logo} alt="JPSME-XUC logo" className="nav__logo" />
          <span className="nav__name">
            JPSME<span className="nav__name-accent">-XUC</span>
          </span>
        </Link>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`} aria-label="Primary">
          {LINKS.map((link) => {
            const active = pathname === '/puzzles' && link.to === '/puzzles'
            return (
              <Link
                key={link.to}
                to={link.to}
                className={active ? 'nav__link--active' : ''}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="nav__controls">
          <button
            type="button"
            className="nav__toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <MoonIcon size={17} /> : <SunIcon size={17} />}
          </button>
          <button
            type="button"
            className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <ListIcon size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar