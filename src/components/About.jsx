import Reveal from './Reveal'
import './About.css'

const VALUES = [
  {
    title: 'Academic Excellence',
    text: 'Focused academic assistance so every member can keep up and stand out in ME coursework.',
  },
  {
    title: 'Student Welfare',
    text: 'A welcoming space where students feel at ease while they grow.',
  },
  {
    title: 'Technical Skill',
    text: 'Hands-on training that turns theory into working engineering ability.',
  },
  {
    title: 'Connection',
    text: 'Real bonds with peers, alumni, and industry, inside and outside the campus.',
  },
]

const ACHIEVEMENTS = [
  { place: 'Champion', event: 'Regional CAD Contest (Fusion Category)' },
  { place: '1st Runner-Up', event: '3rd PSME Mindanao Regional Students\u2019 Conference, Overall' },
  { place: '2nd Runner-Up', event: 'Regional CAD Contest (Inventor Category)' },
  { place: '8th Place', event: 'Regional Quiz Bowl' },
  { place: 'Top 7', event: 'MEKAN-ECO, XU Shell Eco-Marathon Team, Asia-Pacific and Middle East 2025' },
  { place: 'Valedictorian', event: 'Jecris II D. Nalual, 87th Commencement Class of Xavier University' },
]

const EXECUTIVE_BOARD = [
  { name: 'Jerald', role: 'President' },
  { name: 'Adelia', role: 'Vice President, External' },
  { name: 'Jay', role: 'Vice President, Internal' },
]

const OFFICERS = [
  { name: 'Stephanie', role: 'Secretary' },
  { name: 'Erick', role: 'Treasurer' },
  { name: 'Trisha Ann', role: 'Auditor' },
  { name: 'Shane', role: 'Budget and Finance' },
  { name: 'Karl', role: 'DNSA' },
  { name: 'TJ', role: 'Logistics' },
  { name: 'Shine', role: 'Events Assoc.' },
  { name: 'John', role: 'FITREC' },
  { name: 'LK', role: 'External PRO' },
  { name: 'Bryne', role: 'Documentations' },
  { name: 'Simon', role: '4th Year Rep' },
  { name: 'James', role: 'DACA' },
  { name: 'Job', role: 'ORCI' },
  { name: 'Ford', role: 'Logistics Assoc.' },
  { name: 'Abdul', role: 'DACA Assoc.' },
]

function About() {
  return (
    <section id="about" className="section about schematic">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">A home for XU mechanical engineers</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__main">
            <p className="about__mission">
              JPSME-XUC is the official governing student organization of Mechanical Engineering
              students at Xavier University, Mindanao. It serves the ME community through academic
              assistance, student welfare, and connections inside and outside the campus.
            </p>

            <blockquote className="about__vision">
              <span className="about__vision-label">Vision</span>
              To be the leading student organization in Mindanao: one that develops mechanical
              engineering students, their character, and the future of the field.
            </blockquote>
          </Reveal>

          <Reveal className="about__values" delay={140}>
            {VALUES.map((value) => (
              <div key={value.title} className="about__value">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="about__record">
          <Reveal className="about__block-label">Track record</Reveal>
          <ul className="about__achievements">
            {ACHIEVEMENTS.map((item, i) => (
              <Reveal key={item.event} as="li" delay={i * 70}>
                <span className="about__place">{item.place}</span>
                <span className="about__event">{item.event}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="about__leadership">
          <Reveal className="about__block-label">Executive Board</Reveal>
          <div className="about__board">
            {EXECUTIVE_BOARD.map((member, i) => (
              <Reveal key={member.name} delay={i * 90}>
                <div className="about__member">
                  <span className="about__member-name">{member.name}</span>
                  <span className="about__member-role">{member.role}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="about__block-label">Committee heads and officers</Reveal>
          <Reveal className="about__officers" delay={100}>
            {OFFICERS.map((officer) => (
              <span key={officer.name} className="about__chip">
                <strong>{officer.name}</strong>
                <small>{officer.role}</small>
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About