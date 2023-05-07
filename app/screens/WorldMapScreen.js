import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import WorldMap from "../components/WorldMap";
import Screen from "../components/Screen";

const screenWidth = Dimensions.get("screen").width;
function WorldMapScreen(props) {
  return (
    <Screen>
      <ScrollView>
        <ScrollView
          style={styles.scrollContainer}
          horizontal={true}
          contentOffset={
            screenWidth < 500 ? { x: screenWidth / 2, y: 0 } : undefined
          }
        >
          <View style={styles.worldContainer}>
            <WorldMap />
          </View>
        </ScrollView>
      </ScrollView>
    </Screen>
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
});

export default WorldMapScreen;
