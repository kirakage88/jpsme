function Gear({ size = 64, className = '', duration = 80, reverse = false }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`gear ${className}`}
      style={{
        '--gear-duration': `${duration}s`,
        '--gear-direction': reverse ? 'reverse' : 'normal',
      }}
      aria-hidden="true"
    >
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="none"
        stroke="currentColor"
        strokeWidth="15"
        strokeDasharray="7.96 11.94"
      />
      <circle cx="50" cy="50" r="29" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="3.5" fill="currentColor" />
    </svg>
  )
}

export default Gear