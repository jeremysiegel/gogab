import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import AuthContext from "../navigation/authContext";
import getFlag from "../utility/getFlag";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { moderateScale, scale } from "../utility/scaler";
import Backdrop from "../components/Backdrop";
import colors from "../config/colors";

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
        </View>
       
      </Screen>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  welcome: {
    fontSize:  moderateScale(28),
color: colors.secondary
  },
backdrop: {
    borderRadius: 5,
    margin: 20,
}
});

export default OnboardingScreen;