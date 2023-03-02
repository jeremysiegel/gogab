import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import getExerciseData from "../../api/getExerciseData";
import ExerciseScreen from "../../components/exerciseScreen/ExerciseScreen";
import instructionText from "../../config/instructionText";
import RenderLearnWord from "../../components/RenderLearnWord";
import SentenceBuilder from "../../components/SentenceBuilder";
import AppText from "../../components/AppText";

// Creates a user-interactive sentence builder screen.

function SentenceBuilderScreen({ route, navigation }) {
const [data, setData]= useState();
//const [instruction, setInstruction] = useState();
//const [phrase, setPhrase] = useState();
const [complete, setComplete] = useState(false);
useEffect(()=> {
  console.log("I ran")
  const setUpData = getExerciseData.getExerciseData({...route.params});
  setData(setUpData)
},[])
const instruction = instructionText["sentenceBuilder"];
//const data = getExerciseData.getExerciseData(route.params);

//setData(setUpData);
//setInstruction(setUpInstruction);
const phrase = <AppText>test</AppText>// <RenderLearnWord data={data} />;
//setPhrase(setUpPhrase);




  return (
    <ExerciseScreen
      exerciseData={data}
      instruction={instruction}
      navigation={navigation}
      touched={true}
      answerIsCorrect={complete}
      phrase={phrase}
      skippable
    >
      <View style={styles.container}>
        <SentenceBuilder data={data} setComplete={setComplete} />
      </View>
    </ExerciseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});

export default SentenceBuilderScreen;
