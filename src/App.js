
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoIMG from "./image/profile.png";
function App() {
  const firstName='med'
  const lastName='Ahmed'
  return (
  <>
      
       <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <img src={LogoIMG}  alt='Will Smith' />
        <p>
          {firstName} {lastName}
        </p>
      </div>
      <p> fullname is {firstName + ' '+lastName} </p>

   
   
   
  
    </> 
  )
}

export default App