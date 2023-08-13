import Cookies from 'js-cookie'

const url = import.meta.env.VITE_URL_BACKEND
export default async function GetUserService() {
  const apiURL = `${url}/api/user/get`
  return fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Cookies.get('jwt')
    }
  })
    .then((res) => res.json())
    .then((response) => {
      return response
    })
}
