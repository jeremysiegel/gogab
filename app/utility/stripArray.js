export default function stripArray({
  arrayToStrip,
  removeSpecialCharacters = true,
  removeUnderscore = false,
}) {
  let strippedWordArray = [];
  arrayToStrip.forEach((element) => {
    let strippedElement = element;
    if (removeSpecialCharacters) {
      strippedElement = strippedElement.replace(/[^\w-]/g, "");
    }
    if (removeUnderscore) {
      strippedElement = strippedElement.replace(/_/g, " ");
    }
    strippedElement = strippedElement.toLowerCase();
    strippedWordArray.push(strippedElement);
  });
  return strippedWordArray;
}
