const KEY = '4TXKRpbqXMYo4RrAEbeQmHb7EZAezL3F&q'
export default function GetGif({ id }) {
  const apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${KEY}`
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response
      return data
    })
}
