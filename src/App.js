import { AppProvider } from "./components/AllContext";

import { Container, Row } from "react-bootstrap";

import SentenceCol from "./components/SentenceCol";
import QuizOptionsCol from "./components/QuizOptionsCol";
import Header from "./components/Header";

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
      </AppProvider>
   );
}