import phraseDictionaryEn from "../lessons/phraseDictionary-en";
import getElementFromId from "../utility/getElementFromId";
import phraseDictionaryIt from "../lessons/phraseDictionary-it";
// TODO: Fix phraseId
function getPhrase(phraseIdGiven, country) {
  let phraseId = "P" + phraseIdGiven;
  let phraseDictionary = phraseDictionaryEn;
  switch (country) {
    case "es":
      phraseDictionary = phraseDictionaryIt;
      break;
    case "it":
      phraseDictionary = phraseDictionaryIt;
      break;
    default:
      console.log("Unsupported country");
      break;
  }
  const phraseTranslation = getElementFromId(phraseDictionary, "phraseId", phraseId);
  const phraseMain = getElementFromId(phraseDictionaryEn, "phraseId", phraseIdGiven);
  const phrase = {
    phraseTranslation: phraseTranslation,
    phraseMain: phraseMain
  }
  return phrase;
}

export default getPhrase;
