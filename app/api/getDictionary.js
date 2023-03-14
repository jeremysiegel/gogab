import dictionaryEs from "../lessons/dictionary-es";
import dictionaryIt from "../lessons/dictionary-it";
import dictionaryCommon from "../lessons/dictionary-common";


function getDictionary(country) {
console.log(country)
  const dictionaries = {
    it: {
      dictionary: dictionaryIt,
    },
    es: {
      dictionary: dictionaryEs,
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
