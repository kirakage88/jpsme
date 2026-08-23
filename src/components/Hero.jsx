import Rune from './Rune'
import seal from '../assets/seal.png'
import './Hero.css'

function HextechRing({ className }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <circle cx="200" cy="200" r="194" fill="none" stroke="currentColor" strokeOpacity="0.16" strokeWidth="1" />
      <circle
        cx="200"
        cy="200"
        r="182"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="9"
        strokeDasharray="1.5 46.1"
      />
      <circle
        cx="200"
        cy="200"
        r="168"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="1"
        strokeDasharray="4 8"
      />
      <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
      <path
        d="M200 46 a154 154 0 0 1 133.2 77"
        fill="none"
        stroke="var(--steel)"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <path
        d="M200 354 a154 154 0 0 1 -133.2 -77"
        fill="none"
        stroke="var(--steel)"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__kicker">
            <Rune variant="trine" size={14} className="hero__kicker-rune" />
            Junior Philippine Society of Mechanical Engineers, Xavier University Chapter
          </p>
          <h1 className="hero__title">
            Mechanical
            <br />
            <span>Heart</span>
          </h1>
          <p className="hero__sub">
            The official student organization of Mechanical Engineering students at Xavier
            University, Mindanao.
          </p>
          <div className="hero__actions">
            <a href="#join" className="btn btn--bronze">
              Join JPSME
            </a>
            <a href="#about" className="btn btn--ghost">
              Meet the org
            </a>
          </div>
        </div>

        <figure className="hero__artifact">
          <HextechRing className="hero__ring hero__ring--spin" />
          <HextechRing className="hero__ring hero__ring--outer" />
          <div className="hero__plate plate">
            <img src={seal} alt="Official seal of JPSME-XUC" />
            <figcaption className="hero__plate-caption">Official seal, JPSME-XUC</figcaption>
          </div>
        </figure>
      </div>
    </section>
  )
}

export default Hero