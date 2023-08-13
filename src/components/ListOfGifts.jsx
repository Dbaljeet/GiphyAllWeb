/* eslint-disable multiline-ternary */
import React, { useContext, useEffect, useRef, useState } from 'react'
import Cookies from 'js-cookie'
import Gif from './Gif/Gif'
import { Masonry } from 'masonic'
import GifContext from '../context/GifContext'
import AuthContext from '../context/AuthContext'
import styled from 'styled-components'
import useUser from '../hooks/useUser'
const Container = styled.main`
  min-height: 100vh;
  width: 100%;
`
const Maso = styled.div`
  padding: 8px;
  width: 100%;
  max-width: 960px;
  margin: 163px auto 0;
  box-sizing: border-box;
`
export default function ListOfGifts({ keyword = '' }) {
  const { gifs, userGif } = useContext(GifContext)
  const { isLogin } = useContext(AuthContext)
  const { saveGifs } = useUser()
  const first = useRef(true)

  const Save = async (userGif) => {
    await saveGifs(userGif)
  }

  useEffect(() => {
    Cookies.set('gifs', userGif)
    try {
      if (isLogin & !first.current) {
        Save(userGif)
      }
    } catch (err) {
      alert('f', err)
    }
    first.current = false
  }, [userGif])

  const GifCard = ({ data }) => {
    const { userGif, setUserGif } = useContext(GifContext)
    const [cond, setCond] = useState(false)
    return (
      <Gif
        props={data}
        cond={cond}
        setCond={setCond}
        userGif={userGif}
        setUserGif={setUserGif}
      />
    )
  }

  return (
    <>
      {gifs?.length > 0 ? (
        <Container>
          <Maso>
            <Masonry
              key={gifs[0].id + keyword}
              items={gifs}
              columnGutter={10}
              columnWidth={300}
              overscanBy={2}
              render={GifCard}
            />
          </Maso>
        </Container>
      ) : (
        ''
      )}
    </>
  )
}
