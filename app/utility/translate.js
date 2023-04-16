export default function translate(
  arrayToBeTranslated,
  dictionary,
  pronunciation
) {
  let translatedArray = [];
  let translationType = pronunciation ? "pronunciation" : "translation";
  arrayToBeTranslated.forEach((element) => {
    // if element is only special characters
    if (/^[^\w\s]+$/.test(element)) {
      translatedArray.push(element);
    } else {
      translatedArray.push(dictionary[element][translationType]);
    }
  });
  return translatedArray;
}
