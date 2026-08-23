import seal from '../assets/seal.png'
import Gear from './Gear'
import Rune from './Rune'
import './Footer.css'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#activities', label: 'What We Do' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#join', label: 'Join' },
]

const CONTACTS = [
  { label: 'Email', value: 'jpsmexuc@gmail.com', href: 'mailto:jpsmexuc@gmail.com' },
  { label: 'University email', value: 'jpsme@xu.edu.ph', href: 'mailto:jpsme@xu.edu.ph' },
  { label: 'Helpdesk', value: 'studentservices.jpsme@gmail.com', href: 'mailto:studentservices.jpsme@gmail.com' },
  { label: 'Facebook', value: 'facebook.com/jpsmexu', href: 'https://www.facebook.com/jpsmexu' },
  { label: 'Instagram', value: '@jpsmexuc', href: 'https://www.instagram.com/jpsmexuc' },
]

function Footer() {
  return (
    <footer className="footer">
      <Gear className="footer__watermark" size={420} duration={140} />
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={seal} alt="" className="footer__seal" />
          <p className="footer__name">
            JPSME<span className="footer__name-accent">-XUC</span>
          </p>
          <p className="footer__tagline">
            <Rune variant="core" size={13} />
            Mechanical Heart.
          </p>
          <p className="footer__full">
            Junior Philippine Society of Mechanical Engineers, Xavier University
            Chapter.
          </p>
        </div>

        <nav className="footer__col" aria-label="Footer">
          <h3>Sections</h3>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__col">
          <h3>Contact</h3>
          {CONTACTS.map((contact) => (
            <div key={contact.label} className="footer__contact">
              <span className="footer__contact-label">{contact.label}</span>
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>
            © {new Date().getFullYear()} JPSME-XUC. All rights reserved.
          </span>
          <span>
           John Pacaldo
          </span>
          <span>Xavier University, Cagayan de Oro City</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer