import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Animated, Pressable } from "react-native";
import AuthContext from "../navigation/authContext";
import getFlag from "../utility/getFlag";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { moderateScale, scale } from "../utility/scaler";
import Backdrop from "../components/Backdrop";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import Selectable from "../components/Selectable";
import AppButton from "../components/AppButton";
import setUniqueID from "../utility/setUniqueId";
import logger from "../utility/logger";
import cache from "../utility/cache";

function OnboardingScreen({ navigation }) {
  const { setCountry } = useContext(AuthContext);
  const [selected, setSelected] = useState();
  const authContext = useContext(AuthContext);

  //This function creates unique id for user.
  const identify = () => {
    const uuid = setUniqueID();
    logger.identify(uuid);
    return uuid;
  };

  const createUser = () => {
    const uuid = identify();
    const user = {
      uuid: uuid,
      //joinYear: currentYear,
      firstLogin: true,
      //userAppDownloadDate: manipulateDates.today,
      //userLastLogin: manipulateDates.today,
      //userPreviousLogin: manipulateDates.today,
    };
    authContext.setUser(user);
    cache.store("user", user);
  };

  const handlePress = (country) => {
    logger.logEvent("firstCountry", "country", country);
    setSelected(country);
  };
  const countryCardStyle = (countryName) => ({
    ...styles.countryCard,
    backgroundColor:
      selected === countryName ? colors.orangeTint : colors.white,
  });
  const fadeAnim1 = React.useRef(new Animated.Value(0)).current;
  const fadeAnim2 = React.useRef(new Animated.Value(0)).current;
  const fadeAnim3 = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim1, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        delay: 500,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        delay: 500,
      }),
      Animated.timing(fadeAnim3, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        delay: 1000, // delay of 1 second
      }),
    ]).start();
  }, [fadeAnim1, fadeAnim2, fadeAnim3]);
  return (
    <Screen>
      <View style={styles.container}>
        <Animated.View style={{ opacity: fadeAnim1 }}>
          <View style={[styles.leftChatContainer, styles.chatContainer]}>
            <AppText style={styles.welcome}>Welcome!</AppText>
            <View style={[styles.leftArrow, styles.arrow]}></View>
            <View style={[styles.leftArrowOverlap, styles.arrowOverlap]}></View>
          </View>
        </Animated.View>
        <Animated.View style={{ opacity: fadeAnim2, marginTop: 10 }}>
          <View style={[styles.leftChatContainer, styles.chatContainer]}>
            <AppText style={styles.welcome}>
              Where would you like to explore?
            </AppText>
            <View style={[styles.leftArrow, styles.arrow]}></View>
            <View style={[styles.leftArrowOverlap, styles.arrowOverlap]}></View>
          </View>
        </Animated.View>
        <Animated.View style={{ opacity: fadeAnim3, marginTop: 10 }}>
          <View style={styles.countryContainer}>
            <Pressable onPress={() => handlePress("it")}>
              <View style={countryCardStyle("it")}>
                <AppText style={styles.countryName}>Italy</AppText>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress("es")}>
              <View style={countryCardStyle("es")}>
                <AppText style={styles.countryName}>Latin America</AppText>
              </View>
            </Pressable>
          </View>
        </Animated.View>
        <View style={styles.buttonContainer}>
          {selected && (
            <AppButton
              title={"Let's Go!"}
              onPress={() => {
                setCountry(selected);
                createUser();
                navigation.navigate("Home");
              }}
              style={{ minWidth: "50%", maxWidth: 300 }}
            />
          )}
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "center",
    maxWidth: 300,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    margin: 20,
  },
  countryContainer: {
    margin: 40,
  },
  countryCard: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: 200,
    height: 70,
    ...defaultStyles.elevated,

    justifyContent: "center",
    marginVertical: 10,
  },
  countryName: {
    marginLeft: 10,
    fontSize: moderateScale(28),
  },
  welcome: {
    fontSize: moderateScale(28),
    color: colors.secondary,
  },
  backdrop: {
    borderRadius: 5,
    marginVertical: 20,
  },
  promptContainer: {
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    borderColor: colors.dark,
    backgroundColor: colors.blue + "20",
    borderWidth: 6,
    borderRadius: 5,
    padding: 20,
    marginTop: 30,
    maxWidth: 300,
  },
  signprompt: {
    ...defaultStyles.big,
    color: colors.black,
    backgroundColor: colors.blue + "20",
    marginTop: 30,
    borderWidth: 3,
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 30,
    textAlign: "center",
    textTransform: "capitalize",
  },
  chatContainer: {
    padding: 10,
    paddingBottom: 13,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 30,
    borderRadius: 20,
  },
  rightChatContainer: {
    backgroundColor: colors.secondary,
    marginRight: "5%",
    alignSelf: "flex-end",
  },
  leftChatContainer: {
    backgroundColor: colors.primaryTint30,
    marginLeft: "1%",
    alignSelf: "flex-start",
  },
  chatprompt: {
    color: colors.light,
    fontSize: moderateScale(30),
  },
  smallprompt: {
    fontSize: 30,
    paddingVertical: 10,
    marginTop: 20,
  },
  arrow: {
    position: "absolute",
    width: 20,
    height: 25,
    bottom: 0,
  },
  arrowOverlap: {
    position: "absolute",
    backgroundColor: colors.background,
    width: 20,
    height: 35,
    bottom: -6,
  },
  rightArrow: {
    backgroundColor: colors.secondary,
    borderBottomLeftRadius: 25,
    right: -10,
  },
  rightArrowOverlap: {
    borderBottomLeftRadius: 18,
    right: -20,
  },
  leftArrow: {
    backgroundColor: colors.primaryTint30,
    borderBottomRightRadius: 25,
    left: -10,
  },
  leftArrowOverlap: {
    borderBottomRightRadius: 18,
    left: -20,
  },
});

export default OnboardingScreen;
