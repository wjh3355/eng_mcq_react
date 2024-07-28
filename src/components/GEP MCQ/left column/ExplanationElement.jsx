import { Card } from "react-bootstrap";

import { useAppContext } from "../AllContext";

export default function ExplanationElement() {

   const { qnObj: { rootWord, type, def } } = useAppContext();
   
   console.log('Re-rendering explanation');
   
   return (
      <Card body>
         <p>
            <strong className="fs-5 me-1">
               {rootWord}&nbsp;
            </strong>
            <span className="fst-italic">({type})</span>
         </p>
         {def}.
      </Card>
   );
}
