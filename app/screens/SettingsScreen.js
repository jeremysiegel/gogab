import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Image, Alert } from "react-native";
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
import AppButton from "../components/AppButton";

function SettingsScreen(props) {
  const { country, setCountry } = useContext(AuthContext);

  const [completedLessons, setCompletedLessons] = useState();
  const [ready, setReady] = useState(false);
  const image = getFlag(country);

  const resetAlert = () =>
    Alert.alert(
      "Erase all data",
      "This will erase everything you have ever done in the app. Click on 'cancel' to cancel.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: resetSecondAlert,
        },
      ],
      { cancelable: true }
    );

  const resetSecondAlert = () =>
    Alert.alert(
      "Are you sure?",
      "This can't be undone. Click on 'cancel' to cancel.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            console.log("ore");
            setCountry(null);
            cache.resetApp();
          },
        },
      ],
      { cancelable: true }
    );

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
        countryName = "Latin America";
        break;

      default:
        break;
    }

    return (
      <Screen>
        <ScrollView style={styles.container}>
          <Backdrop
            color={colors.primaryTint30}
            style={{ borderRadiusTop: 10 }}
          >
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
          </Backdrop>
          <View style={styles.selectContainer}>
            <AppText style={styles.itemHeader}>Select course</AppText>
            <Backdrop
              color={colors.primaryTint30}
              style={{ flex: 1, width: 280 }}
            >
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
                <Select.Item label="Latin America" value="es" />
              </Select>
            </Backdrop>
          </View>
          <View style={styles.resetContainer}>
            <AppButton title="Reset App" onPress={resetAlert} />
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
    paddingTop: 10,
    marginBottom: 80,
  },
  resetContainer: {
    flex: 1,
    height: 200,
    width: "50%",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  selectContainer: {
    flex: 1,
    marginTop: 50,
    // marginHorizontal: scale(20),
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
    fontSize: moderateScale(40),
    marginBottom: 20,
  },
  countryNameContainer: {
    // marginHorizontal: scale(20),

    flexDirection: "row",
    marginTop: Platform.OS === "ios" ? 40 : 0,
    alignItems: "center",
  },
});

export default SettingsScreen;
