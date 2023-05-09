import React from "react";
import { View, StyleSheet } from "react-native";

function Backdrop({ children, color, style }) {
  return (
    <View style={[{ backgroundColor: color }, styles.container, style]}>
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
