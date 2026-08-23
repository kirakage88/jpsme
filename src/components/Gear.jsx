import { gearMetrics } from './gearMetrics'

function Gear({ size = 64, teeth = 12, phase = 0, className = '', duration = 80, reverse = false, style }) {
  const m = gearMetrics(teeth)
  return (
    <svg
      viewBox={`${-m.box} ${-m.box} ${m.box * 2} ${m.box * 2}`}
      width={size}
      height={size}
      className={`gear ${className}`}
      style={{
        '--gear-duration': `${duration}s`,
        '--gear-direction': reverse ? 'reverse' : 'normal',
        ...style,
      }}
      aria-hidden="true"
    >
      <circle
        r={m.r}
        fill="none"
        stroke="currentColor"
        strokeWidth={m.toothDepth}
        strokeDasharray={`${m.pitch * 0.45} ${m.pitch * 0.55}`}
        strokeDashoffset={phase * m.pitch}
      />
      <circle r={m.ringR} fill="none" stroke="currentColor" strokeWidth={m.detailSw} />
      <circle r={m.hubR} fill="none" stroke="currentColor" strokeWidth={m.detailSw} />
      <circle r={m.dotR} fill="currentColor" />
    </svg>
  )
}

export default Gear