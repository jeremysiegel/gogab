import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { moderateScale } from "../utility/scaler";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";
import LessonCard from "./LessonCard";

// Creates a button that appears to have 3D reaction when pressed.

function NavigationButton({
  title,
  titleColor = colors.secondary,
  color = colors.secondary,
  buttonBorderColor = colors.secondary,
  borderTopWidth = 0,
  onPress,
  disabled,
  style,
  opacity = "",
  subtitle,
}) {
  const backgroundColor = color + opacity;
  const borderColor = buttonBorderColor + opacity;
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        disabled={disabled}
        style={[
          {
            backgroundColor: backgroundColor,
            borderTopWidth: borderTopWidth,
            borderColor: borderColor,
          },
          styles.button,
          style,
          !pressed && styles.buttonBorder,
          pressed && styles.buttonPressed,
        ]}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        onPress={onPress}
      >
        <View style={styles.cardContainer}>
          <MaterialCommunityIcons name={"star"} color={colors.gold} size={40} />
          <LessonCard
            title={title}
            subtitle={subtitle}
            titleColor={titleColor}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flexDirection: "column",
    marginHorizontal: 20,
    marginVertical: 5,
    maxWidth: 400,
    justifyContent: "center",
  },
  button: {
    padding: 12,
    borderRadius: 7,
    // justifyContent: "center",
    //  alignItems: "center",
    marginTop: 4,
    marginBottom: 5,
    maxWidth: 600,
    width: "100%",
    borderRadius: 30,
  },
  buttonBorder: {
    borderBottomWidth: 4,
    borderWidth: 2,
  },
  buttonPressed: {
    marginTop: 8,
    borderTopWidth: 0,
  },
  buttonText: {
    fontSize: moderateScale(18),
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});

export default NavigationButton;
