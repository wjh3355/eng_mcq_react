import { Button, Card, Col, Collapse, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";

import SentenceParaElement from "./SentenceParaElement";
import ExplanationElement from "./ExplanationElement";
import ReviewElement from "./ReviewElement";

import { useAppContext } from "../AllContext";

export default function SentenceCol() {

   const { handleNextQnBtnClick, isNextQnBtnDisabled, isExplBtnDisabled } = useAppContext();

   const [isExplShown, setIsExplShown] = useState(false);
   const [isReviewShown, setIsReviewShown] = useState(false);

   useEffect(() => {
      isExplBtnDisabled && setIsExplShown(false);
   }, [isExplBtnDisabled])

   return (
      <Col lg={8}>
         <Card body className="mb-3">
            <SentenceParaElement />
         </Card>

         <div className="d-flex gap-3 mb-2">
            <Button
               variant="primary"
               style={{ flex: 1 }}
               disabled={isExplBtnDisabled}
               onClick={() => setIsExplShown(!isExplShown)}
               aria-controls="collapse-text"
               aria-expanded={isExplShown}
            >
               {isExplShown ? "Hide Explanation" : "Show Explanation"}
            </Button>

            <Button
               variant="outline-secondary"
               style={{ flex: 1 }}
               onClick={() => setIsReviewShown(!isReviewShown)}
            >
               Review
            </Button>

            <Button
               variant="success"
               style={{ flex: 1 }}
               onClick={handleNextQnBtnClick}
               disabled={isNextQnBtnDisabled}
            >
               Next Question
            </Button>
         </div>

         <Collapse in={isExplShown}>
            <div>{!isExplBtnDisabled && <ExplanationElement />}</div>
         </Collapse>

         <Modal
            show={isReviewShown}
            onHide={() => setIsReviewShown(!isReviewShown)}
            size="lg"
            centered
         >
            <Modal.Header closeButton>
               <Modal.Title>Review of incorrect answers</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <ReviewElement />
            </Modal.Body>
         </Modal>
      </Col>
   );
}
