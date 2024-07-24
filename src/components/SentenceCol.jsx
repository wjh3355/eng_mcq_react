import { Button, Card, Col, Collapse } from "react-bootstrap";
import { useEffect, useState } from "react";
import SentenceParaElement from "./SentenceParaElement";
import ExplanationElement from "./ExplanationElement";

export default function SentenceCol({
   handleNextQnBtnClick,
   isNextQnBtnDisabled,
   isExplBtnDisabled,
   qnObj
}) {
   let { sentence, wordToTest, rootWord, type, def } = qnObj;

   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      isExplBtnDisabled && setIsOpen(false);
      // some ppl may still see the explanation when it closes (bug?)
   }, [isExplBtnDisabled])

   return (
      <Col lg={8}>

         <Card className="mb-3">
            <Card.Body>
               <SentenceParaElement
                  sentence={sentence}
                  wordToTest={wordToTest}
               />
            </Card.Body>
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
               <ExplanationElement
                  rootWord={rootWord}
                  type={type}
                  def={def}
               />
            </div>
         </Collapse>

      </Col>
   );
}
