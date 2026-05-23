import dictionaryEs from "../lessons/dictionary-es";
import dictionaryIt from "../lessons/dictionary-it";
import dictionaryCeb from "../lessons/dictionary-ceb";
import dictionaryLao from "../lessons/dictionary-lao";
import dictionaryId from "../lessons/dictionary-id";
import dictionaryCommon from "../lessons/dictionary-common";

function getDictionary(country) {
  const dictionaries = {
    it: {
      dictionary: dictionaryIt,
    },
    es: {
      dictionary: dictionaryEs,
    },
    ceb: {
      dictionary: dictionaryCeb,
    },
    lao: {
      dictionary: dictionaryLao,
    },
    id: {
      dictionary: dictionaryId,
    },
  };

  const currentDictionary = dictionaries[country].dictionary;

  const dictionaryKeys = Object.keys(currentDictionary);

  const dictionaryJoined = {};
  dictionaryKeys.forEach((element) => {
    if (dictionaryCommon[element] && currentDictionary[element]) {
      dictionaryJoined[element] = {
        ...dictionaryCommon[element],
        ...currentDictionary[element],
      };
    }
  });
  return dictionaryJoined;
}

export default getDictionary;
