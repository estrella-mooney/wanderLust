// import Hikes from './Hikes'
import { Container } from '@mui/material'
import Hikes from './Hikes'
import Nav from './Nav'
import ParallaxHero from './HeroOne'
import Birds from './Birds'
// import Navbar from './Navbar'
import Navbar from './navScroll'
import About from './About'

function App() {
  return (
    <>
      <ParallaxHero />
      <About />
      {/* <ParallaxHero /> */}
      {/* <header className="header-text"> */}
      {/* <Container maxWidth="sm"> */}
      {/* <Nav /> */}
      <Navbar />
      {/* </header> */}
      <div className="movie-container">
        <Hikes />
      </div>
      <section className="main">{/* add your code here */}</section>
      {/* </Container> */}
    </>
  )
}

export default App
