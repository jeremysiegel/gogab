import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Select } from "native-base";
import cache from "../utility/cache";
import AuthContext from "../navigation/authContext";
import AppText from "../components/AppText";
import getFlag from "../utility/getFlag";
import lessonData from "../lessons/lessonData";
import colors from "../config/colors";
import { moderateScale, scale } from "../utility/scaler";
import Backdrop from "../components/Backdrop";
import Screen from "../components/Screen";

function SettingsScreen(props) {
  const { country, setCountry } = useContext(AuthContext);

  const [completedLessons, setCompletedLessons] = useState();
  const [ready, setReady] = useState(false);
  const image = getFlag(country);

  useEffect(() => {
    async function getCompletedLessons() {
      let cachedCompletedLessons = await cache.get("completedLessons");
      if (!cachedCompletedLessons) {
        cachedCompletedLessons = {};
      }
      if (!cachedCompletedLessons.hasOwnProperty(country)) {
        cachedCompletedLessons = { [country]: [] };
      }
      setCompletedLessons(cachedCompletedLessons);
      setReady(true);
    }
    getCompletedLessons();
  }, []);
  if (ready) {
    let lessonsCompleted = 0;

    try {
      lessonsCompleted = completedLessons[country].length;
    } catch (error) {}

    const totalLessons = lessonData.length;

    let countryName = "";
    switch (country) {
      case "it":
        countryName = "Italy";
        break;
      case "es":
        countryName = "Mexico";
        break;

      default:
        break;
    }

    return (
      <Screen>
        <ScrollView style={styles.container}>
          <View style={styles.countryNameContainer}>
            <AppText style={styles.countryName}>{countryName}</AppText>
            <Image source={image} style={styles.image} />
          </View>
          <Backdrop
            color={colors.primary}
            style={{ marginLeft: scale(20), marginTop: 30 }}
          >
            <View style={styles.lessonsCompletedContainer}>
              <AppText style={styles.itemHeader}>Lesson progress:</AppText>
              <AppText style={styles.itemHeader}>
                {"  "}
                {lessonsCompleted} / {totalLessons}
              </AppText>
            </View>
          </Backdrop>
          <View style={styles.selectContainer}>
            <AppText style={styles.itemHeader}>Select course</AppText>
            <Backdrop color={colors.primary} style={{ flex: 1, width: 280 }}>
              <Select
                selectedValue={country}
                placeholder="Choose Country"
                _selectedItem={{
                  bg: colors.primary,
                }}
                style={{ fontSize: 18 }}
                mt={1}
                onValueChange={(itemValue) => {
                  setCountry(itemValue);
                  cache.store("country", itemValue);
                }}
              >
                <Select.Item label="Italy" value="it" />
                <Select.Item label="Mexico" value="es" />
              </Select>
            </Backdrop>
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },

  selectContainer: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: scale(20),
    maxWidth: 400,
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  lessonsCompletedContainer: {},

  itemHeader: {
    fontSize: moderateScale(34),
    marginBottom: 12,
  },
  countryName: {
    fontSize: moderateScale(44),
    marginBottom: 12,
  },
  countryNameContainer: {
    marginHorizontal: scale(20),

    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
});

export default SettingsScreen;
