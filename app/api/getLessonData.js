import sampleLesson from "../lessons/sampleLesson";

const getLessonData = (id) => {
  const data = sampleLesson[id];
  const nextLessonType = sampleLesson[data.nextLesson].screenType
    ? sampleLesson[data.nextLesson].screenType
    : null;

  const lessonKeys = Object.keys(sampleLesson);
  const index = lessonKeys.indexOf(id.toString());
  const quizLength = lessonKeys.length;

  const returnData = {
    nextLessonType: nextLessonType,
    index: index,
    quizLength: quizLength,
    ...data,
  };

  const dataObjects = ["word", "learnWord", "helpText"];

  dataObjects.forEach((element) => {
    if (data[element]) {
      let splitElement = null;
      splitElement = data[element].split(" ");
      const splitElementName = element + "Array";
      returnData[splitElementName] = splitElement;
    }
  });

  return returnData;
};

export default {
  getLessonData,
};
