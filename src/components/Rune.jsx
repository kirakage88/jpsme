/* Original hextech sigils. Abstract geometric marks, not derived from any franchise art. */
const RUNES = {
  spire: (
    <>
      <path d="M12 3 19 12 12 21 5 12Z" />
      <path d="M12 3v18" />
      <path d="M8.5 12h7" />
    </>
  ),
  trine: <path d="M5 8.5 12 4.5l7 4M5 13.5 12 9.5l7 4M5 18.5 12 14.5l7 4" />,
  core: (
    <>
      <path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9L12 3Z" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
}

function Rune({ variant = 'spire', size = 18, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`rune ${className}`}
      aria-hidden="true"
    >
      {RUNES[variant] ?? RUNES.spire}
    </svg>
  )
}

export default Rune