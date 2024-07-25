import { createContext, useState, useEffect, useContext } from "react";
import { Container, Spinner } from "react-bootstrap";
import { shuffle } from "d3-array";

const jsonSource = "https://gist.githubusercontent.com/wjh3355/85ea89c3330149e56c71002dc8b1aad2/raw/846ecf602d0e51fb8bd3c28f7e2020748d6501d0/source.json";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export function AppProvider({ children }) {
   const [qnObjArray, setQnObjArray] = useState(null);
   const [qnNum, setQnNum] = useState(0);
   const [qnObj, setQnObj] = useState(null);

   const [isNextQnBtnDisabled, setIsNextQnBtnDisabled] = useState(true);
   const [isExplBtnDisabled, setIsExplBtnDisabled] = useState(true);

   useEffect(() => {
      fetch(jsonSource)
         .then((response) => response.json())
         .then((data) => {
            setQnObjArray(shuffle([...data]));
            console.log("Questions fetched successfully");
         })
         .catch((error) =>
            console.log("Error when fetching questions!", error)
         );
   }, []);

   useEffect(() => {
      qnObjArray && setQnObj(qnObjArray[qnNum]);
   }, [qnNum, qnObjArray]);
   // if qnObjArray is not null, set qnObj to its first entry

   useEffect(() => {
      qnObj && console.log("Now displaying Q" + qnObj.qnNum);
   }, [qnObj]);
   // log current question no. to console

   function handleOptionClick() {
      setIsNextQnBtnDisabled(false);
      setIsExplBtnDisabled(false);
      console.log("Answer received");
   }

   function handleNextQnBtnClick() {
      if (qnNum === qnObjArray.length - 1) {
         setQnNum(0);
         // loop back to 0 once all qns displayed
      } else {
         setQnNum((prevQnNum) => prevQnNum + 1);
      }
      setIsNextQnBtnDisabled(true);
      setIsExplBtnDisabled(true);
      console.log("Displaying next question, Q" + qnObj.qnNum);
   }

   return (
      <AppContext.Provider 
         value={{
            qnObj,
            handleOptionClick,
            isExplBtnDisabled,
            isNextQnBtnDisabled,
            handleNextQnBtnClick
         }}
      >
         {qnObj ? children : <DisplayLoading />}
      </AppContext.Provider>
   );
}

function DisplayLoading() {
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
}
