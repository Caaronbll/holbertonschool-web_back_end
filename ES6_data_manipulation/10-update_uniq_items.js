export default function updateUniqueItems(map) {
  if (typeof(map) !== Map) {
    throw new Error('Cannot process');
  }
  for (const key in map) {
    if (map.get(key) === 1) {
      map.set(key) = 100;
    }
  return map;
  }
}
