import Hikes from './Hikes'
import { Container } from '@mui/material'
function App() {
  return (
    <>
      <header className="header-text">
        <Container maxWidth="sm">
          <h1>My Hikes Collection</h1>
        </Container>
      </header>
      <Hikes />
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
