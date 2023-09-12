export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') return '';
  const filteredSet = Array.from(set)
    .filter((item) => item !== undefined && item.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return filteredSet.join('-');
}
