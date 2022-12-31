import React from "react";

import QuizScreen from "./QuizScreen";

function PickImageScreen({ route, navigation }) {
  return (
    <QuizScreen lessonId={route.params.lessonId} navigation={navigation} />
  );
}

export default PickImageScreen;
