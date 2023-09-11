export default function cleanSet(set, startString) {
  const filteredSet = Array.from(set).filter((item) => item.startsWith(startString))
  .map(value => value.slice(startString.length));
  return filteredSet.join('-');
}