const KEY = '4TXKRpbqXMYo4RrAEbeQmHb7EZAezL3F&q'
const LIMIT = 12
export default function GetGifs({ keyword, page = 0 }) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}=${keyword}&limit=${LIMIT}&offset=${
    page * LIMIT
  }&rating=pg-13&lang=en`
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response
      let gifs = data.map((image) => {
        return image
      })
      return gifs
    })
}
