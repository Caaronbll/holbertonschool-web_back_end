export default function updateUniqueItems(map) {
  if (typeof(map) == Map) {
    for (map[key] in map) {
        if (map[key] == 1) {
            map[key] = 100;
        }
    }
    return map;
  } else {
    throw new Error('Cannot process');
  }
}
