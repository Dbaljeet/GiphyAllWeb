import { useContext, useEffect, useState, useCallback } from 'react'
import GetGifs from '../services/GetGifs'
import GifContext from '../context/GifContext'
import GetGif from '../services/GetGif'
const INITIAL_PAGE = 0
const useGifs = ({ keyword } = { keyword: null }) => {
  const gifContext = useContext(GifContext)
  const { gifs, setGifs, setGif } = gifContext

  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [noData, setNodata] = useState(false)

  useEffect(
    function () {
      setLoading(true)
      GetGifs({ keyword }).then((gifs) => {
        gifs.length > 0 ? setNodata(false) : setNodata(true)
        setGifs(gifs)
        setLoading(false)
      })
      return setGifs([])
    },
    [keyword]
  )

  useEffect(() => {
    if (page == INITIAL_PAGE) return
    setLoadingNextPage(true)
    GetGifs({ keyword, page }).then((NextGifs) => {
      NextGifs.length == 0 ? setNodata(true) : setNodata(false)
      setGifs((prevGifs) => prevGifs.concat(NextGifs))
      setLoadingNextPage(false)
    })
  }, [keyword, page])

  const getGif = useCallback(({ id }) => {
    GetGif({ id }).then((data) => setGif(data))
  }, [])

  return {
    loading,
    page,
    gifs,
    noData,
    setPage,
    loadingNextPage,
    getGif
  }
}
export default useGifs
