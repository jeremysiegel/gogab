import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Image, Alert, Pressable, Linking } from "react-native";
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
import defaultStyles from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

function SettingsScreen(props) {
  const { country, setCountry } = useContext(AuthContext);

  const [completedLessons, setCompletedLessons] = useState();
  const [ready, setReady] = useState(false);
  const image = getFlag(country);

  const handleFeedbackPress = () => {
 Linking.openURL("https://forms.gle/PNfPcffVMEEbYjgn6")

  }

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
              <AppText style={[styles.itemHeader, styles.itemHeader2]}>Lesson progress:</AppText>
              <AppText style={[styles.itemHeader, styles.itemHeader2]}>
                {"  "}
                {lessonsCompleted} / {totalLessons}
              </AppText>
            </View>
          </Backdrop>
          <View style={styles.selectContainer}>
            <Backdrop
              color={colors.primaryTint30}
              style={{ flex: 1, width: 280 }}
            >
            <AppText style={styles.itemHeader}>Select course</AppText>
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
            <Pressable onPress={handleFeedbackPress}>
          <View style={styles.feedback}>
            <AppText>Leave feedback</AppText>
            <View style={styles.chevronContainer}>
            <MaterialCommunityIcons name={"chevron-double-right"} size={30} color={colors.darkText} />
            </View>
          </View>
            </Pressable>
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
 
  },
  resetContainer: {
    flex: 1,
    height: 200,
    width: "50%",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 80
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
    color: colors.secondary
  },
  itemHeader2:{
color: colors.darkText
  },

  countryName: {
    fontSize: moderateScale(40),
    color: colors.secondary
  },
  countryNameContainer: {
  paddingBottom: 20,
    flexDirection: "row",
    marginTop: Platform.OS === "ios" ? 40 : 0,
    alignItems: "center",
  },
  feedback: {
    flexDirection: "row",
    ...defaultStyles.elevated,
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.primaryTint30,
    borderRadius: 5,
    marginTop: 50,
   // height: 50,
    width: 200
  },
  chevronContainer: {
    flex:1,
    alignItems: "flex-end",
    justifyContent: "center",
   paddingTop: 5
  }

});

export default SettingsScreen;
