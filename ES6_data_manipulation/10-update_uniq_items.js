export default function updateUniqueItems(map) {
  if (typeof(map) !== Map) {
    throw new Error('Cannot process');
  }
  for (key in map) {
    if (map[key] === 1) {
      map.update(key === 100);
    }
  return map;
  }
}
