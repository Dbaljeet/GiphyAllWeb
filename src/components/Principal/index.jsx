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
const Msg = styled.p`
  border: 1px solid #fff8;
  width: 40%;
  padding: 2%;
  margin: 50px 0;
  @media (max-width: 600px) {
    width: auto;
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
        <>
          <p>No existen búsquedas anteriores</p>
          <Msg>
            Importante: Si experimentas que al iniciar sesión o registrarte es
            lento es porque estoy utilizando un servidor free tier, se desactiva
            cada cierto tiempo de inactividad
          </Msg>
        </>
      )}
      {isLogin && (
        <Link to="/favs">
          <Favs title="Ver tus gifs favoritos">
            <Heart />
          </Favs>
        </Link>
      )}

      <div ref={refLast}></div>
    </>
  )
}
export default Principal
