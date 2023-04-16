import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Hourglass = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Top Text</Text>
      </View>
      <View style={styles.curve}></View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Bottom Text</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    margin: 20,
  },
  textContainer: {
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: -10,
    zIndex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
  },
  curve: {
    height: 40,
    borderWidth: 2,
    borderColor: "#000",
    borderTopWidth: 0,
    borderRadius: 20,
    marginTop: -20,
    backgroundColor: "#fff",
  },
});

export default Hourglass;
