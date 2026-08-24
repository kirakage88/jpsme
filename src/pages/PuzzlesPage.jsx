import { Link } from 'react-router-dom'
import Rune from '../components/Rune'
import Tangram from '../components/Tangram'
import './PuzzlesPage.css'

function PuzzlesPage() {
  return (
    <>
      <header className="puzzles-hero">
        <div className="container">
          <Link to="/" className="puzzles-hero__back">
            Back to the main site
          </Link>
          <p className="puzzles-hero__kicker">
            <Rune variant="trine" size={14} />
            The Tour Attraction
          </p>
          <h1>Tangram Puzzle Wheel</h1>
          <p className="puzzles-hero__sub">
            Spin for one of twelve challenges, race the clock, and check your solution beside
            your attempt.
          </p>
        </div>
      </header>
      <main tabIndex={-1}>
        <Tangram />
      </main>
    </>
  )
}

export default PuzzlesPage