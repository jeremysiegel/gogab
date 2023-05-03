import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { moderateScale } from "../utility/scaler";

import LessonCard from "./LessonCard";

// Creates a button that appears to have 3D reaction when pressed.

function NavigationButton({
  title,
  subtitle,
  onPress,
  style,
  sectionColor,
  cornerColor,
  icon,
}) {
  return (
    <Pressable style={style} onPress={onPress}>
      <LessonCard
        title={title}
        subtitle={subtitle}
        sectionColor={sectionColor}
        cornerColor={cornerColor}
        icon={icon}
      />
    </Pressable>
  );
}

export default NavigationButton;
