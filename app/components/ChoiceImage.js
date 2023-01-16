import React, { useEffect, useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Selectable from "./Selectable";
import colors from "../config/colors";
import Icon from "./Icon";
import defaultStyles from "../config/styles";

function ChoiceImage({ item, onPress, selectedItem }) {
  const [selected, setSelected] = useState(false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setSelected(selectedItem === item.word);
  });

  return (
    <Selectable
      name={item.word}
      selected={selected}
      onPress={onPress}
      style={[
        defaultStyles.border,
        styles.selectableItem,
        { height: 0.24 * height, width: 0.39 * width },
      ]}
    >
      <View>
        <Icon
          name={item.icon}
          size={Math.min(0.25 * width, 100)}
          label={item.word}
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
