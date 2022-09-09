import React from 'react'
import SearchIcon from '../assets/SearchIcon.svg'
import { useLocation } from 'wouter' //,
export default function Search({ refLast, keyword, setKeyword, setWord }) {
  const [path, pushLocation] = useLocation()
  //para que se ve el cambio en la keyword por cada palabra
  const handleSubmit = (ev) => {
    ev.preventDefault() //para que no se recargue la pag por apretar enter
    setWord(keyword)
    localStorage.getItem('keyword') !== keyword
      ? localStorage.setItem('keyword', keyword)
      : console.log('pag ya visitada')

    pushLocation(`/search/${keyword}`)

    window.scrollTo({
      top: refLast.current.offsetTop + refLast.current.offsetHeight,
      left: 0,
      behavior: 'smooth',
    })
  }

  const handleChange = (evt) => {
    setKeyword(evt.target.value)
  }

  //el envio de la keyword

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
