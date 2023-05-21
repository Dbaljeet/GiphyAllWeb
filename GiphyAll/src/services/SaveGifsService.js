import Cookies from 'js-cookie'
const url = import.meta.env.VITE_URL_BACKEND
export default async function SaveGifsService({ gifs }) {
  const apiURL = `${url}/api/gifs/refresh`
  return fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Cookies.get('jwt')
    },
    body: JSON.stringify({
      gifs
    })
  })
    .then((res) => res.json())
    .then((response) => {
      return response
    })
}
