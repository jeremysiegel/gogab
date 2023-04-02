import lessonData from "../lessons/lessonData";
import lessonStyles from "./lessonStyles";
import getElementFromId from "../utility/getElementFromId";
import allPrompts from "../lessons/prompts";
import subLessons from "../lessons/subLessons";
import stripArray from "../utility/stripArray";
import getPhraseDictionary from "./getPhraseDictionary";

/*
Takes in lessonData and creates a lesson
from the lessonStyle. Used by SectionScreen to
generate data object for getExerciseData.
*/

function generateLessonData(lessonId, sectionLessons) {
  // Gets data for lesson
  const data = getElementFromId(lessonData, "lessonId", lessonId);
  const phraseData = getPhraseDictionary(data.phrases[0]);
  const phrase = phraseData["phraseMain"]["order"];
  let wordArray = phrase ? phrase.split(" ") : [];
  data.words = stripArray(wordArray);
  // Gets data about the style and sequence of lesson
  const style = getElementFromId(lessonStyles, "styleId", data.style);
  let sequence = style.sequence;
  let lesson = {};
  let exerciseNumber = 1;
  // Track sublessons to be inserted into lessonStyles. Each sublesson should have a "displayAfter" property.
  // displayAfter should start from 1, indicating how many times word should come up before subLesson is inserted.
  let subLessonTracker = subLessons[lessonId]
    ? JSON.parse(JSON.stringify(subLessons[lessonId]))
    : [];
  let subLessonData;

  // If it is a review screen, generate lesson randomly.
  if (sequence[0].screens[0] === "review") {
    // Pulls words, phrases, and prompts from all lessons in section
    function getWords(lessonData) {
      let words = [];
      let phrases = [];
      let prompts = [];
      lessonData.forEach((lesson) => {
        lesson.words ? (words = words.concat(lesson.words)) : (words = words);
        lesson.phrases
          ? (phrases = phrases.concat(lesson.phrases))
          : (phrases = phrases);
        lesson.prompts
          ? (prompts = prompts.concat(lesson.prompts))
          : (prompts = prompts);
      });
      return { words: words, phrases: phrases, prompts: prompts };
    }
    // Determines how many review exercises there will be.
    const numberOfExercises = 12;
    let exerciseCount = numberOfExercises;
    // What type of screens to include in review and whether they can be reversible
    const screenTypes = ["multipleChoice", "pickImage"];
    const reverseTypes = [true, false];
    const items = getWords(sectionLessons);
    let words = items.words;
    let phrases = items.phrases;
    let prompts = items.prompts;
    let usedWords = [];

    // Generate exercises randomly
    while (exerciseCount > 0) {
      let screenType =
        screenTypes[Math.floor(Math.random() * screenTypes.length)];
      let reverseType =
        reverseTypes[Math.floor(Math.random() * reverseTypes.length)];
      const wordNumber = Math.floor(Math.random() * words.length);
      let word = words[wordNumber];
      let otherData = null;

      // Incorporate sentenceBuilder - 2nd to last and 3rd to last exercise
      if (
        phrases.length > 0 &&
        (exerciseCount === numberOfExercises - 1 ||
          exerciseCount === numberOfExercises - 3)
      ) {
        const phraseNumber = Math.floor(Math.random() * phrases.length);
        let phrase = phrases[phraseNumber];
        phrases.splice(phraseNumber, 1);
        screenType = "sentenceBuilder";
        word = phrase;
        // Incorporate prompts - last, 3rd to last, 5th to last exercise
      } else if (
        prompts.length > 0 &&
        (exerciseCount === numberOfExercises ||
          exerciseCount === numberOfExercises - 2 ||
          exerciseCount === numberOfExercises - 4)
      ) {
        const promptNumber = Math.floor(Math.random() * prompts.length);
        let promptId = prompts[promptNumber];
        prompts.splice(promptNumber, 1);
        screenType = "prompt";
        const promptData = getElementFromId(allPrompts, "promptId", promptId);
        otherData = { ...promptData };
        word = null;
        reverseType = null;
      } else {
        const currentWord = words.splice(wordNumber, 1);
        usedWords.push(currentWord[0]);
        // If you run out of words in section, reuse words from earlier in review.
        if (words.length === 0) {
          words = usedWords;
          usedWords = [];
        }
      }
      // Push exercise.
      lesson[exerciseCount] = {
        ...otherData,
        screenType: screenType,
        word: word,
        reverse: reverseType,
      };
      exerciseCount--;
    }
    // Return review
    return lesson;
  }

  // For normal lesson:
  // Iterates through each exerciseSet in the lesson sequence
  // to create data objects for individual exercise screens
  sequence.forEach((exerciseSet) => {
    // If exercise screen can be built without word inputs, push it
    if (!exerciseSet.wordType) {
      exerciseSet.screens.forEach((screen) => {
        lesson[exerciseNumber] = { screenType: screen };
        exerciseNumber++;
      });
    } else {
      // All other exercises that require word inputs
      // For each wordType in the exerciseSet
      exerciseSet.wordType.forEach((wordType) => {
        // For each word of that type in the exerciseSet
        data[wordType].forEach((word) => {
          // For each screen type desired
          exerciseSet.screens.forEach((screen) => {
            subLessonTracker.forEach((subTrackerWord) => {
              // Push sublesson if it is time for it;
              if (subTrackerWord.word === word) {
                subTrackerWord.displayAfter--;

                if (subTrackerWord.displayAfter === 0) {
                  subLessonData = subTrackerWord;
                }
              }
            });
            // Push a new exercise for that word of the screen type
            lesson[exerciseNumber] = {
              screenType: screen,
              word: word.word ? word.word : word,
              reverse: exerciseSet.reverse,
            };
            exerciseNumber++;
            // If that particular exercise has a sublesson, push it.
            if (subLessonData) {
              lesson[exerciseNumber] = {
                ...subLessonData,
              };
              exerciseNumber++;
              subLessonData = null;
            }
          });
        });
      });
    }
  });

  // Add in prompts at the end.
  if (data.prompts) {
    data.prompts.forEach((prompt) => {
      const promptData = getElementFromId(allPrompts, "promptId", prompt);
      lesson[exerciseNumber] = {
        ...promptData,
      };
      exerciseNumber++;
    });
  }
  // Add in any extra end lessons.
  if (data.endLesson) {
    data.endLesson.forEach((endLesson) => {
      lesson[exerciseNumber] = {
        ...endLesson,
      };
      exerciseNumber++;
    });
  }

  return lesson;
}

export default generateLessonData;
