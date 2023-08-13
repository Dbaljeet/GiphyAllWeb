const url = import.meta.env.VITE_URL_BACKEND

export default async function RegisterService({ name, email, password }) {
  const apiURL = `${url}/api/user/register`
  return fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  })
    .then((res) => res.json())
    .then((response) => {
      return response
    })
}
