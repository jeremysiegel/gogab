import React, { useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";

import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import WordsList from "./WordsList";
import PhrasesList from "./PhrasesList";
import colors from "../../config/colors";
import fonts from "../../config/fonts";

const TABS = [
  { key: "words", label: "Words" },
  { key: "phrases", label: "Phrases" },
];

// Single dictionary screen with a top tab bar switching between Words and Phrases.

function DictionaryScreen() {
  const [activeTab, setActiveTab] = useState("words");

  return (
    <Screen>
      <View style={styles.tabBar}>
        {TABS.map((tab) => {
          const active = activeTab === tab.key;
          return (
            <Pressable
              key={tab.key}
              style={styles.tab}
              onPress={() => setActiveTab(tab.key)}
            >
              <AppText style={[styles.tabText, active && styles.tabTextActive]}>
                {tab.label}
              </AppText>
              <View style={[styles.indicator, active && styles.indicatorActive]} />
            </Pressable>
          );
        })}
      </View>
      <View style={styles.content}>
        {activeTab === "words" ? <WordsList /> : <PhrasesList />}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
  },
  tabText: {
    fontSize: 16,
    color: colors.medium,
    fontFamily: fonts.bold,
    paddingBottom: 8,
  },
  tabTextActive: {
    color: colors.primary,
  },
  indicator: {
    height: 3,
    width: "60%",
    borderRadius: 3,
    backgroundColor: "transparent",
  },
  indicatorActive: {
    backgroundColor: colors.primary,
  },
  content: {
    flex: 1,
  },
});

export default DictionaryScreen;
