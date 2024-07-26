// import { Card } from "react-bootstrap";

// import { useAppContext } from "./AllContext";
// import { useEffect, useState } from "react";

export default function ReviewElement() {
   // const { qnObj, isCorrect } = useAppContext();
   // const [wrongAnsArr, setWrongAnsArr] = useState([]);
   // const [hasWrongAnsYet, sethasWrongAnsYet] = useState(false);

   // useEffect(() => {

   //    // if (isCorrect === false) {
   //    //    if (!hasWrongAnsYet) {
   //    //       console.log('There has been a wrong question!', 'background: red');
   //    //       sethasWrongAnsYet(true);
   //    //    }
   //    // }

   //    console.log('%cQWERTYUIOIUYTRFGBJ!', 'background: red');

   //    // isCorrect === false && setWrongAnsArr((prevArr) => [...prevArr, qnObj]);
   // }, [isCorrect]);

   // function generateWrongAnsCards(obj) {
   //    const { sentence, rootWord, wordToTest, def } = obj;
   //    const idxOfWord = sentence.indexOf(wordToTest);
   //    return (
   //       <Card body className="w-100" key={rootWord}>
   //          <p>
   //             {sentence.slice(0, idxOfWord)}
   //             <strong className="text-danger">{wordToTest}</strong>
   //             {sentence.slice(idxOfWord + wordToTest.length)}
   //          </p>
   //          <div className="d-flex justify-content-center">
   //             <div
   //                className="fst-italic py-2 px-4 rounded-5 border-bottom border-2"
   //                style={{ backgroundColor: "#ffe484" }}
   //             >
   //                <strong>{rootWord}</strong>: {def}.
   //             </div>
   //          </div>
   //       </Card>
   //    );
   // }

   return (
      <div className="d-flex justify-content-center">
         <p className="text-secondary fst-italic my-3">
            Feature coming soon!
         </p>
      </div>
   );
}

// function Placeholder() {
//    return (
//       <div className="d-flex justify-content-center">
//          <p className="text-secondary fst-italic my-3">
//             Incorrect answers will be displayed here.
//          </p>
//       </div>
//    );
// }

// {hasWrongAnsYet 
//    ? wrongAnsArr.map(obj => <p>{obj.qnNum}</p>) 
//    : <Placeholder />}