const url = import.meta.env.VITE_URL_BACKEND
export default async function LoginService({ email, password }) {
  console.log(url)
  const apiURL = `${url}/api/user/login`
  return fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then((res) => res.json())
    .then((response) => {
      return response
    })
}
