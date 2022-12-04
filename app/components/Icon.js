import React from "react";
import { View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import AppText from "./AppText";

function Icon({
  name,
  size = 40,
  iconSize = size * 0.6,
  backgroundColor = "#000",
  iconColor = "#fff",
  label,
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
      {label && <AppText>{label}</AppText>}
    </View>
  );
}

export default Icon;
