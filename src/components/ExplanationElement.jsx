import { Card } from "react-bootstrap";

export default function ExplanationElement({ 
   rootWord, 
   type,
   def 
}) {

   console.log('Re-rendering explanation');
   
   return (
      <Card>
         <Card.Body>
            <p>
               <strong className="fs-5 me-1">{rootWord}&nbsp;</strong>
               <span className="fst-italic">({type})</span>
            </p>
            <p className="mb-0">{def}.</p>
         </Card.Body>
      </Card>
   );
}
