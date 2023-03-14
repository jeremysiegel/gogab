import dictionaryEs from "../lessons/dictionary-es";
import dictionaryIt from "../lessons/dictionary-it";
import dictionaryCommon from "../lessons/dictionary-common";
import cache from "../utility/cache";

async function getDictionary(props) {
  const getCountry = async () => {
    let cachedCountry = await cache.get("country");
    return cachedCountry;
  };

  const country = await getCountry();

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
