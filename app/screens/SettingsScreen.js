import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import BackgroundScreen from "../components/BackgroundScreen";
import { Select } from "native-base";
import cache from "../utility/cache";
import AuthContext from "../navigation/authContext";
import WorldMap from "../components/WorldMap";

function SettingsScreen(props) {
  const { country, setCountry } = useContext(AuthContext);

  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <Select
          selectedValue={country}
          minWidth="200"
          placeholder="Choose Country"
          _selectedItem={{
            bg: "teal.600",
          }}
          mt={1}
          onValueChange={(itemValue) => {
            setCountry(itemValue);
            cache.store("country", itemValue);
          }}
        >
          <Select.Item label="Italy" value="it" />
          <Select.Item label="Spain" value="es" />
        </Select>
      </View>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default SettingsScreen;
