import { Container, Navbar, Nav, Modal } from "react-bootstrap";
import { useState } from "react";

import reactLogo from '../react-logo.svg';

export default function Header() {
   const [show, setShow] = useState(false);

   const handleCloseInstr = () => setShow(false);
   const handleShowInstr = () => setShow(true);

   return (
      <>
         <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>

               <Navbar.Brand href="#">
                  <img 
                     src={reactLogo}
                     className="d-inline-block align-top"
                     alt="Logo"
                     width='30'
                     height='30'
                  />
                  &nbsp;&nbsp;GEP English MCQ
               </Navbar.Brand>

               <Navbar.Toggle aria-controls="basic-navbar-nav" />

               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link onClick={handleShowInstr}>Instructions</Nav.Link>
                     <Nav.Link className="disabled">Review</Nav.Link>
                  </Nav>
               </Navbar.Collapse>

            </Container>
         </Navbar>

         <Modal show={show} onHide={handleCloseInstr} centered>
            <Modal.Header closeButton>
               <Modal.Title>Instructions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <p>
                  Select the best <u>synonym</u> to the bolded word(s) in the sentence.<br/><br/>
                  Do not refresh the page, or the score will be reset.
               </p>
            </Modal.Body>
         </Modal>
      </>
   );
}
