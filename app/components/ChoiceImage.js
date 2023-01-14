import React, { useEffect, useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Selectable from "./Selectable";
import colors from "../config/colors";
import Icon from "./Icon";
import defaultStyles from "../config/styles";

let windowWidth = 0;
let windowHeight = 0;

function ChoiceImage({ item, onPress, selectedItem }) {
  const [selected, setSelected] = useState(false);
  const { height, width } = useWindowDimensions();

  windowWidth = width;
  windowHeight = height;

  useEffect(() => {
    setSelected(selectedItem === item.name);
  });

  return (
    <Selectable
      name={item.name}
      selected={selected}
      onPress={onPress}
      style={[
        defaultStyles.border,
        styles.selectableItem,
        { height: 0.24 * windowHeight, width: 0.39 * windowWidth },
      ]}
    >
      <View>
        <Icon
          name={item.name}
          size={Math.min(0.25 * windowWidth, 100)}
          label={item.title}
          backgroundColor={colors.secondary}
        />
      </View>
    </Selectable>
  );
}

const styles = StyleSheet.create({
  selectableItem: {
    margin: 15,
    maxWidth: 160,
    maxHeight: 200,
    justifyContent: "center",
  },
});

export default ChoiceImage;
