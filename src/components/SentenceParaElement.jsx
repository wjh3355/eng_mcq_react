export default function SentenceParaElement({ 
   sentence,
   wordToTest 
}) {
   const idxOfWord = sentence.indexOf(wordToTest);

   console.log('Re-rendering sentence');

   return (
      <p className="my-0 fs-5">
        {sentence.slice(0, idxOfWord)}
        <strong>{wordToTest}</strong>
        {sentence.slice(idxOfWord + wordToTest.length)}
      </p>
   );
}
