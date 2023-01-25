// Returns an element from an array based on that element's id.

const getElementFromId = (array, identifier, id) => {
  let data;
  array.forEach((element) => {
    if (element[identifier] === id) {
      data = element;
    }
  });

  return data;
};

export default getElementFromId;
