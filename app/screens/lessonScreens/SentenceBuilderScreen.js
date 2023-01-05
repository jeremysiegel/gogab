import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import getLessonData from "../../api/getLessonData";
import LessonScreen from "../../components/lessonScreen/LessonScreen";
import instructionText from "../../config/instructionText";
import RenderLearnWord from "../../components/RenderLearnWord";
import SentenceBuilder from "../../components/SentenceBuilder";
import shuffle from "../../utility/shuffle";

function SentenceBuilderScreen({ route, navigation }) {
  const data = getLessonData.getLessonData(route.params.lessonId);
  const instruction = instructionText[data.screenType];
  const [complete, setComplete] = useState(false);

  const phrase = <RenderLearnWord data={data} />;

  return (
    <LessonScreen
      lessonData={data}
      instruction={instruction}
      navigation={navigation}
      touched={complete}
      phrase={phrase}
    >
      <View style={styles.container}>
        <SentenceBuilder data={data} setComplete={setComplete} />
      </View>
    </LessonScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});

export default SentenceBuilderScreen;
