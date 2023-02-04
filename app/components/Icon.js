import React from "react";
import { View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import AppText from "./AppText";
import { moderateScale } from "../utility/scaler";
import fonts from "../config/fonts";

function Icon({
  name,
  size = moderateScale(40),
  iconSize = size * 0.6,
  backgroundColor = "#000",
  iconColor = "#fff",
  label,
  labelSize = 26,
  labelWeight = "main",
}) {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name={name} color={iconColor} size={iconSize} />
      </View>
      {label && (
        <AppText
          style={{
            fontSize: moderateScale(labelSize),
            paddingTop: 8,
            fontFamily: fonts[labelWeight],
            textAlign: "center",
          }}
        >
          {label}
        </AppText>
      )}
    </View>
  );
}

export default Icon;
