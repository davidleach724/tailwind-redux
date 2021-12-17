// export const fetchData = (status) => {
//   return fetch(`https://api.github.com/repos/Anarios/return-youtube-dislike/issues?state=${status}`)
//   .then(response => response.json())
// }



// curl -I "https://api.github.com/search/code?q=addClass+user:mozilla"

// curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&page=14"




export const fetchData = () => {
  return fetch("https://api.github.com/repos/rails/rails/issues")
  .then(response => console.log(response))
}

// https://api.github.com/search/issues?q=repo:Anarios/return-youtube-dislike+type:issue

// https://api.github.com/repos/Anarios/return-youtube-dislike/issues?state=all

// 'https://api.github.com/Anarios/return-youtube-dislike/issues?state=all?page=2&per_page=100'


//https://api.github.com/search/issues?q=repo:Anarios/return-youtube-dislike+type:issue&page=1&per_page=30