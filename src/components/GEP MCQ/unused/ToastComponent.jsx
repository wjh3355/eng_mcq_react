import { Container, Toast, ToastContainer } from "react-bootstrap";
import { useAppContext } from "./AllContext";
import { useEffect, useState } from "react";

export default function ToastComponent() {
   const { isCorrect } = useAppContext();

   const [showCorrectToast, setShowCorrectToast] = useState(false);
   const [showWrongToast, setShowWrongToast] = useState(false);

   useEffect(() => {
      if (isCorrect === true) {
         setShowCorrectToast(true);
      } else if (isCorrect === false) {
         setShowWrongToast(true);
      } else if (isCorrect === null) {
         setShowCorrectToast(false);
         setShowWrongToast(false);
      }
   }, [isCorrect])

   return (
      // <Container className="d-flex justify-content-center mt-3">
         <ToastContainer position="top-center">

            <Toast 
               show={showCorrectToast} 
               onClose={() => setShowCorrectToast(false)}
               bg={'success'}
            >
               <Toast.Header>
                  <strong className="me-auto">Correct answer!</strong>
               </Toast.Header>
               <Toast.Body className="text-white">
                  Well done.
               </Toast.Body>
            </Toast>

            <Toast 
               show={showWrongToast} 
               onClose={() => setShowWrongToast(false)}
               bg={'danger'}
            >
               <Toast.Header>
                  <strong className="me-auto">Wrong answer!</strong>
               </Toast.Header>
               <Toast.Body className="text-white">
                  Please review and try again next time.
               </Toast.Body>
            </Toast>

         </ToastContainer>
      // </Container>

   );
}