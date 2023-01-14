import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "./Screen";
import ChoiceBox from "./ChoiceBox";
import colors from "../config/colors";
import shuffle from "../utility/shuffle";

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
  const matchArray = [];

  data.forEach((element) => {
    wordArray.push(element.word);
  });

  data.forEach((element) => {
    matchArray.push(element.match);
  });

  const renderChoiceBox = (itemKey) => {
    return (
      <ChoiceBox
        title={itemKey}
        onPress={() => {
          setSelected(itemKey);
          checkMatch(itemKey);
        }}
        currentObjects={currentObjects}
        style={[
          correctObjects.includes(itemKey) ? styles.correct : null,
          incorrectObjects.includes(itemKey) ? styles.incorrect : null,
        ]}
      />
    );
  };

  const checkIfComplete = () => {
    if (correctObjects.length === data.length * 2) {
      setComplete(true);
    }
  };

  const checkMatch = (key) => {
    if (correctObjects.includes(key)) {
      return;
    }

    let keyType = "";
    wordArray.includes(key) ? (keyType = "word") : (keyType = "match");

    if (currentObjects.length === 2) {
      setIncorrectObjects([]);
      setCurrentObjects([key]);
    }

    if (currentObjects.length === 1) {
      if (
        (keyType === "word" && wordArray.includes(currentObjects[0])) ||
        (keyType === "match" && matchArray.includes(currentObjects[0]))
      ) {
        currentObjects.shift();
        currentObjects.push(key);
      } else {
        data.forEach((element) => {
          if (element[keyType] === key) {
            currentObjects.push(key);

            if (
              (keyType === "word" && element.match === currentObjects[0]) ||
              (keyType === "match" && element.word === currentObjects[0])
            ) {
              currentObjects.forEach((element) => {
                correctObjects.push(element);
              });
              setCurrentObjects([]);
              checkIfComplete();
            } else {
              currentObjects.forEach((element) => {
                incorrectObjects.push(element);
              });
            }
          }
        });
      }
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
              renderItem={({ item }) => renderChoiceBox(item.word)}
              numColumns={1}
              extraData={selected}
            />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              scrollEnabled={false}
              data={shuffledMatches}
              keyExtractor={(item) => item.match} //has to be unique
              renderItem={({ item }) => renderChoiceBox(item.match)}
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
