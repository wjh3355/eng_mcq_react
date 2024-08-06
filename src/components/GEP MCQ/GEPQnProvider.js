import { createContext, useState, useEffect, useContext } from "react";
import { shuffle } from "lodash";

import LoadingSpinner from "../utils/LoadingSpinner"

const jsonSource = "https://gist.githubusercontent.com/wjh3355/0044ee12436ff44915daf15e45622ef2/raw/567e2f20b85ec7eb7a501ac942a9df2387aca2d2/source.json";

const GEPQnContext = createContext();
export const useGEPQnContext = () => useContext(GEPQnContext);

export function GEPQnProvider({ children }) {
   const [qnObjArr, setQnObjArr] = useState(null);
   const [qnNum, setQnNum] = useState(0);
   const [qnObj, setQnObj] = useState(null);

   const [numQnsAns, setNumQnsAns] = useState(0);
   const [numCorrectAns, setNumCorrectAns] = useState(0);
   const [wrongAnsArr, setWrongAnsArr] = useState([]);

   const [isNextQnBtnDisabled, setIsNextQnBtnDisabled] = useState(true);
   const [isExplBtnDisabled, setIsExplBtnDisabled] = useState(true);
   const [isCorrect, setIsCorrect] = useState(null);

   const [isLoading, setIsLoading] = useState(true);

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

   useEffect(() => {
      qnObj && setIsLoading(false);
   }, [qnObj])

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
      <GEPQnContext.Provider
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
         {isLoading ? <LoadingSpinner /> : children}
      </GEPQnContext.Provider>
   );
};
