import { useEffect, useContext, useRef } from 'react'
import GifContext from '../context/GifContext'
import ListOfGifts from '../components/ListOfGifts'
import GetGif from '../services/GetGif'
export default function Favorites() {
  const { userGif, setGifs, gifs } = useContext(GifContext)
  const error = useRef(false)
  const refScroll = useRef(null)

  const getGifs = async () => {
    setGifs([])
    try {
      const res = userGif.map((gifId) => GetGif({ id: gifId }))
      await Promise.all(res).then((gif) =>
        setGifs((prev) => {
          if (prev) return prev.concat(gif)
        })
      )
    } catch (err) {
      error.current = true
    }
  }

  useEffect(() => {
    setTimeout(function () {
      window.scrollTo({
        top: refScroll.current.offsetTop + refScroll.current.offsetHeight,
        left: 0,
        behavior: 'smooth'
      })
    }, 500)
  }, [])

  useEffect(() => {
    getGifs()
  }, [userGif])

  if (error.current) return <></>

  return (
    <>
      <h1 ref={refScroll}>Tus Gifs</h1>
      {gifs?.length > 0 ? <ListOfGifts keyword="myFavoritesGifs" /> : <></>}
    </>
  )
}
