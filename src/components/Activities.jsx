import {
  BookOpenIcon,
  FactoryIcon,
  GearSixIcon,
  HandHeartIcon,
  ShieldCheckIcon,
  TrophyIcon,
} from '@phosphor-icons/react'
import Reveal from './Reveal'
import './Activities.css'

const ACTIVITIES = [
  {
    title: 'Academic Assistance',
    text: 'Tutoring, review sessions, and shared resources for every ME course, from statics to machine design.',
    icon: BookOpenIcon,
    variant: 'featured',
  },
  {
    title: 'Leadership Development',
    text: 'Org roles, competitions, and research work that build character.',
    icon: ShieldCheckIcon,
    variant: 'navy',
  },
  {
    title: 'Industry Exposure',
    text: 'Plant visits and company engagements with practicing engineers.',
    icon: FactoryIcon,
    variant: 'default',
  },
  {
    title: 'Workshops and Training',
    text: 'Hands-on CAD, design, and engineering-tool sessions.',
    icon: GearSixIcon,
    variant: 'default',
  },
  {
    title: 'Competitions',
    text: 'Regional quiz bowls and CAD contests, where XU ME consistently shows up.',
    icon: TrophyIcon,
    variant: 'gold',
  },
  {
    title: 'Community and Outreach',
    text: 'A welcoming home for every ME student, plus service beyond the campus.',
    icon: HandHeartIcon,
    variant: 'wide',
  },
]

function Activities() {
  return (
    <section id="activities" className="section activities">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">What the org actually does</h2>
          <p className="section-sub">
            Six working areas, one goal: ME students who leave XU sharper than they arrived.
          </p>
        </Reveal>

        <div className="activities__grid">
          {ACTIVITIES.map((activity, i) => {
            const Icon = activity.icon
            return (
              <Reveal
                key={activity.title}
                className={`activities__card--${activity.variant}`}
                delay={(i % 3) * 90}
              >
                <article className="activities__card">
                  <Icon size={30} weight="duotone" className="activities__icon" />
                  <h3>{activity.title}</h3>
                  <p>{activity.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Activities