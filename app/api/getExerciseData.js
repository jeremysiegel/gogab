// TODO: Allow different order of words in other languages

import getDictionary from "./getDictionary";
import shuffle from "../utility/shuffle";
import lessonObject from "../lessons/lessonData";
import getElementFromId from "../utility/getElementFromId";
import getPhraseDictionary from "./getPhraseDictionary";
import stripArray from "../utility/stripArray";
import punctuate from "../utility/punctuate";
import translate from "../utility/translate";

const getExerciseData = ({
  exerciseId,
  lessonId,
  lessonData,
  multipleChoice,
  prompt,
  matching,
  country,
}) => {
  // Get lesson length and exercise index for progress bar.
  const exerciseKeys = Object.keys(lessonData);
  const index = exerciseKeys.indexOf(exerciseId.toString());
  const quizLength = exerciseKeys.length;
  const dictionary = getDictionary(country);

  // Get next exercise type for navigation.
  const nextExercise = lessonData[exerciseId + 1] ? exerciseId + 1 : 1;
  const nextExerciseType = lessonData[exerciseId + 1]
    ? lessonData[nextExercise].screenType
    : "end";

  // Get data for current exercise.
  const data = lessonData[exerciseId];
  const reverse = data.reverse;
  // If this is a phrase screen, get the phrase.
  let phraseData = "";
  let wordData = {};

  try {
    wordData = dictionary[data.word];
  } catch (error) {
    console.log(error);
  }

  if (
    data.screenType === "sentenceBuilder" ||
    data.screenType === "newWord" ||
    data.screenType === "prompt"
  ) {
    phraseData =
      data.screenType === "prompt"
        ? getPhraseDictionary(data.phrase)
        : getPhraseDictionary(data.word);
    data.word = phraseData.phraseTranslation.order;
  }

  // Create array of words in lessonData with special characters removed
  // Used to translate words from dictionary
  let wordArray = data.word ? data.word.split(" ") : [];
  let strippedWordArray = stripArray({ arrayToStrip: wordArray });
  let learnWordArray = translate(strippedWordArray, dictionary);
  if (data.screenType != "sentenceBuilder")
    learnWordArray = punctuate(learnWordArray, wordArray);
  let helpTextArray = translate(strippedWordArray, dictionary, true);

  // Set selections for quizzes
  let selections = [];
  // If it is a multiple choice exercise, pull random words for other choices
  if (multipleChoice || matching) {
    let choiceWords = Object.keys(dictionary);
    // Remove rank 0 words (conjunctions, etc)
    choiceWords = choiceWords.filter(
      (element) => dictionary[element].rank !== 0
    );
    // Total number of choices
    let numItems = 4;
    // For matching game, select only lesson words
    if (matching) {
      const lesson = getElementFromId(lessonObject, "lessonId", lessonId);
      choiceWords = lesson.words;
      if (choiceWords.length < numItems && lesson.reviewWords) {
        choiceWords = choiceWords.concat(lesson.reviewWords);
      }
      if (choiceWords.length < numItems && lesson.supportWords) {
        choiceWords = choiceWords.concat(lesson.supportWords);
      }
    }
    // If there is a correct answer, include the correct answer
    if (data.word) {
      selections[0] = dictionary[data.word];
      selections[0].correct = true;
      choiceWords = choiceWords.filter(
        (element) => dictionary[element].word !== dictionary[data.word].word
      );
      numItems--;
    }

    // Randomly select remaining choices
    while (numItems > 0 && choiceWords.length > 0) {
      // Pick random word from dictionary
      let randomIndex = Math.floor(Math.random() * choiceWords.length);
      let pushWord = dictionary[choiceWords[randomIndex]];
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

      choiceWords.splice(randomIndex, 1);
    }
  }

  // For prompt screens, add in pre-selected choices
  let phrase2 = "";
  if (prompt) {
    // If there is a second phrase, get it.
    let phrase2Data = {};
    if (lessonData[exerciseId].phrase2 && data.screenSubType != "sign") {
      phrase2Data = getPhraseDictionary(lessonData[exerciseId].phrase2);
      const phraseData2 = phrase2Data.phraseTranslation.order.split(" ");
      let translateArray = stripArray({ arrayToStrip: phraseData2 });

      translateArray = translate(translateArray, dictionary);
      phrase2 = punctuate(translateArray, phraseData2);
    }
    const choices = lessonData[exerciseId].choices;
    // If choices are hard coded
    if (typeof choices[0] === "string") {
      selections = [...choices];
    } else {
      choices.forEach((choice) => {
        const phrase = getPhraseDictionary(choice);
        const phraseArray = phrase.phraseTranslation.order.split(" ");
        let translateArray = stripArray({
          arrayToStrip: phraseArray,
          removeUnderscore: phrase2 ? true : false,
        });
        if (
          !phrase2 ||
          (data.screenSubType === "sign" && data.screenSubType !== "icon")
        ) {
          translateArray = translate(translateArray, dictionary);
        }
        translateArray = punctuate(translateArray, phraseArray);
        const selection = {
          title: translateArray,
          correct: lessonData[exerciseId].correctChoice.includes(choice)
            ? true
            : false,
        };
        selections.push(selection);
      });
    }
  }
  // Get words for phrases
  if (data.screenType === "sentenceBuilder" || data.screenType === "newWord") {
    strippedWordArray.forEach((word) => {
      selections.push(dictionary[word]);
    });
  }
  // Shuffle selections.
  const shuffledSelections = shuffle(selections);
  // Return object.
  const exerciseData = {
    nextExerciseType: nextExerciseType,
    phraseData: phraseData,
    index: index,
    quizLength: quizLength,
    wordData: wordData,
    wordArray: reverse
      ? stripArray({
          arrayToStrip: learnWordArray,
          removeSpecialCharacters: false,
          removeUnderscore: true,
        })
      : stripArray({
          arrayToStrip: wordArray,
          removeSpecialCharacters: false,
          removeUnderscore: true,
        }),
    helpTextArray: helpTextArray,
    learnWordArray: reverse
      ? stripArray({
          arrayToStrip: wordArray,
          removeSpecialCharacters: false,
          removeUnderscore: true,
        })
      : stripArray({
          arrayToStrip: learnWordArray,
          removeSpecialCharacters: false,
          removeUnderscore: true,
        }),
    selections: shuffledSelections,
    reverse: reverse, // may be dup
    nextExercise: nextExercise,
    lessonId: lessonId,
    secondPhrase: phrase2,
    strippedWordArray: reverse
      ? stripArray({ arrayToStrip: learnWordArray, removeUnderscore: true })
      : stripArray({ arrayToStrip: strippedWordArray, removeUnderscore: true }),
    ...data,
  };

  return exerciseData;
};
export default {
  getExerciseData,
};
