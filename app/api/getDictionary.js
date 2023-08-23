import dictionaryEs from "../lessons/dictionary-es";
import dictionaryIt from "../lessons/dictionary-it";
import dictionaryCeb from "../lessons/dictionary-ceb";
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
