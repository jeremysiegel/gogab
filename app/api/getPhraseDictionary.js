import phraseDictionaryEn from "../lessons/phraseDictionary-en";
import getElementFromId from "../utility/getElementFromId";

function getPhraseDictionary(phraseId) {
  const phraseTranslation = getElementFromId(
    phraseDictionaryEn,
    "phraseId",
    phraseId
  );
  const phraseMain = getElementFromId(phraseDictionaryEn, "phraseId", phraseId);
  return {
    phraseTranslation: phraseTranslation,
    phraseMain: phraseMain,
  };
}

export default getPhraseDictionary;
