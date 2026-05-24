import React, { useContext, useMemo, useState } from "react";
import { StyleSheet, View, TextInput, SectionList } from "react-native";

import AppText from "../../components/AppText";
import DictionaryRow from "./DictionaryRow";
import getDictionary from "../../api/getDictionary";
import getPhrase from "../../api/getPhrase";
import phraseDictionaryEn from "../../lessons/phraseDictionary-en";
import lessonData from "../../lessons/lessonData";
import sections from "../../lessons/sections";
import stripArray from "../../utility/stripArray";
import translate from "../../utility/translate";
import punctuate from "../../utility/punctuate";
import AuthContext from "../../navigation/authContext";
import colors from "../../config/colors";
import fonts from "../../config/fonts";

// Build phraseId → first section title using the lesson/section hierarchy.
function buildPhraseToSectionMap() {
  const map = {};
  sections.forEach((level) => {
    level.data.forEach((section) => {
      section.lessons.forEach((lessonId) => {
        const lesson = lessonData.find((l) => l.lessonId === lessonId);
        if (lesson) {
          lesson.phrases.forEach((phraseId) => {
            if (!map[phraseId]) {
              map[phraseId] = section.title;
            }
          });
        }
      });
    });
  });
  return map;
}

const phraseToSection = buildPhraseToSectionMap();

function PhrasesList() {
  const { country } = useContext(AuthContext);
  const [query, setQuery] = useState("");

  const phrases = useMemo(() => {
    const dictionary = getDictionary(country);
    const list = [];
    phraseDictionaryEn.forEach((phrase) => {
      try {
        const data = getPhrase(phrase.phraseId, country);
        const order = data.phraseTranslation && data.phraseTranslation.order;
        if (!order) return;
        const phraseArray = order.split(" ");
        let translated = stripArray({ arrayToStrip: phraseArray });
        translated = translate(translated, dictionary);
        translated = punctuate(translated, phraseArray);
        const translation = translated.join(" ").trim();
        if (!translation) return;
        list.push({
          key: String(phrase.phraseId),
          english: phrase.order.replace(/_/g, " "),
          translation,
          audio: data.phraseTranslation.audio,
          section: phraseToSection[phrase.phraseId] || "Other",
        });
      } catch (error) {
        console.log(error);
      }
    });
    return list;
  }, [country]);

  const sectionedData = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? phrases.filter(
          (p) =>
            p.english.toLowerCase().includes(q) ||
            p.translation.toLowerCase().includes(q)
        )
      : phrases;

    const sectionMap = new Map();
    filtered.forEach((p) => {
      if (!sectionMap.has(p.section)) {
        sectionMap.set(p.section, []);
      }
      sectionMap.get(p.section).push(p);
    });

    return Array.from(sectionMap.entries()).map(([title, data]) => ({
      title,
      data,
    }));
  }, [phrases, query]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          placeholder="Search phrases"
          placeholderTextColor={colors.medium}
          value={query}
          onChangeText={setQuery}
          autoCorrect={false}
        />
      </View>
      <SectionList
        sections={sectionedData}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <DictionaryRow
            english={item.english}
            translation={item.translation}
            audio={item.audio}
          />
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <AppText style={styles.sectionHeaderText}>{section.title}</AppText>
          </View>
        )}
        ListEmptyComponent={
          <AppText style={styles.empty}>No phrases found.</AppText>
        }
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  search: {
    backgroundColor: colors.grey,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    color: colors.darkText,
  },
  sectionHeader: {
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 6,
  },
  sectionHeaderText: {
    fontSize: 17,
    fontFamily: fonts.bold,
    color: colors.medium,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  listContent: {
    paddingBottom: 80,
  },
  empty: {
    textAlign: "center",
    color: colors.medium,
    marginTop: 40,
  },
});

export default PhrasesList;
