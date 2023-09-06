export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var new_task = true;
    var new_task2 = false;
  }

  return [task, task2];
}
