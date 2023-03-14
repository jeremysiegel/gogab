import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import BackgroundScreen from "../components/BackgroundScreen";
import { Select } from "native-base";
import cache from "../utility/cache";
import AuthContext from "../navigation/authContext";

function SettingsScreen(props) {
  const {country, setCountry} = useContext(AuthContext);

  return (
    <BackgroundScreen>
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
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SettingsScreen;
