export default function stripArray(arrayToStrip, removeUnderscore) {
  let strippedWordArray = [];
  arrayToStrip.forEach((element) => {
    let strippedElement = element.replace(/\W/g, "");
    if (removeUnderscore) {
      strippedElement = strippedElement.replace(/_/, " ");
    }
    strippedElement = strippedElement.toLowerCase();
    strippedWordArray.push(strippedElement);
  });
  return strippedWordArray;
}
