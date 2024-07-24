import { Container, Row, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";

import SentenceCol from "./SentenceCol";
import QuizOptionsCol from "./QuizOptionsCol";

const jsonSource = 'https://gist.githubusercontent.com/wjh3355/85ea89c3330149e56c71002dc8b1aad2/raw/846ecf602d0e51fb8bd3c28f7e2020748d6501d0/source.json';

export default function Body() {

   let [qnObjArray, setQnObjArray] = useState(null);
   let [qnNum, setQnNum] = useState(0);
   let [qnObj, setQnObj] = useState(null);
   let [isNextQnBtnDisabled, setIsNextQnBtnDisabled] = useState(true);
   let [isExplBtnDisabled, setIsExplBtnDisabled] = useState(true);
   
   useEffect(() => {
      fetch(jsonSource)
         .then(response => response.json())
         .then(data => {
            setQnObjArray(data);
            console.log('Questions fetched successfully');
         })
         .catch(error => console.log("Error when fetching questions!", error))
   }, []);

   useEffect(() => {
      qnObjArray && setQnObj(qnObjArray[qnNum]);
   }, [qnNum, qnObjArray]);

   useEffect(() => {
      qnObj && console.log('Now displaying Q' + qnObj.qnNum);
   }, [qnObj]);

   function handleNextQnBtnClick() {
      if (qnNum === qnObjArray.length - 1) {
         setQnNum(prevQnNum => 0);
      } else {
         setQnNum(prevQnNum => prevQnNum + 1);
      }
      setIsNextQnBtnDisabled(true);
      setIsExplBtnDisabled(true);
      console.log('Changing question');
   }

   function handleAnswer() {
      setIsNextQnBtnDisabled(false);
      setIsExplBtnDisabled(false);
   }

   if (!qnObj) {
      return (
         <Container className="mt-3">
            <div className="d-flex justify-content-center">
               <h3>Loading...</h3>
            </div>
            <div className="d-flex justify-content-center mt-3">
               <Spinner animation="border" variant="dark">
                  <span className="visually-hidden">Loading...</span>
               </Spinner>
            </div>
         </Container>
      );
   } else {
      return (
         <Container className="mt-3">
            <Row>
               <SentenceCol
                  qnObj={qnObj}
                  handleNextQnBtnClick = {handleNextQnBtnClick}
                  isNextQnBtnDisabled = {isNextQnBtnDisabled}
                  isExplBtnDisabled = {isExplBtnDisabled}
                  
               />
               <QuizOptionsCol 
                  qnObj={qnObj}
                  handleAnswer={handleAnswer}
               />
            </Row>
         </Container>
      );
   };
}
