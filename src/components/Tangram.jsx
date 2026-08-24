import { useEffect, useRef, useState } from 'react'
import { GearSixIcon } from '@phosphor-icons/react'
import PUZZLES from '../data/puzzles'
import Gear from './Gear'
import Reveal from './Reveal'
import './Tangram.css'

const SECTOR = 360 / PUZZLES.length

function formatTime(total) {
  const mins = Math.floor(total / 60)
  const secs = total % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

function Tangram() {
  const [rotation, setRotation] = useState(0)
  const [spinning, setSpinning] = useState(false)
  const [selected, setSelected] = useState(null)
  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(false)
  const landingRef = useRef(null)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setElapsed((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [running])

  const selectPuzzle = (index) => {
    setSpinning(false)
    setRunning(false)
    setElapsed(0)
    setSelected(PUZZLES[index])
  }

  const spin = () => {
    if (spinning) return
    const target = Math.floor(Math.random() * PUZZLES.length)
    landingRef.current = target
    setSpinning(true)
    setRunning(false)
    setElapsed(0)
    setSelected(null)
    const currentMod = ((rotation % 360) + 360) % 360
    const targetMod = target * SECTOR + SECTOR / 2
    const delta = 360 * 6 + ((targetMod - currentMod + 360) % 360)
    setRotation(rotation + delta)
  }

  const onWheelEnd = (e) => {
    if (e.propertyName !== 'transform') return
    if (landingRef.current !== null) {
      selectPuzzle(landingRef.current)
      landingRef.current = null
    }
  }

  return (
    <section id="puzzles" className="section tangram schematic">
      <div className="container">
        <div className="tangram__stage">
          <Reveal className="tangram__wheelzone">
            <div
              className="tangram__wheel"
              aria-busy={spinning}
              style={{ transform: `rotate(${rotation}deg)` }}
              onTransitionEnd={onWheelEnd}
            >
              {PUZZLES.map((puzzle, i) => (
                <button
                  key={puzzle.id}
                  type="button"
                  className="tangram__sector"
                  style={{ '--r': `${i * SECTOR}deg` }}
                  onClick={() => selectPuzzle(i)}
                  disabled={spinning}
                  aria-label={`Select tangram puzzle ${i + 1}, ${puzzle.name}`}
                >
                  {i + 1}
                </button>
              ))}
              <div className="tangram__hub" aria-hidden="true">
                <Gear size={30} reverse className="tangram__hub-gear" />
              </div>
            </div>

            <div className="tangram__pointer" aria-hidden="true">
              <svg viewBox="0 0 24 16" width="26" height="17">
                <path d="M12 0 24 16H0Z" fill="var(--gold)" stroke="var(--navy)" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>

            <button type="button" className="btn btn--bronze tangram__spin" onClick={spin} disabled={spinning}>
              <GearSixIcon size={17} weight="duotone" />
              {spinning ? 'Spinning...' : 'Spin the wheel'}
            </button>
          </Reveal>

          {selected ? (
            <div className="tangram__display" key={selected.id}>
              <p className="sr-only" role="status">
                Showing puzzle {selected.id}, {selected.name}
              </p>

              <div className="tangram__title">
                <span className="tangram__num">Puzzle {String(selected.id).padStart(2, '0')}</span>
                <h3>{selected.name}</h3>
              </div>

              <div className="tangram__cards">
                <figure className="tangram__card plate">
                  <img src={selected.puzzleImage} alt={`Tangram puzzle ${selected.id}, ${selected.name}`} />
                  <figcaption>Puzzle</figcaption>
                </figure>
                <figure className="tangram__card plate">
                  <img src={selected.solutionImage} alt={`Solution for tangram puzzle ${selected.id}`} />
                  <figcaption>Solution</figcaption>
                </figure>
              </div>

              <div className="tangram__timer">
                <span className="tangram__timer-label">Solve time</span>
                <output className="tangram__timer-value">{formatTime(elapsed)}</output>
                <div className="tangram__timer-actions">
                  <button
                    type="button"
                    className="btn btn--gold tangram__btn"
                    onClick={() => setRunning(true)}
                    disabled={running}
                  >
                    Start
                  </button>
                  <button
                    type="button"
                    className="btn btn--gold tangram__btn"
                    onClick={() => setRunning(false)}
                    disabled={!running}
                  >
                    Stop
                  </button>
                  <button
                    type="button"
                    className="btn tangram__btn tangram__btn--plain"
                    onClick={() => {
                      setRunning(false)
                      setElapsed(0)
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>

              {!running && elapsed > 0 && (
                <p className="sr-only" role="status">
                  Stopped at {formatTime(elapsed)}
                </p>
              )}

              <p className="tangram__note">
                Placeholder artwork for now. The final puzzle set will drop into the same files.
              </p>
            </div>
          ) : (
            <Reveal className="tangram__empty" delay={120}>
              <Gear size={56} duration={26} className="tangram__empty-gear" />
              <h3>Ready when you are</h3>
              <p>
                Spin the wheel for a random puzzle or tap a numbered slot. The puzzle and its
                solution will appear side by side, and the timer starts on your cue.
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}

export default Tangram