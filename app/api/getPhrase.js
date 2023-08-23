import phraseDictionaryEn from "../lessons/phraseDictionary-en";
import getElementFromId from "../utility/getElementFromId";
import phraseDictionaryIt from "../lessons/phraseDictionary-it";
import getDictionary from "./getDictionary";
import stripArray from "../utility/stripArray";
import translate from "../utility/translate";
import phraseDisctionaryEs from "../lessons/phraseDisctionary-es";
// TODO: Fix phraseId
// TODO: CEB phrase dictionary needed

function getPhrase(phraseIdGiven, country) {
  let phraseId = "P" + phraseIdGiven;
  let phraseDictionary = phraseDictionaryEn;
  switch (country) {
    case "es":
      phraseDictionary = phraseDisctionaryEs;
      break;
    // Need to create phrases for CEB
    case "ceb":
      phraseDictionary = phraseDisctionaryEs;
      break;
    case "it":
      phraseDictionary = phraseDictionaryIt;
      break;
    default:
      console.log("Unsupported country");
      break;
  }
  const dictionary = getDictionary(country);
  const phraseTranslation = getElementFromId(
    phraseDictionary,
    "phraseId",
    phraseId
  );
  const phraseMain = getElementFromId(
    phraseDictionaryEn,
    "phraseId",
    phraseIdGiven
  );
  let phraseMainTranslation = [];
  if (phraseMain) {
    phraseMainTranslation = stripArray({
      arrayToStrip: phraseMain.order.split(" "),
    });
    phraseMainTranslation = translate(phraseMainTranslation, dictionary);
  }
  const phrase = {
    phraseTranslation: phraseTranslation ? phraseTranslation : {},
    phraseMain: phraseMain ? phraseMain : {},
    phraseMainTranslation: phraseMainTranslation ? phraseMainTranslation : [],
  };
  return phrase;
}

export default getPhrase;
