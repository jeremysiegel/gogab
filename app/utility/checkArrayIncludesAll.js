export default function checkArrayIncludesAll(sourceArray, targetArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!targetArray.includes(sourceArray[i])) {
      return false;
    }
  }
  return true;
}
