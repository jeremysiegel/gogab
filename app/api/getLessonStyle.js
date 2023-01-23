import lessonStyles from "./lessonStyles";

const getLessonStyle = (id) => {
  let style = undefined;
  lessonStyles.forEach((element) => {
    if (element.styleId === id) {
      style = element;
    }
  });
  return style;
};

export default getLessonStyle;
