import { useGEPQnContext } from "../GEPQnProvider";
import { memo } from "react";

const SentenceParaElement = memo(function SentenceParaElement() {

   const { qnObj: { sentence, wordToTest } } = useGEPQnContext();

   const idxOfWord = sentence.indexOf(wordToTest);

   console.log('Re-rendering sentence');

   return (
      <div className="fs-5">
        {sentence.slice(0, idxOfWord)}
        <strong>{wordToTest}</strong>
        {sentence.slice(idxOfWord + wordToTest.length)}
      </div>
   );
});

export default SentenceParaElement;