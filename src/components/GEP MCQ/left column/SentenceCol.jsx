import { Button, Card, Col, Collapse } from "react-bootstrap";
import { useEffect, useState } from "react";

import SentenceParaElement from "./SentenceParaElement";
import ExplanationElement from "./ExplanationElement";

import { useAppContext } from "../AllContext";

export default function SentenceCol() {

   const { handleNextQnBtnClick, isNextQnBtnDisabled, isExplBtnDisabled } = useAppContext();

   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      isExplBtnDisabled && setIsOpen(false);
      // some ppl may still see the explanation when it closes (bug?)
   }, [isExplBtnDisabled])

   return (
      <Col lg={8}>

         <Card body className="mb-3">
            <SentenceParaElement/>
         </Card>

         <div className="d-flex gap-3 mb-2">

            <Button
               variant="primary"
               className="w-50"
               disabled={isExplBtnDisabled}
               onClick={() => setIsOpen(!isOpen)}
               aria-controls="collapse-text"
               aria-expanded={isOpen}
            >
               {isOpen ? 'Hide Explanation' : 'Show Explanation'}
            </Button>

            <Button
               variant="success"
               className="w-50"
               onClick={handleNextQnBtnClick}
               disabled={isNextQnBtnDisabled}
            >
               Next Question
            </Button>

         </div>

         <Collapse in={isOpen}>
            <div>
               {!isExplBtnDisabled && <ExplanationElement/>}
            </div>
         </Collapse>

      </Col>
   );
}
