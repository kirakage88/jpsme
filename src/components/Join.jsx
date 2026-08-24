import { ArrowRightIcon, FacebookLogoIcon, InstagramLogoIcon } from '@phosphor-icons/react'
import Rune from './Rune'
import Reveal from './Reveal'
import qrCode from '../assets/qr_code.jpg'
import './Join.css'

const SOCIALS = [
  {
    label: 'Facebook',
    value: 'facebook.com/jpsmexu',
    href: 'https://www.facebook.com/jpsmexu',
    icon: FacebookLogoIcon,
  },
  {
    label: 'Instagram',
    value: '@jpsmexuc',
    href: 'https://www.instagram.com/jpsmexuc',
    icon: InstagramLogoIcon,
  },
]

const EMAILS = [
  { label: 'Official email', address: 'jpsmexuc@gmail.com' },
  { label: 'University email', address: 'jpsme@xu.edu.ph' },
  { label: 'Student services helpdesk', address: 'studentservices.jpsme@gmail.com' },
]

function Join() {
  return (
    <section id="join" className="section join">
      <div className="container join__inner">
<div className="join__content">
          <Reveal className="section-head">
            <h2 className="section-title">Join JPSME-XUC</h2>
            <p className="section-sub">
              Open to every Mechanical Engineering student of Xavier University. Message us on any
              channel below and we will walk you through it.
            </p>
          </Reveal>

          <Reveal className="join__socials" delay={120}>
            {SOCIALS.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="join__social"
                >
                  <Icon size={24} weight="duotone" />
                  <span className="join__social-text">
                    <strong>{social.label}</strong>
                    <small>{social.value}</small>
                  </span>
                </a>
              )
            })}
          </Reveal>

          <Reveal as="ul" className="join__emails" delay={200}>
            {EMAILS.map((email) => (
              <li key={email.address}>
                <span className="join__email-label">{email.label}</span>
                <a href={`mailto:${email.address}`}>{email.address}</a>
              </li>
            ))}
          </Reveal>

          <Reveal delay={260}>
            <a href="mailto:jpsmexuc@gmail.com" className="btn btn--bronze join__cta">
              <Rune variant="spire" size={15} />
              Email the org
              <ArrowRightIcon size={16} weight="bold" />
            </a>
          </Reveal>
        </div>

        <Reveal as="figure" className="join__qr plate" from="right" delay={140}>
          <img src={qrCode} alt="QR code that links to the JPSME-XUC website" />
          <figcaption>Scan to open this site on your phone.</figcaption>
        </Reveal>
      </div>
    </section>
  )
}

export default Join