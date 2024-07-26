import { Container } from "react-bootstrap";
import { useAppContext } from "./AllContext";

export default function ScoreComponent() {
   let { numQnsAns, numCorrectAns } = useAppContext();
   let percentCorrect = numQnsAns
      ? Math.round((numCorrectAns * 100) / numQnsAns)
      : 0;

   return (
      <Container className="d-flex justify-content-center my-3">
         <div 
            className="py-2 px-4 rounded-5 border-bottom border-2"
            style={{backgroundColor: '#ffe484'}}
         >
            Score:&nbsp;
            <strong>
               {numCorrectAns} / {numQnsAns} ({percentCorrect}%)
            </strong>
         </div>
      </Container>
   );
}

// TODO: STYLE THIS
