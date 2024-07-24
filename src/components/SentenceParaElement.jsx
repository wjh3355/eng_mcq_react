export default function SentenceParaElement({ sentence, wordToTest }) {
   const idxOfWord = sentence.indexOf(wordToTest);
   const beforeWord = sentence.slice(0, idxOfWord);
   const afterWord = sentence.slice(idxOfWord + wordToTest.length);

   return (
      <p className="my-0 fs-5">
        {beforeWord}
        <strong>{wordToTest}</strong>
        {afterWord}
      </p>
   );
}
