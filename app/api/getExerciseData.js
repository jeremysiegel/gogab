import dictionary from "../lessons/dictionary";
import shuffle from "../utility/shuffle";
import generateLessonData from "./generateLessonData";

const getExerciseData = ({ exerciseId, lessonId, multipleChoice, prompt }) => {
  // Get lesson length and exercise index for progress bar.
  const lessonData = generateLessonData(lessonId);
  const exerciseKeys = Object.keys(lessonData);
  const index = exerciseKeys.indexOf(exerciseId.toString());
  const quizLength = exerciseKeys.length;

  // Get data for current exercise.
  const data = lessonData[exerciseId];
  const reverse = data.reverse;

  // Get next exercise type for navigation.
  const nextExercise = lessonData[exerciseId + 1] ? exerciseId + 1 : 1;
  const nextExerciseType = lessonData[exerciseId + 1]
    ? lessonData[nextExercise].screenType
    : "home"; //update this when endScreen works

  const wordArray = data.word ? data.word.split(" ") : [];
  const helpTextArray = [];
  const learnWordArray = [];

  // Create array of words in lessonData with special characters removed
  // Keeps _ , changes all to lowercase.
  const strippedWordArray = [];

  wordArray.forEach((element) => {
    let strippedElement = element.replace(/\W/g, "");
    strippedElement = strippedElement.toLowerCase();
    strippedWordArray.push(strippedElement);
  });

  // Use word from dictionary (allows identifying of words with multiple meanings)
  // Push to pronunciation and translation arrays
  strippedWordArray.forEach((element, index) => {
    if (dictionary[element]) {
      wordArray[index] = dictionary[element].word;
      helpTextArray.push(dictionary[element].pronunciation);
      learnWordArray.push(dictionary[element].translation);
    }
  });

  const selections = [];

  // If it is a multiple choice exercise, select other choices
  if (multipleChoice) {
    let dictionaryKeys = Object.keys(dictionary);
    // Remove rank 0 words (conjunctions, etc)
    dictionaryKeys = dictionaryKeys.filter(
      (element) => dictionary[element].rank !== 0
    );
    // Total number of choices
    let numItems = 4;
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
      // Don't use word if it or its translation is already in the selection
      // Don't use word if it is the same in both languages
      selections.forEach((selection) => {
        if (
          pushWord.word === selection.word ||
          pushWord.translation === selection.translation ||
          pushWord.word === pushWord.translation
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

  if (prompt) {
    lessonData[exerciseId].choices.forEach((choice) => {
      selections.push(choice);
    });
  }

  const shuffledSelections = shuffle(selections);

  const exerciseData = {
    nextExerciseType: nextExerciseType,
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
