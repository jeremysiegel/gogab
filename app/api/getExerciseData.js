import dictionary from "../lessons/dictionary";
import shuffle from "../utility/shuffle";
import getLessonData from "./getLessonData";

const getExerciseData = (id, multipleChoice) => {
  // Get lesson length and excercise index for progress bar.
  const lessonData = getLessonData(1);
  const exerciseKeys = Object.keys(lessonData);
  const index = exerciseKeys.indexOf(id.toString());
  const quizLength = exerciseKeys.length;

  // Get current excercise data.
  const data = lessonData[id];
  const reverse = data.reverse;

  // Get next excercise type for navigation.
  const nextExercise = lessonData[id + 1] ? id + 1 : 1;
  const nextExerciseType = lessonData[nextExercise].screenType
    ? lessonData[nextExercise].screenType
    : null;

  const wordArray = data.word ? data.word.split(" ") : [];
  const helpTextArray = [];
  const learnWordArray = [];
  const strippedWordArray = [];

  wordArray.forEach((element) => {
    let strippedElement = element.replace(/\W/g, "");
    strippedElement = strippedElement.toLowerCase();
    strippedWordArray.push(strippedElement);
  });

  strippedWordArray.forEach((element, index) => {
    if (dictionary[element]) {
      wordArray[index] = dictionary[element].word;
      helpTextArray.push(dictionary[element].pronunciation);
      learnWordArray.push(dictionary[element].translation);
    }
  });

  const selections = [];
  const selectionWords = [];

  if (multipleChoice) {
    let dictionaryKeys = Object.keys(dictionary);
    dictionaryKeys = dictionaryKeys.filter(
      (element) => dictionary[element].rank !== 0
    );
    let numItems = 4;
    if (data.word) {
      selections[0] = dictionary[data.word];
      selections[0].correct = true;
      selectionWords.push(dictionary[data.word].word);

      dictionaryKeys = dictionaryKeys.filter(
        (element) => dictionary[element].word !== dictionary[data.word].word
      );
      numItems--;
    }

    while (numItems > 0 && dictionaryKeys.length > 0) {
      // Pick a remaining element.
      let randomIndex = Math.floor(Math.random() * dictionaryKeys.length);
      if (
        dictionary[dictionaryKeys[randomIndex]].word !=
          dictionary[dictionaryKeys[randomIndex]].translation &&
        !selectionWords.includes(dictionary[dictionaryKeys[randomIndex]].word)
      ) {
        selectionWords.push(dictionary[dictionaryKeys[randomIndex]].word);
        selections.push(dictionary[dictionaryKeys[randomIndex]]);
        numItems--;
      }

      dictionaryKeys.splice(randomIndex, 1);
    }
  }
  const shuffledSelections = shuffle(selections);

  const returnData = {
    nextExerciseType: nextExerciseType,
    index: index,
    quizLength: quizLength,
    wordArray: reverse ? learnWordArray : wordArray,
    helpTextArray: helpTextArray,
    learnWordArray: reverse ? wordArray : learnWordArray,
    selections: shuffledSelections,
    reverse: reverse,
    nextExercise: nextExercise,
    ...data,
  };

  return returnData;
};

export default {
  getExerciseData,
};
