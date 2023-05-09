import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import AuthContext from "../navigation/authContext";
import getFlag from "../utility/getFlag";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { moderateScale, scale } from "../utility/scaler";
import Backdrop from "../components/Backdrop";
import colors from "../config/colors";
import LessonCard from "../components/LessonCard";

function OnboardingScreen(props) {
  const { country, setCountry } = useContext(AuthContext);

  const [completedLessons, setCompletedLessons] = useState();
  const [ready, setReady] = useState(false);
  const image = getFlag(country);



    return (
      <Screen>
        <View style={styles.container}>
            <Backdrop color={colors.primary} style= {styles.backdrop}> 
            <AppText style={styles.welcome}>Welcome!</AppText>
            </Backdrop>
            <Backdrop color={colors.primary} style= {styles.backdrop}>
            <AppText style={styles.welcome}>Where would you like to explore?</AppText>
            </Backdrop>
            <View style={styles.countryContainer}>
<View style={styles.countryCard}>
  <AppText style={styles.countryName}>Italy</AppText>
</View>
<View style={styles.countryCard}>
  <AppText style={styles.countryName}>Latin America</AppText>
</View>
        </View>
        </View>
      </Screen>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    margin: 20
  },
  countryContainer:{
    margin: 40,
  },
  countryCard:{
    backgroundColor: colors.white,
    borderRadius: 10,
    width: 200,
    height: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    justifyContent: "center",
marginVertical: 10
  },
  countryName:{
marginLeft: 10,
fontSize:  moderateScale(28),

  },
  welcome: {
    fontSize:  moderateScale(28),
color: colors.secondary
  },
backdrop: {
    borderRadius: 5,
    marginVertical: 20
},

});

export default OnboardingScreen;