export default function stripArray(array) {
  let strippedWordArray = [];
  array.forEach((element) => {
    let strippedElement = element.replace(/\W/g, "");
    strippedElement = strippedElement.toLowerCase();
    strippedWordArray.push(strippedElement);
  });
  return strippedWordArray;
}
