const joinData = {
  innerJoin: (array1, array2, key) => {
    return array1.flatMap((item1) => {
      const matchedItems = array2.filter((item2) => item1[key] === item2[key]);
      return matchedItems.map((matchedItem) =>
        Object.assign({}, item1, matchedItem)
      );
    });
  },

  leftJoin: (array1, array2, key) => {
    return array1.flatMap((item1) => {
      const matchedItems = array2.filter((item2) => item1[key] === item2[key]);
      if (matchedItems.length === 0) {
        return [item1];
      } else {
        return matchedItems.map((matchedItem) =>
          Object.assign({}, item1, matchedItem)
        );
      }
    });
  },

  rightJoin: (array1, array2, key) => {
    return array2.flatMap((item2) => {
      const matchedItems = array1.filter((item1) => item1[key] === item2[key]);
      if (matchedItems.length === 0) {
        return [item2];
      } else {
        return matchedItems.map((matchedItem) =>
          Object.assign({}, matchedItem, item2)
        );
      }
    });
  },

  fullJoin: (array1, array2, key) => {
    const innerJoin = joinData.innerJoin(array1, array2, key);
    const leftJoin = joinData.leftJoin(array1, array2, key);
    const rightJoin = joinData.rightJoin(array1, array2, key);

    return leftJoin.concat(
      rightJoin.filter((rightItem) => {
        return !innerJoin.some(
          (innerItem) => innerItem[key] === rightItem[key]
        );
      })
    );
  },
};

export default joinData;
