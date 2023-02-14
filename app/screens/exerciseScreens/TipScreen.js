import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../../components/AppText";
import ExerciseScreen from "../../components/exerciseScreen/ExerciseScreen";
import getExerciseData from "../../api/getExerciseData";
import RenderLearnWord from "../../components/RenderLearnWord";
import defaultStyles from "../../config/styles";
import instructionText from "../../config/instructionText";
import Icon from "../../components/Icon";
import colors from "../../config/colors";
import { moderateScale } from "../../utility/scaler";

// Creates screen to display text.
// TODO: Add image component

function TipScreen({ route, navigation }) {
  const data = getExerciseData.getExerciseData({ ...route.params, tip: true });
  const title = data.title ? data.title : "Tip";
  return (
    <ExerciseScreen exerciseData={data} navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Icon
            name={"lightbulb-on-outline"}
            backgroundColor={null}
            iconColor={colors.primary}
            size={80}
            iconType={"material"}
          />
          <View style={styles.titleTextContainer}>
            <AppText style={styles.title}>{title}</AppText>
          </View>
        </View>
        <View style={styles.tipContainer}>
          <AppText style={styles.tip}>{data.tip} </AppText>
        </View>
      </View>
    </ExerciseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    alignSelf: "flex-start",
    marginTop: 42,
    marginLeft: 30,
    marginRight: 20,
  },
  tip: {
    fontSize: moderateScale(25),
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 10,
    marginTop: 20,
  },
  titleTextContainer: {
    paddingLeft: 10,
  },
  title: {
    fontSize: moderateScale(30),
    color: colors.primary,
  },
});

export default TipScreen;
