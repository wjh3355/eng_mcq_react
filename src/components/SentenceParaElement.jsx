import { useAppContext } from "./AllContext";

export default function SentenceParaElement() {

   const { qnObj: { sentence, wordToTest } } = useAppContext();

   const idxOfWord = sentence.indexOf(wordToTest);

   console.log('Re-rendering sentence');

   return (
      <div className="fs-5">
        {sentence.slice(0, idxOfWord)}
        <strong>{wordToTest}</strong>
        {sentence.slice(idxOfWord + wordToTest.length)}
      </div>
   );
}
