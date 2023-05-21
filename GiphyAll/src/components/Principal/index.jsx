import Header from '../Header'
import OldSearch from '../OldSearch'
import Search from '../Search'
import { useState, useRef, useContext } from 'react'

import { Link } from 'wouter'
import styled from 'styled-components'
import Heart from '../ui/Heart'
import AuthContext from '../../context/AuthContext'

const Favs = styled.a`
  position: sticky;
  top: 10px;
  color: #fbe5e5;
  transition: color ease-in 0.3s;
  align-self: end;
  z-index: 5;
  &:hover {
    color: red;
  }

  & > svg {
    opacity: 1;
    border-radius: 20px 0 0 20px;
  }
`

const Principal = () => {
  const [keyword, setKeyword] = useState('')
  const [word, setWord] = useState(localStorage.getItem('keyword'))
  const refLast = useRef(null)
  const { isLogin } = useContext(AuthContext)

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
      {isLogin && (
        <Link title="Ver tus gifs favoritos" to="/favs">
          <Favs>
            <Heart />
          </Favs>
        </Link>
      )}

      <div ref={refLast}></div>
    </>
  )
}
export default Principal
