import Hero from '../components/Hero'
import About from '../components/About'
import Activities from '../components/Activities'
import Gallery from '../components/Gallery'
import Join from '../components/Join'
import CogDivider from '../components/CogDivider'

function HomePage() {
  return (
    <main tabIndex={-1}>
      <Hero />
      <About />
      <CogDivider />
      <Activities />
      <CogDivider />
      <Gallery />
      <Join />
    </main>
  )
}

export default HomePage