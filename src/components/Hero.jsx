import seal from '../assets/seal.png'
import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__kicker">Junior Philippine Society of Mechanical Engineers, Xavier University Chapter</p>
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
            <a href="#join" className="btn btn--gold">
              Join JPSME
            </a>
            <a href="#about" className="btn btn--ghost">
              Meet the org
            </a>
          </div>
        </div>

        <figure className="hero__artifact plate">
          <img src={seal} alt="Official seal of JPSME-XUC" />
          <figcaption className="hero__artifact-caption">Official seal, JPSME-XUC</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Hero