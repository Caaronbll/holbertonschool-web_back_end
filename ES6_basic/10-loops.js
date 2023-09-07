export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    const value2 = appendString + value;
    newArray.push(value2);
  }

  return newArray;
}
