import Gear from './Gear'
import './CogDivider.css'

function CogDivider() {
  return (
    <div className="cog-divider" aria-hidden="true">
      <span className="cog-divider__line" />
      <Gear size={30} duration={90} className="cog-divider__gear" />
      <span className="cog-divider__line" />
    </div>
  )
}

export default CogDivider