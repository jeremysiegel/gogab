import React, { useState, useEffect } from "react";
import { View, Animated, StyleSheet } from "react-native";
import colors from "../../config/colors";

// Creates header for exercise screen.
function ExerciseHeader(props) {
  // Generate lesson progress bar.
  let fromValue = (props.currentIndex - 1) / props.quizLength;
  if (fromValue < 0) {
    fromValue = 0;
  }

  const [animatedValue] = useState(new Animated.Value(fromValue));

  useEffect(() => {
    startAnimation();
  });

  const startAnimation = () => {
    let toValue = props.currentIndex / props.quizLength;
    if (toValue === 0) {
      toValue = 0.05;
    }
    Animated.timing(animatedValue, {
      toValue: toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.closeButtonContainer}></View>
      <View style={styles.progressBar}>
        <Animated.View
          style={[styles.progressBarFill, { flex: animatedValue }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 25,
  },

  progressBar: {
    flex: 1,
    flexDirection: "row",
    height: 20,
    backgroundColor: colors.light,
    elevation: 1,

    borderWidth: 2,
    borderRadius: 5,
    borderColor: "black",
  },
  progressBarFill: {
    backgroundColor: colors.red,
    borderRadius: 2.5,
    height: "100%",
  },
});

export default ExerciseHeader;
