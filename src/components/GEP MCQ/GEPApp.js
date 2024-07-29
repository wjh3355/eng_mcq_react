import { AppProvider } from "./AllContext";

import { Container, Row } from "react-bootstrap";

import SentenceCol from "./left column/SentenceCol";
import QuizOptionsCol from "./right column/QuizOptionsCol";
import ScoreComponent from "./ScoreComponent";


export default function GEPApp() {

   return (
      <AppProvider>
         
         <Container className="mt-3">
            <Row>
               <SentenceCol/>
               <QuizOptionsCol />
            </Row>
         </Container>

         <ScoreComponent/>
      </AppProvider>
   );
}