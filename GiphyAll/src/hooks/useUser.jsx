import Cookies from 'js-cookie'
import { useContext } from 'react'

import LoginService from '../services/LoginService'
import RegisterService from '../services/RegisterService'

import AuthContext from '../context/AuthContext'
import GifContext from '../context/GifContext'
import GetUserService from '../services/GetUserService'
import SaveGifsService from '../services/SaveGifsService'

const useUser = () => {
  const { setUserGif, userGif } = useContext(GifContext)
  const { setIsLogin } = useContext(AuthContext)

  const registerUser = async (fields) => {
    const res = await RegisterService(fields)
    if (res.error) throw new Error(res.error)
    Cookies.set('jwt', res.token, { expires: 1 })
    setIsLogin(true)
    setUserGif(res.data.gifs)
    Cookies.set('gifs', [])
  }

  const loginUser = async (fields) => {
    const res = await LoginService(fields)
    if (res.error) throw new Error(res.error)
    Cookies.set('jwt', res.token, { expires: 1 })
    setIsLogin(true)
    setUserGif(res.data.gifs)
    Cookies.set('gifs', res.data.gifs)
  }

  const logoutUser = () => {
    Cookies.remove('jwt')
    setUserGif([])
    setIsLogin(false)
    Cookies.remove('gifs')
  }

  const saveGifs = async (gifs) => {
    const jwt = Cookies.get('jwt')
    if (!jwt) throw new Error('Error inicia sesión')
    const res = await SaveGifsService({ gifs })
    //console.log(res)
  }

  const getUser = async () => {
    const jwt = Cookies.get('jwt')
    if (!jwt) throw new Error('Error inicia sesión')
    const res = await GetUserService()
    const { gifs } = res
    return gifs
  }

  return { registerUser, loginUser, logoutUser, getUser, saveGifs }
}
export default useUser
