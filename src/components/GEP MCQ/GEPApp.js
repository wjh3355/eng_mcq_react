import { AppProvider } from "./AllContext";

import { Container, Row } from "react-bootstrap";

import SentenceCol from "./left column/SentenceCol";
import QuizOptionsCol from "./right column/QuizOptionsCol";
import Header from "./header/Header";
import ScoreComponent from "./ScoreComponent";
// import ToastComponent from "./components/ToastComponent";

export default function GEPApp() {

   return (
      <AppProvider>
         <Header/>

         {/* <ToastComponent/> */}

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