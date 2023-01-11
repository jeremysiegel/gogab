import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { moderateScale } from "../utility/scaler";

import colors from "../config/colors";
import Selectable from "./Selectable";
import AppText from "./AppText";
import defaultStyles from "../config/styles";

function ChoiceBox({ title, onPress, style, currentObjects }) {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(currentObjects.includes(title));
  });

  return (
    <Selectable
      name={title}
      selected={selected}
      onPress={onPress}
      style={[defaultStyles.border, styles.box, style]}
    >
      <AppText style={styles.text}>{title}</AppText>
    </Selectable>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    alignSelf: "center",
    width: "100%",
    maxWidth: 350,
  },
  text: {
    color: colors.dark,
    fontSize: moderateScale(22),
    textTransform: "lowercase",
    fontWeight: "bold",
  },
});

export default ChoiceBox;
