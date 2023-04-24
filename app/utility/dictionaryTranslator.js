import stripArray from "./stripArray";
import translate from "./translate";
import punctuate from "./punctuate";

export default function translatePhrases(dictionary, phrases) {
  let translatedPhrases = [];
  for (let i = 0; i < phrases.length; i++) {
    let phrase = phrases[i];
    let wordsSplit = phrase.phraseTranslation.order.split(" ");
    let words = stripArray({ arrayToStrip: wordsSplit });
    let wordsTranslated = [];
    try {
      wordsTranslated = translate(words, dictionary);
    } catch (error) {
      console.log(words, i, phrase, error);
    }
    let tranlationPunctuated = punctuate(wordsTranslated, wordsSplit);

    translatedPhrases.push({
      id: phrase.phraseId,
      translation: tranlationPunctuated.join(" "),
    });
  }
  console.log(translatedPhrases);
  return translatedPhrases;
}
