import sampleLesson from "../lessons/sampleLesson";

const getLessonData = (id) => {
  const data = sampleLesson[id];
  const nextLessonType = sampleLesson[data.nextLesson].screenType;

  const wordArray = data.word.split(" ");
  const learnWordArray = data.learnWord.split(" ");
  const helpTextArray = data.helpText.split(" ");

  const returnData = {
    wordArray: wordArray,
    learnWordArray: learnWordArray,
    helpTextArray: helpTextArray,
    nextLessonType: nextLessonType,
    ...data,
  };

  return returnData;
};

export default {
  getLessonData,
};
