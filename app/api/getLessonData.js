import sampleLesson from "../lessons/sampleLesson";

const getLessonData = (id) => {
  const data = sampleLesson[id];

  const returnData = {
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
