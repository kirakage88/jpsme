import { useEffect, useRef } from 'react'

/* Scroll-reveal wrapper: fades/slides content in once it enters the viewport.
   Uses IntersectionObserver (no scroll listeners), collapses to static under
   prefers-reduced-motion, and never re-hides after revealing. */
function Reveal({ as: Tag = 'div', className = '', delay = 0, from = 'up', children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('reveal--visible')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('reveal--visible')
            io.unobserve(el)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${from} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

export default Reveal