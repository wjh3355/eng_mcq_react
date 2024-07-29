import { Modal } from "react-bootstrap";
import { useState } from "react";

export default function InstructionsModal() {
   const [showInstr, setShowInstr] = useState(false);
   const handleCloseInstr = () => setShowInstr(false);
   const handleShowInstr = () => setShowInstr(true);

   return (
      <>
         <Modal show={showInstr} onHide={handleCloseInstr} centered>
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


