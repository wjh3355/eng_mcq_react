import { Col } from "react-bootstrap";
import { shuffle } from "d3-array";
import { useEffect, useState } from "react";

import OptionButton from "./OptionButton";

export default function QuizOptionsCol({ 
   qnObj,
   handleAnswer 
}) {

   let { options, correctAns } = qnObj;

   const [randomisedOptions, setRandomisedOptions] = useState([]);
   const [selectedOption, setSelectedOption] = useState(null);

   useEffect(() => {
      setRandomisedOptions(shuffle([...options]));
      console.log('Options randomised')

      return () => {
         setSelectedOption(null);
         console.log('Option styles reset');
      }
   }, [options]);

   const isDisabled = selectedOption !== null;

   function renderButton(thisOption) {
      let isCorrectOption = (thisOption === correctAns); // constant! true for correct button, false for all others
      return (
         <OptionButton
            key={thisOption}
            thisOption={thisOption} // constant! word shown in button
            isCorrectOption={isCorrectOption} 
            hasBeenSelected={thisOption === selectedOption} // all false initially, true for clicked button
            isDisabled={isDisabled} // changes from all false to all true once smth is selected
            handleOptionClick={() => {
               console.log('Option clicked:', isCorrectOption ? 'Correct!' : 'Wrong!');
               setSelectedOption(thisOption);
               handleAnswer();
            }}
         />
      )
   };

   return (
      <Col lg={4} className="mt-2 mt-md-0">
         <div className="vstack gap-3">
            {randomisedOptions.map(option => renderButton(option))}
         </div>
      </Col>
   );
}
