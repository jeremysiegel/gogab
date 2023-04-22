export default function stripArray({
  arrayToStrip,
  removeSpecialCharacters = true,
  removeUnderscore = false,
}) {
  let strippedWordArray = [];
  arrayToStrip.forEach((element) => {
    let strippedElement = element;
    if (removeSpecialCharacters) {
      // Remove anything that is not a latin letter, underscore or hyphen.
      strippedElement = strippedElement.replace(/[^A-Za-zŽžÀ-ÿ0-9_-]/g, "");
    }
    if (removeUnderscore) {
      strippedElement = strippedElement.replace(/_/g, " ");
    }
    strippedElement = strippedElement.toLowerCase();
    strippedWordArray.push(strippedElement);
  });
  return strippedWordArray;
}
