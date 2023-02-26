import dictionaryEs from "../lessons/dictionary-es";
import dictionaryCommon from "../lessons/dictionary-common";

function getDictionary(props) {
  const dictionaryKeys = Object.keys(dictionaryEs);
  const dictionaryJoined = {};
  dictionaryKeys.forEach((element) => {
    if (dictionaryCommon[element] && dictionaryEs[element]) {
      dictionaryJoined[element] = {
        ...dictionaryCommon[element],
        ...dictionaryEs[element],
      };
    }
  });

  return dictionaryJoined;
}

export default getDictionary;
