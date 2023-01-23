import dictionary from "../lessons/dictionary";
import shuffle from "../utility/shuffle";
import getLessonData from "./getLessonData";

const getExerciseData = ({ exerciseId, lessonId, multipleChoice }) => {
  // Get lesson length and exercise index for progress bar.
  const lessonData = getLessonData(lessonId);
  const exerciseKeys = Object.keys(lessonData);
  const index = exerciseKeys.indexOf(exerciseId.toString());
  const quizLength = exerciseKeys.length;

  // Get current exercise data.
  const data = lessonData[exerciseId];
  const reverse = data.reverse;

  // Get next exercise type for navigation.
  const nextExercise = lessonData[exerciseId + 1] ? exerciseId + 1 : 1; //update this when homescreen works
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

  if (multipleChoice) {
    let dictionaryKeys = Object.keys(dictionary);
    dictionaryKeys = dictionaryKeys.filter(
      (element) => dictionary[element].rank !== 0
    );
    let numItems = 4;
    if (data.word) {
      selections[0] = dictionary[data.word];
      selections[0].correct = true;

      dictionaryKeys = dictionaryKeys.filter(
        (element) => dictionary[element].word !== dictionary[data.word].word
      );
      numItems--;
    }

    while (numItems > 0 && dictionaryKeys.length > 0) {
      let randomIndex = Math.floor(Math.random() * dictionaryKeys.length);
      let pushWord = dictionary[dictionaryKeys[randomIndex]];
      let push = true;
      selections.forEach((element) => {
        if (
          pushWord.word === element.word ||
          pushWord.translation === element.translation
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
    lessonId: lessonId,
    ...data,
  };

  return returnData;
};

export default {
  getExerciseData,
};
