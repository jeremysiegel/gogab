import stripArray from "./stripArray";

export default function phraseCoder(phrases, dictionaryCommon) {
  phrases.forEach((phrase) => {
    const wordArray = phrase.order.split(" ");
    const orderByWordId = [];
    const strippedWordArray = stripArray(wordArray);
    strippedWordArray.forEach((word) => {
      try {
        orderByWordId.push(dictionaryCommon[word].wordIdNum);
      } catch (error) {
        console.log(word, phrase.phraseId);
        orderByWordId.push(word);
      }
    });
    phrase.orderByWordId = [...orderByWordId];
  });
  console.log(phrases);
}
