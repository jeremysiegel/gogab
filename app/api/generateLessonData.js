import lessonData from "../lessons/lessonData";
import getLessonStyle from "./getLessonStyle";

function generateLessonData(id) {
  let data = [];
  lessonData.forEach((element) => {
    if (element.lessonId === id) {
      data = element;
    }
  });
  const style = getLessonStyle(data.style);
  const sequence = style.sequence;
  let lesson = {};
  let exerciseNumber = 1;

  sequence.forEach((exerciseSet) => {
    if (!exerciseSet.wordType) {
      exerciseSet.screens.forEach((screen) => {
        lesson[exerciseNumber] = { screenType: screen };
        exerciseNumber++;
      });
    } else {
      exerciseSet.wordType.forEach((wordType) => {
        data[wordType].forEach((word) => {
          exerciseSet.screens.forEach((screen) => {
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
