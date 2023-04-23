import phraseDictionaryEn from "../lessons/phraseDictionary-en";
import getElementFromId from "../utility/getElementFromId";
import phraseDictionaryIt from "../lessons/phraseDictionary-it";
// TODO: Fix
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
  const phrase = getElementFromId(phraseDictionary, "phraseId", phraseId);
  return phrase;
}

export default getPhrase;
