export const fetchData = () => {
  return fetch("https://api.github.com/turingschool/curriculum/issues")
  .then(response => response.json())
}