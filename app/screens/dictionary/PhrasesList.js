import React, { useContext, useMemo, useState } from "react";
import { StyleSheet, View, TextInput, FlatList } from "react-native";

import AppText from "../../components/AppText";
import DictionaryRow from "./DictionaryRow";
import getDictionary from "../../api/getDictionary";
import getPhrase from "../../api/getPhrase";
import phraseDictionaryEn from "../../lessons/phraseDictionary-en";
import stripArray from "../../utility/stripArray";
import translate from "../../utility/translate";
import punctuate from "../../utility/punctuate";
import AuthContext from "../../navigation/authContext";
import colors from "../../config/colors";

// Searchable list of every phrase, translated for the active language.

function PhrasesList() {
  const { country } = useContext(AuthContext);
  const [query, setQuery] = useState("");

  const phrases = useMemo(() => {
    const dictionary = getDictionary(country);
    const list = [];
    phraseDictionaryEn.forEach((phrase) => {
      try {
        const data = getPhrase(phrase.phraseId, country);
        // Use the language-specific word order (e.g. Indonesian drops "the"/"is"),
        // then translate each token through the dictionary and restore punctuation.
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
        });
      } catch (error) {
        // Skip phrases whose words are missing from the active dictionary.
        console.log(error);
      }
    });
    return list;
  }, [country]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return phrases;
    return phrases.filter(
      (p) =>
        p.english.toLowerCase().includes(q) ||
        p.translation.toLowerCase().includes(q)
    );
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
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <DictionaryRow
            english={item.english}
            translation={item.translation}
            audio={item.audio}
          />
        )}
        ListEmptyComponent={
          <AppText style={styles.empty}>No phrases found.</AppText>
        }
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
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
