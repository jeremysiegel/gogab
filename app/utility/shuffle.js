import arrayEquals from "./arrayEquals";

export default function shuffle(array) {
  let shuffledArray = [...array];
  let currentIndex = array.length;
  let randomIndex;

  if (array.length === 0) return;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[currentIndex],
    ];
  }

  return shuffledArray;
}
