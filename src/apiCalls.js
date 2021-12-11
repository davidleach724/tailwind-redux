export const fetchData = () => {
  return fetch("https://api.github.com/search/issues?q=repo:Anarios/return-youtube-dislike+type:issue")
  .then(response => response.json())
}

// https://api.github.com/search/issues?q=repo:Anarios/return-youtube-dislike+type:issue

// https://api.github.com/repos/Anarios/return-youtube-dislike/issues?state=all

// 'https://api.github.com/Anarios/return-youtube-dislike/issues?state=all?page=2&per_page=100'