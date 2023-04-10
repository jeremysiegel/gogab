export default function translate(
  arrayToBeTranslated,
  dictionary,
  pronunciation
) {
  let translatedArray = [];
  let translationType = pronunciation ? "pronunciation" : "translation";

  arrayToBeTranslated.forEach((element) => {
    translatedArray.push(dictionary[element][translationType]);
  });
  return translatedArray;
}
