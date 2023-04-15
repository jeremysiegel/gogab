import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import WorldMap from "../components/WorldMap";
import BackgroundScreen from "../components/BackgroundScreen";

function WorldMapScreen(props) {
  return (
    <BackgroundScreen>
      <ScrollView>
        <ScrollView style={styles.scrollContainer} horizontal={true}>
          <View style={styles.worldContainer}>
            <WorldMap />
          </View>
        </ScrollView>
      </ScrollView>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { marginVertical: 150 },
  worldContainer: { flex: 1 },
});

export default WorldMapScreen;
