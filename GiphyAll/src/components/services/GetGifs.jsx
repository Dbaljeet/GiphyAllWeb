const KEY = '4TXKRpbqXMYo4RrAEbeQmHb7EZAezL3F&q'
const LIMIT = 7
export default function GetGifs ({keyword}) {
    
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}=${keyword}&limit=${LIMIT}&offset=0&rating=pg-13&lang=en`;
    return fetch(apiURL)
        .then( res => res.json())
        .then(response => {
            const {data} = response;
            const gifs = data.map( image => {
            const {title, id} = image; //no es necesario pasar {images} pq en este caso usaremos solo una resolución
            const {url} = image.images.downsized_medium;
            return {title, id, url};
            })
            return gifs
        })
}