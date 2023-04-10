// import Hikes from './Hikes'
import { Container } from '@mui/material'
import Hikes from './Hikes'
import Nav from './Nav'
function App() {
  return (
    <>
      {/* <header className="header-text"> */}

      {/* <Container maxWidth="sm"> */}
      <Nav />
      <h1>My Hikes Collection</h1>

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
