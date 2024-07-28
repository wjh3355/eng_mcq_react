import { createContext, useState, useEffect, useContext } from "react";
import { Container, Spinner } from "react-bootstrap";
import { shuffle } from "d3-array";

const jsonSource =
   "https://gist.githubusercontent.com/wjh3355/0044ee12436ff44915daf15e45622ef2/raw/be0c6588a1cbc2c6632924a2b97211a0ac41b8f2/source.json";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export function AppProvider({ children }) {
   const [qnObjArr, setQnObjArr] = useState(null);
   const [qnNum, setQnNum] = useState(0);
   const [qnObj, setQnObj] = useState(null);
   const [numQnsAns, setNumQnsAns] = useState(0);
   const [numCorrectAns, setNumCorrectAns] = useState(0);
   const [isNextQnBtnDisabled, setIsNextQnBtnDisabled] = useState(true);
   const [isExplBtnDisabled, setIsExplBtnDisabled] = useState(true);
   const [isCorrect, setIsCorrect] = useState(null);
   const [wrongAnsArr, setWrongAnsArr] = useState([]);

   useEffect(() => {
      fetch(jsonSource)
         .then((response) => response.json())
         .then((data) => {
            const shuffledQnArray = shuffle([...data]);
            const shuffledQnOrder = shuffledQnArray.map((obj) => obj.qnNum);
            setQnObjArr(shuffledQnArray);
            console.log("Questions fetched successfully");
            console.log("Question order:", shuffledQnOrder.join(", "));
            console.log('Total num of qns:', shuffledQnOrder.length);
            // Not necessary
         })
         .catch((error) =>
            console.log("Error when fetching questions!", error)
         );
   }, []);

   useEffect(() => {
      qnObjArr && setQnObj(qnObjArr[qnNum]);
   }, [qnNum, qnObjArr]);
   // if qnObjArr is not null, set qnObj once qnNum changes

   function handleOptionClick(isCorrectOption) {
      setIsNextQnBtnDisabled(false);
      setIsExplBtnDisabled(false);
      setIsCorrect(isCorrectOption);

      console.log("Answer received:", isCorrectOption ? "Correct!" : "Wrong!");
   }

   function handleNextQnBtnClick() {
      setNumQnsAns((prevNum) => prevNum + 1);
      isCorrect
         ? setNumCorrectAns((prevNum) => prevNum + 1)
         : setWrongAnsArr((prevArr) => [...prevArr, qnObj]);
      // before we update isCorrect back to null, increment numCorrectAns if it is true, if not add the qnObj to wrongQnsArr

      setIsNextQnBtnDisabled(true);
      setIsExplBtnDisabled(true);
      setIsCorrect(null);
      // reset states

      if (qnNum === qnObjArr.length - 1) {
         setQnNum(0);
         // loop back to 0 once all qns displayed
      } else {
         setQnNum((prevQnNum) => prevQnNum + 1);
      }
      // change to next qn number

      console.log("Displaying next question, Q" + qnObj.qnNum);
      // this number is from the JSON, NOT the qnNum state
   }

   return (
      <AppContext.Provider
         value={{
            qnObj,
            handleOptionClick,
            isCorrect,
            isExplBtnDisabled,
            isNextQnBtnDisabled,
            handleNextQnBtnClick,
            numQnsAns,
            numCorrectAns,
            wrongAnsArr,
         }}
      >
         {!qnObj ? <DisplayLoading /> : children}
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
