import { useCallback, useEffect, useState } from 'react'
import { CaretLeftIcon, CaretRightIcon, XIcon } from '@phosphor-icons/react'
import img1 from '../assets/images/img (1).jpg'
import img2 from '../assets/images/img (2).jpg'
import img3 from '../assets/images/img (3).jpg'
import img4 from '../assets/images/img (4).jpg'
import img5 from '../assets/images/img (5).jpg'
import img6 from '../assets/images/img (6).jpg'
import img7 from '../assets/images/img (7).jpg'
import img8 from '../assets/images/img (8).jpg'
import img9 from '../assets/images/img (9).jpg'
import './Gallery.css'

const PHOTOS = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

/* Span pattern fills a 4-column grid evenly: 4+1+1+2+1+1+2+2+2 = 16 cells. */
const SPANS = ['big', 'single', 'single', 'wide', 'single', 'single', 'wide', 'wide', 'wide']

function Gallery() {
  const [active, setActive] = useState(null)

  const close = useCallback(() => setActive(null), [])
  const step = useCallback((dir) => setActive((i) => (i + dir + PHOTOS.length) % PHOTOS.length), [])

  useEffect(() => {
    if (active === null) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, step])

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Org life, in photos</h2>
          <p className="section-sub">Events, competitions, and everything in between.</p>
        </div>

        <div className="gallery__grid">
          {PHOTOS.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`gallery__item gallery__item--${SPANS[i]}`}
              onClick={() => setActive(i)}
              aria-label={`Open photo ${i + 1} of ${PHOTOS.length}`}
            >
              <img src={src} alt={`JPSME-XUC event photo ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
        >
          <button type="button" className="lightbox__close" aria-label="Close" onClick={close}>
            <XIcon size={20} />
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
          >
            <CaretLeftIcon size={22} />
          </button>

          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={PHOTOS[active]} alt={`JPSME-XUC event photo ${active + 1}`} />
          </figure>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
          >
            <CaretRightIcon size={22} />
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery