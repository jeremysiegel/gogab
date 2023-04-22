import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "./Screen";
import ChoiceBox from "./ChoiceBox";
import colors from "../config/colors";
import shuffle from "../utility/shuffle";

// Creates a matching game of words and translations. Takes in data array of dictionary word objects.

function MatchingGame({ data, setComplete }) {
  const [shuffledMatches, setshuffledMatches] = useState();

  useEffect(() => {
    const shuffled = shuffle(data);
    setshuffledMatches(shuffled);
  }, []);

  const [selected, setSelected] = useState([]);
  const [currentObjects, setCurrentObjects] = useState([]);
  const [correctObjects, setCorrectObjects] = useState([]);
  const [incorrectObjects, setIncorrectObjects] = useState([]);

  const wordArray = [];
  const translationArray = [];

  data.forEach((element) => {
    wordArray.push(element.word);
    translationArray.push(element.translation);
  });

  const renderChoiceBox = (item, translation) => {
    const title = translation ? item.translation : item.word;
    return (
      <ChoiceBox
        reverse={translation ? true : false}
        data={item}
        title={title}
        onPress={() => {
          setSelected(title);
          checkMatch(title);
        }}
        currentObjects={currentObjects}
        style={[
          correctObjects.includes(title) ? styles.correct : null,
          incorrectObjects.includes(title) ? styles.incorrect : null,
        ]}
      />
    );
  };

  const checkIfComplete = () => {
    if (correctObjects.length === data.length * 2) {
      setComplete(true);
    }
  };

  // Check if current selection is a match for previous selection.
  const checkMatch = (key) => {
    // If object was already part of a correct match, ignore tap.
    if (correctObjects.includes(key)) {
      return;
    }

    // Check if tapped box is a word or translation.
    let keyType = "";
    wordArray.includes(key) ? (keyType = "word") : (keyType = "translation");

    // If this a 3rd tap after a previous attempted match, clear last two selections
    if (currentObjects.length === 2) {
      setIncorrectObjects([]);
      setCurrentObjects([key]);
    }

    // If this is the 2nd tapped object in a sequence, check if it is a match for the last tap.
    if (currentObjects.length === 1) {
      // If the last object is of the same type as current tap, deselect last object and select current object.
      if (
        (keyType === "word" && wordArray.includes(currentObjects[0])) ||
        (keyType === "translation" &&
          translationArray.includes(currentObjects[0]))
      ) {
        currentObjects.shift();
        currentObjects.push(key);
      } else {
        // If it is of a different type than last tap, add it to currentObjects array.
        data.forEach((element) => {
          if (element[keyType] === key) {
            currentObjects.push(key);
            // See if the two words are matches. If so, push to correctObjects array to change style to show user.
            if (
              (keyType === "word" &&
                element.translation === currentObjects[0]) ||
              (keyType === "translation" && element.word === currentObjects[0])
            ) {
              currentObjects.forEach((element) => {
                correctObjects.push(element);
              });
              setCurrentObjects([]);
              checkIfComplete();
            } else {
              // If they aren't a match, change style to show user.
              currentObjects.forEach((element) => {
                incorrectObjects.push(element);
              });
            }
          }
        });
      }
      // If there was no previous tap or it is a new guess, select box.
    } else if (currentObjects.length === 0) {
      currentObjects.push(key);
    }
  };

  if (shuffledMatches === undefined) {
    return <></>;
  } else {
    return (
      <Screen>
        <View style={styles.container}>
          <View style={styles.listContainer}>
            <FlatList
              scrollEnabled={false}
              data={data}
              keyExtractor={(item) => item.word} //has to be unique
              renderItem={({ item }) => renderChoiceBox(item)}
              numColumns={1}
              extraData={selected}
            />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              scrollEnabled={false}
              data={shuffledMatches}
              keyExtractor={(item) => item.translation} //has to be unique
              renderItem={({ item }) => renderChoiceBox(item, true)}
              numColumns={1}
              extraData={selected}
            />
          </View>
        </View>
      </Screen>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  listContainer: {
    flex: 1,
    maxWidth: 250,
    padding: 20,
  },
  correct: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  incorrect: {
    backgroundColor: colors.danger,
    borderColor: colors.danger,
  },
});

export default MatchingGame;
