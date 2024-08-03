import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavigationBar() {

   return (
      <>
         <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>

               <Navbar.Brand as={Link} to="/">
                  English Tutor
               </Navbar.Brand>

               <Navbar.Toggle aria-controls="basic-navbar-nav" />

               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link as={Link} to="/qqq" disabled>
                        About
                     </Nav.Link>

                     <Nav.Link as={Link} to="/gep_mcq">
                        GEP MCQ
                     </Nav.Link>
                  </Nav>

                  <Navbar.Text>
                     Signed in as: <strong>John Doe</strong>
                  </Navbar.Text>

               </Navbar.Collapse>

            </Container>
         </Navbar>
      </>
   );
}
