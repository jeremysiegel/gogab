export default function checkArrayIncludesAll(sourceArray, targetArray) {
  if (!Array.isArray(targetArray) || !Array.isArray(sourceArray)) {
    return false;
  }
  for (let i = 0; i < sourceArray.length; i++) {
    if (!targetArray.includes(sourceArray[i])) {
      return false;
    }
  }
  return true;
}
