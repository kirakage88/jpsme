import { useEffect, useState } from 'react'
import { ListIcon, MoonIcon, SunIcon } from '@phosphor-icons/react'
import logo from '../assets/logo.png'
import './Navbar.css'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#activities', label: 'What We Do' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#join', label: 'Join' },
]

function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
          <img src={logo} alt="JPSME-XUC logo" className="nav__logo" />
          <span className="nav__name">
            JPSME<span className="nav__name-accent">-XUC</span>
          </span>
        </a>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`} aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
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