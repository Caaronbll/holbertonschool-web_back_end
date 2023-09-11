export default function hasValuesFromArray(set = new Set(), array = []) {
  return array.every((value) => set.has(value));
}
