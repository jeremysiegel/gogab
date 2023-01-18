import sampleLesson from "../lessons/sampleLesson";
import dictionary from "../lessons/dictionary";
import shuffle from "../utility/shuffle";

const getExerciseData = (id, multipleChoice) => {
  // Get lesson length and excercise index for progress bar.
  const exerciseKeys = Object.keys(sampleLesson);
  const index = exerciseKeys.indexOf(id.toString());
  const quizLength = exerciseKeys.length;

  // Get current excercise data.
  const data = sampleLesson[id];

  // Get next excercise type for navigation.
  const nextExerciseType = sampleLesson[data.nextExercise].screenType
    ? sampleLesson[data.nextExercise].screenType
    : null;

  const wordArray = data.word ? data.word.split(" ") : [];
  const helpTextArray = [];
  const learnWordArray = [];

  wordArray.forEach((element) => {
    if (dictionary[element]) {
      helpTextArray.push(dictionary[element].pronunciation);
      learnWordArray.push(dictionary[element].translation);
    }
  });

  const selections = [];
  let shuffledSelections = [];

  if (multipleChoice) {
    let dictionaryKeys = Object.keys(dictionary);
    let numItems = 4;
    if (data.word) {
      selections[0] = dictionary[data.word];
      selections[0].correct = true;
      dictionaryKeys = dictionaryKeys.filter(
        (element) => dictionary[element].word !== data.word
      );
      numItems--;
    }

    while (numItems > 0 && dictionaryKeys.length > 0) {
      // Pick a remaining element.
      let randomIndex = Math.floor(Math.random() * dictionaryKeys.length);
      if (
        dictionary[dictionaryKeys[randomIndex]].word !=
        dictionary[dictionaryKeys[randomIndex]].translation
      ) {
        selections.push(dictionary[dictionaryKeys[randomIndex]]);
        numItems--;
      }
      dictionaryKeys.splice(randomIndex, 1);
    }
    shuffledSelections = shuffle(selections);
  }

  const returnData = {
    nextExerciseType: nextExerciseType,
    index: index,
    quizLength: quizLength,
    wordArray: wordArray,
    helpTextArray: helpTextArray,
    learnWordArray: learnWordArray,
    selections: shuffledSelections,
    ...data,
  };

  return returnData;
};

export default {
  getExerciseData,
};
