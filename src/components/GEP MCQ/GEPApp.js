import { GEPQnProvider } from "./GEPQnProvider";

import SentenceCol from "./left column/SentenceCol";
import QuizOptionsCol from "./right column/QuizOptionsCol";
import ScoreComponent from "./ScoreComponent";


export default function GEPApp() {

   return (
      <GEPQnProvider>
         
         <div className="container mt-3">
            <div className="row">
               <SentenceCol/>
               <QuizOptionsCol />
            </div>
         </div>

         <ScoreComponent/>
      </GEPQnProvider>
   );
}