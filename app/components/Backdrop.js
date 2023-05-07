import React from "react";
import { View, StyleSheet } from "react-native";

function Backdrop({ children, color, transparency = 30, style }) {
  return (
    <View
      style={[
        style,
        { backgroundColor: color + transparency },
        styles.container,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
});

export default Backdrop;
