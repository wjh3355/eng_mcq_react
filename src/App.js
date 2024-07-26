import { AppProvider } from "./components/AllContext";

import { Container, Row } from "react-bootstrap";

import SentenceCol from "./components/left column/SentenceCol";
import QuizOptionsCol from "./components/right column/QuizOptionsCol";
import Header from "./components/Header";
import ScoreComponent from "./components/ScoreComponent";

export default function App() {

   return (
      <AppProvider>
         <Header/>

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