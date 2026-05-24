import React, { useContext, useMemo, useState } from "react";
import { StyleSheet, View, TextInput, FlatList } from "react-native";

import AppText from "../../components/AppText";
import DictionaryRow from "./DictionaryRow";
import getDictionary from "../../api/getDictionary";
import AuthContext from "../../navigation/authContext";
import colors from "../../config/colors";

// Searchable list of every word in the active language.

function WordsList() {
  const { country } = useContext(AuthContext);
  const [query, setQuery] = useState("");

  const words = useMemo(() => {
    const dictionary = getDictionary(country);
    return Object.keys(dictionary)
      .map((key) => {
        const entry = dictionary[key];
        if (!entry || !entry.translation) return null;
        return {
          key,
          english: entry.word || key.replace(/_/g, " "),
          translation: entry.translation,
          pronunciation: entry.pronunciation,
          audio: entry.audio,
        };
      })
      .filter(Boolean)
      .sort((a, b) => a.english.localeCompare(b.english));
  }, [country]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return words;
    return words.filter(
      (w) =>
        w.english.toLowerCase().includes(q) ||
        w.translation.toLowerCase().includes(q)
    );
  }, [words, query]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          placeholder="Search words"
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
            pronunciation={item.pronunciation}
            audio={item.audio}
          />
        )}
        ListEmptyComponent={
          <AppText style={styles.empty}>No words found.</AppText>
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

export default WordsList;
