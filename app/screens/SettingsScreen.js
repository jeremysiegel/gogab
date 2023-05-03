import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import BackgroundScreen from "../components/BackgroundScreen";
import { Select } from "native-base";
import cache from "../utility/cache";
import AuthContext from "../navigation/authContext";
import WorldMap from "../components/WorldMap";
import AppText from "../components/AppText";
import getFlag from "../utility/getFlag";
import lessonData from "../lessons/lessonData";
import colors from "../config/colors";
import { moderateScale } from "../utility/scaler";

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
      <BackgroundScreen>
        <View style={styles.container}>
          <View style={styles.currentCourseContainer}>
            <View style={styles.countryNameContainer}>
              <AppText style={styles.countryName}>{countryName}</AppText>
              <Image source={image} style={styles.image} />
            </View>
            <View style={styles.lessonsCompletedContainer}>
              <AppText style={styles.itemHeader}>Lesson progress:</AppText>
              <AppText style={styles.itemHeader}>
                {"  "}
                {lessonsCompleted} / {totalLessons}
              </AppText>
            </View>
          </View>
          <View style={styles.selectContainer}>
            <AppText style={styles.itemHeader}>Select course</AppText>
            <Select
              selectedValue={country}
              minWidth="200"
              placeholder="Choose Country"
              _selectedItem={{
                bg: colors.primary,
              }}
              mt={1}
              onValueChange={(itemValue) => {
                setCountry(itemValue);
                cache.store("country", itemValue);
              }}
            >
              <Select.Item label="Italy" value="it" />
              <Select.Item label="Mexico" value="es" />
            </Select>
          </View>
        </View>
      </BackgroundScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  currentCourseContainer: {
    backgroundColor: colors.grey + 90,
    padding: 20,
    margin: 30,
    borderRadius: 10,
  },

  selectContainer: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 30,
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
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
});

export default SettingsScreen;
