// import Hikes from './Hikes'
import { Container } from '@mui/material'
import Hikes from './Hikes'
import Nav from './Nav'
import ParallaxHero from './HeroOne'
function App() {
  return (
    <>
      <ParallaxHero />
      {/* <header className="header-text"> */}
      {/* <Container maxWidth="sm"> */}
      <Nav />
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
