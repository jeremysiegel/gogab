// TODO: allow multiple special characters in a word (see strippedArray)

import getDictionary from "./getDictionary";
import shuffle from "../utility/shuffle";
import lessonObject from "../lessons/lessonData";
import getElementFromId from "../utility/getElementFromId";
import getPhraseDictionary from "./getPhraseDictionary";

const getExerciseData = ({
  exerciseId,
  lessonId,
  lessonData,
  multipleChoice,
  prompt,
  matching,
}) => {
  const dictionary = getDictionary();
  // Get lesson length and exercise index for progress bar.
  const exerciseKeys = Object.keys(lessonData);
  const index = exerciseKeys.indexOf(exerciseId.toString());
  const quizLength = exerciseKeys.length;
  // console.log(quizLength);
  // Get data for current exercise.
  const data = lessonData[exerciseId];
  const reverse = data.reverse;
  let phraseData = "";
  if (data.screenType === "sentenceBuilder") {
    phraseData = getPhraseDictionary(data.word);
    data.word = phraseData.phraseTranslation.order;
  }
  // Get next exercise type for navigation.
  const nextExercise = lessonData[exerciseId + 1] ? exerciseId + 1 : 1;
  const nextExerciseType = lessonData[exerciseId + 1]
    ? lessonData[nextExercise].screenType
    : "end";

  let wordArray = data.word ? data.word.split(" ") : [];
  let helpTextArray = [];
  let learnWordArray = [];

  // Create array of words in lessonData with special characters removed
  // Keeps _ , changes all to lowercase.

  function stripArray(array) {
    let strippedWordArray = [];
    array.forEach((element) => {
      let strippedElement = element.replace(/\W/g, "");
      strippedElement = strippedElement.toLowerCase();
      strippedWordArray.push(strippedElement);
    });
    return strippedWordArray;
  }

  let strippedWordArray = stripArray(wordArray);
  // Use word from dictionary (allows identifying of words with multiple meanings)
  // Push to pronunciation and translation arrays

  function punctuate(notPunctuatedArray, punctuateArray, learnWordArray) {
    notPunctuatedArray.forEach((element, index) => {
      if (dictionary[element]) {
        // If there are special characters in the phrase, preserve them.
        if (/\W/.exec(punctuateArray[index])) {
          let match = /\W/.exec(punctuateArray[index]);
          // Add special characters to translation for reverse
          if (reverse) {
            punctuateArray[index] = dictionary[element].word;
            punctuateArray[index] =
              punctuateArray[index].slice(0, match.index) +
              match[0] +
              punctuateArray[index].slice(match.index);

            learnWordArray.push(dictionary[element].translation);
          } else {
            punctuateArray[index] = dictionary[element].word;

            learnWordArray[index] = dictionary[element].translation;
            learnWordArray[index] =
              learnWordArray[index].slice(0, match.index) +
              match[0] +
              learnWordArray[index].slice(match.index);
          }
        } else {
          punctuateArray[index] = dictionary[element].word;

          learnWordArray.push(dictionary[element].translation);
        }
        helpTextArray.push(dictionary[element].pronunciation);
      }
    });
  }

  punctuate(strippedWordArray, wordArray, learnWordArray);

  // Necessary for languages with different order of words in phrases.
  if (data.screenType === "sentenceBuilder") {
    const mainWordArray = phraseData.phraseMain.order.split(" ");
    const translationArray = phraseData.phraseTranslation.order.split(" ");
    strippedWordArray = stripArray(mainWordArray);
    wordArray = mainWordArray;

    const newLearnWordArray = [];
    const newLearnWordArray2 = [];

    punctuate(strippedWordArray, wordArray, newLearnWordArray);
    // For !reverse
    strippedWordArray = stripArray(translationArray);
    punctuate(strippedWordArray, translationArray, newLearnWordArray2);

    phraseData = reverse ? newLearnWordArray : translationArray;
  }

  const selections = [];

  // If it is a multiple choice exercise, select other choices
  if (multipleChoice || matching) {
    let dictionaryKeys = Object.keys(dictionary);
    // Remove rank 0 words (conjunctions, etc)
    dictionaryKeys = dictionaryKeys.filter(
      (element) => dictionary[element].rank !== 0
    );
    // Total number of choices
    let numItems = 4;
    // For matching game, select only lesson words
    if (matching) {
      const lesson = getElementFromId(lessonObject, "lessonId", lessonId);
      dictionaryKeys = lesson.words;
      if (dictionaryKeys.length < numItems && lesson.reviewWords) {
        dictionaryKeys = dictionaryKeys.concat(lesson.reviewWords);
      }
      if (dictionaryKeys.length < numItems && lesson.supportWords) {
        dictionaryKeys = dictionaryKeys.concat(lesson.supportWords);
      }
    }
    // If there is a correct answer, include the correct answer
    if (data.word) {
      selections[0] = dictionary[data.word];
      selections[0].correct = true;
      dictionaryKeys = dictionaryKeys.filter(
        (element) => dictionary[element].word !== dictionary[data.word].word
      );
      numItems--;
    }

    // Randomly select remaining choices
    while (numItems > 0 && dictionaryKeys.length > 0) {
      // Pick random word from dictionary
      let randomIndex = Math.floor(Math.random() * dictionaryKeys.length);
      let pushWord = dictionary[dictionaryKeys[randomIndex]];
      let push = true;
      // Covers first word:
      // Don't use word if it is the same in both languages

      if (pushWord.word === pushWord.translation) {
        push = false;
      }
      // Don't use word if it or its translation is already in the selection
      selections.forEach((selection) => {
        if (
          pushWord.word === selection.word ||
          pushWord.translation === selection.translation
        ) {
          push = false;
        }
      });
      if (push) {
        selections.push(pushWord);
        numItems--;
      }

      dictionaryKeys.splice(randomIndex, 1);
    }
  }

  // Add in selections for prompts.
  if (prompt) {
    lessonData[exerciseId].choices.forEach((choice) => {
      selections.push(choice);
    });
  }

  // Shuffle selections.
  const shuffledSelections = shuffle(selections);

  const exerciseData = {
    nextExerciseType: nextExerciseType,
    phraseData: phraseData,
    index: index,
    quizLength: quizLength,
    wordArray: reverse ? learnWordArray : wordArray,
    helpTextArray: helpTextArray,
    learnWordArray: reverse ? wordArray : learnWordArray,
    selections: shuffledSelections,
    reverse: reverse, // may be dup
    nextExercise: nextExercise,
    lessonId: lessonId,
    ...data,
  };

  return exerciseData;
};

export default {
  getExerciseData,
};
