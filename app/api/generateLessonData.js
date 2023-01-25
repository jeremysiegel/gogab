import lessonData from "../lessons/lessonData";
import getLessonStyle from "./getLessonStyle";
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
  const style = getLessonStyle(data.style);
  const sequence = style.sequence;
  let lesson = {};
  let exerciseNumber = 1;

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
            // Push a new exercise for that word of the screen type
            lesson[exerciseNumber] = {
              screenType: screen,
              word: word,
              reverse: exerciseSet.reverse,
            };
            exerciseNumber++;
          });
        });
      });
    }
  });

  return lesson;
}

export default generateLessonData;
