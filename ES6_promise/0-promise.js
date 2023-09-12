export default function getResponseFromAPI() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => data);
}