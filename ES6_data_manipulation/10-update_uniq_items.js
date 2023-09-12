export default function updateUniqueItems(map) {
  if (typeof(map) !== Map) {
    throw new Error('Cannot process');
  }
  for (const [key, value] in map) {
    if (map.get(key) === 1) {
      map.set(key) = 100;
  }
  return map;
  }
}
