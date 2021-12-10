export const fetchData = () => {
  return fetch("https://api.github.com/search/issues?q=repo:Anarios/return-youtube-dislike+type:issue")
  .then(response => response.json())
}