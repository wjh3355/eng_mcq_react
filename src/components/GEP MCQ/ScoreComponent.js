import { useGEPQnContext } from "./GEPQnProvider";

export default function ScoreComponent() {
   let { numQnsAns, numCorrectAns } = useGEPQnContext();
   let percentCorrect = numQnsAns
      ? Math.round((numCorrectAns * 100) / numQnsAns)
      : 0;

   return (
      <div className="container d-flex justify-content-center mt-3">
         <div 
            className="py-2 px-4 rounded-5 border-bottom border-2"
            style={{backgroundColor: '#ffe484'}}
         >
            Score:&nbsp;&nbsp;
            <strong>
               {numCorrectAns} / {numQnsAns} ({percentCorrect}%)
            </strong>
         </div>
      </div>
   );
}