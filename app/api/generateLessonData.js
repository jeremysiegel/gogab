import lessonData from "../lessons/lessonData";
import lessonStyles from "./lessonStyles";
import getElementFromId from "../utility/getElementFromId";

/*
Takes in lessonData and creates a lesson
from the lessonStyle. Used by getExercisedata to
generate an exercise screen.
*/

function generateLessonData(lessonId) {
  // Gets data for lesson
  const data = getElementFromId(lessonData, "lessonId", lessonId);
  // Gets data about the style and sequence of lesson
  const style = getElementFromId(lessonStyles, "styleId", data.style);
  const sequence = style.sequence;
  let lesson = {};
  let exerciseNumber = 1;
  // Track sublessons to be inserted into lessonStyles. Each sublesson should have a "displayAfter" property.
  // displayAfter should start from 1, indicating how many times word should come up before subLesson is inserted.
  let subLessonTracker = data.subLessons;
  let subLessonData;

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
