const KEY = "4TXKRpbqXMYo4RrAEbeQmHb7EZAezL3F&q";
const LIMIT = 7;
export default function GetGifs({ keyword, page = 0 }) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}=${keyword}&limit=${LIMIT}&offset=${
    page * LIMIT
  }&rating=pg-13&lang=en`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      let gifs = data.map((image) => {
        const { title, id } = image; //no es necesario pasar {images} pq en este caso usaremos solo una resolución
        const { url } = image.images.downsized_medium;
        return { title, id, url };
      });
      if (gifs.length == 0) {
        gifs = [{
          id: "sin-id",
          title: "No se encontraron resultados"
        }];
      }
      return gifs;
    });
}
