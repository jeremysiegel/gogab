export default function stripArray(arrayToStrip) {
  let strippedWordArray = [];
  arrayToStrip.forEach((element) => {
    let strippedElement = element.replace(/\W/g, "");
    strippedElement = strippedElement.toLowerCase();
    strippedWordArray.push(strippedElement);
  });
  return strippedWordArray;
}
