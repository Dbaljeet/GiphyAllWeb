import React, { useContext, useEffect } from 'react'
import { Link } from 'wouter'
import styled from 'styled-components'
import { Login } from '../Login'
import { Register } from '../Register'

import AuthContext from '../../context/AuthContext'
import { Go } from '../ui'
import useUser from '../../hooks/useUser'

const Head = styled.header`
  display: flex;
  width: 100%;
`
const Title = styled.h1`
  margin: auto;
  cursor: pointer;
`

const PTitulo = styled.h2`
  margin-top: 50px;
  @media screen and (max-height: 600px) {
    margin-top: 0;
  }
`

const SECTION = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  max-width: 500px;
  margin: auto;
  gap: 40px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  cursor: auto;
`
const Section2 = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

const Header = () => {
  const { isLogin } = useContext(AuthContext)

  useEffect(() => {
    document.body.style.overflow = 'auto'
  }, [isLogin])

  const { logoutUser } = useUser()

  return (
    <>
      <Head>
        <SECTION>
          <Link to="/">
            <Title>GiphyAll</Title>
          </Link>

          {!isLogin ? (
            <Section2>
              <Login />
              <Register />
            </Section2>
          ) : (
            <>
              <Section2>
                <Go onClick={logoutUser}>Cerrar sesión</Go>
              </Section2>
            </>
          )}
        </SECTION>
      </Head>
      <PTitulo>Búsqueda de gifs</PTitulo>
    </>
  )
}
export default Header
