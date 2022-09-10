import Header from '../Header'
import OldSearch from '../OldSearch'
import Search from '../Search'
import { useState, useRef } from 'react'
const Principal = () => {
  const [keyword, setKeyword] = useState('')
  const [word, setWord] = useState(localStorage.getItem('keyword'))
  const refLast = useRef(null)
  return (
    <>
      <Header></Header>
      <Search
        refLast={refLast}
        keyword={keyword}
        setKeyword={setKeyword}
        setWord={setWord}
      />
      {word !== '' && word !== null ? (
        <OldSearch word={word}></OldSearch>
      ) : (
        <p>No existen búsquedas anteriores</p>
      )}
      <div ref={refLast}></div>
    </>
  )
}
export default Principal
