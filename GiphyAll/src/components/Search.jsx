import React, { useEffect } from 'react'
import SearchIcon from '../assets/SearchIcon.svg'
import { useLocation } from 'wouter' //,
import debounce from 'just-debounce-it'
export default function Search({ refLast, keyword, setKeyword, setWord }) {
  const [path, pushLocation] = useLocation()
  //para que se ve el cambio en la keyword por cada palabra
  const handleSubmit = (ev) => {
    if (keyword === '') return
    if (ev) ev.preventDefault()
    setWord(keyword)
    localStorage.getItem('keyword') !== keyword
      ? localStorage.setItem('keyword', keyword)
      : console.log('pag ya visitada')

    pushLocation(`/search/${keyword}`)

    setTimeout(function () {
      window.scrollTo({
        top: refLast.current.offsetTop + refLast.current.offsetHeight,
        left: 0,
        behavior: 'smooth'
      })
    }, 100)
  }

  useEffect(() => {
    const x = debounce(() => handleSubmit(), 1500)
    x()
    return () => x.cancel()
  }, [keyword])

  const handleChange = (evt) => {
    setKeyword(evt.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="buscar"
        onChange={handleChange}
        type="text"
        value={keyword}
      ></input>
      <button type="submit">
        <img src={SearchIcon}></img>
      </button>
    </form>
  )
}
