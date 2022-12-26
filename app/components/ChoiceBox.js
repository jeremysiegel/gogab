import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { moderateScale } from "../utility/scaler";

import colors from "../config/colors";
import Selectable from "./Selectable";

function ChoiceBox({ title, onPress, selected }) {
  return (
    <Selectable
      name={title}
      selected={selected}
      onPress={onPress}
      style={styles.box}
    >
      <Text style={styles.text}>{title}</Text>
    </Selectable>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderColor: colors.selectableBorder,
    borderWidth: 3,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    alignSelf: "center",
    width: "100%",
    maxWidth: 350,
  },
  text: {
    color: colors.dark,
    fontSize: moderateScale(24),
    textTransform: "lowercase",
    fontWeight: "bold",
  },
});

export default ChoiceBox;
