import React, { useEffect, useState } from 'react'
import useUser from '../hooks/useUser'
import Cookies from 'js-cookie'
const Context = React.createContext({})

export const GifContextProvider = ({ children }) => {
  const [gifs, setGifs] = useState([])
  const [gif, setGif] = useState([])
  const [userGif, setUserGif] = useState([])
  const { getUser } = useUser()

  const getGif = async () => {
    try {
      const gifsAux = Cookies.get('gifs')
      if (gifsAux) {
        setUserGif(gifsAux.split(','))
      } else {
        const gifs = await getUser()
        setUserGif(gifs)
        Cookies.set('gifs', gifs)
      }
    } catch (err) {
      //console.log(err, 'err get gif on context')
    }
  }

  useEffect(() => {
    getGif()
  }, [])

  return (
    <Context.Provider
      value={{ gifs, setGifs, gif, setGif, userGif, setUserGif }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
