import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Selectable from "./Selectable";
import colors from "../config/colors";
import Icon from "./Icon";

function ChoiceImage({ item, onPress, selectedItem }) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(selectedItem === item.name);
  });

  return (
    <Selectable
      name={item.name}
      selected={selected}
      onPress={onPress}
      style={styles.selectableItem}
    >
      <View>
        <Icon
          name={item.name}
          size={100}
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
    width: 160,
    height: 200,
    justifyContent: "center",
    borderColor: colors.selected,
    borderWidth: 5,
    borderRadius: 5,
  },
});

export default ChoiceImage;
