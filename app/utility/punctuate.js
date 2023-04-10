// Function to repunctuate translated words. Can only put punctuation at end of word.

export default function punctuate(arrayToPunctuate, arrayToCopyPunctuation) {
  let punctuatedArray = [];
  arrayToPunctuate.forEach((element, index) => {
    // If there are special characters in the phrase, preserve them.
    if (/\W/.exec(arrayToCopyPunctuation[index])) {
      let match = /\W/.exec(arrayToCopyPunctuation[index]);
      punctuatedArray[index] = arrayToPunctuate[index] + match[0];
    } else {
      punctuatedArray[index] = arrayToPunctuate[index];
    }
  });
  return punctuatedArray;
}
