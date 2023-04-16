export default function translate(
  arrayToBeTranslated,
  dictionary,
  pronunciation
) {
  let translatedArray = [];
  let translationType = pronunciation ? "pronunciation" : "translation";
  //console.log(arrayToBeTranslated);
  arrayToBeTranslated.forEach((element) => {
    // if element is only special characters
    if (/^[^\w\s]+$/.test(element)) {
      console.log(translatedArray);
      translatedArray.push(element);
    } else {
      translatedArray.push(dictionary[element][translationType]);
    }
  });
  return translatedArray;
}
