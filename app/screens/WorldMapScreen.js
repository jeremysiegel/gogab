import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import WorldMap from "../components/WorldMap";
import BackgroundScreen from "../components/BackgroundScreen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import fonts from "../config/fonts";

const screenWidth = Dimensions.get("window").width;

function WorldMapScreen(props) {
  return (
    <BackgroundScreen>
      <ScrollView>
        <AppText style={styles.title}>My World Tour</AppText>
        <ScrollView
          style={styles.scrollContainer}
          horizontal={true}
          contentOffset={{ x: screenWidth / 2, y: 0 }}
        >
          <View style={styles.worldContainer}>
            <WorldMap />
          </View>
        </ScrollView>
      </ScrollView>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 15,
    marginBottom: 100,
  },
  worldContainer: {
    flex: 1,
  },
  title: {
    fontSize: 44,
    // fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
    color: colors.worldMapPrimary,
    fontFamily: fonts.bold,
    //textTransform: "uppercase",
  },
});

export default WorldMapScreen;
