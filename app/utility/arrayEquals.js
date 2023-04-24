// Tests if two arrays have the same elements in the same order.

export default function arrayEquals(arrayA, arrayB) {
  let a = [];
  let b = [];
  try {
    a = arrayA.map((word) => word.toLowerCase());
    b = arrayB.map((word) => word.toLowerCase());
  } catch (error) {
    a = arrayA;
    b = arrayB;
  }
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}
