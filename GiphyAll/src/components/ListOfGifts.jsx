/* eslint-disable multiline-ternary */
import React, { useContext } from 'react'
import Gif from './Gif/Gif'
import { Masonry } from 'masonic'
import GifContext from '../context/GifContext'
import styled from 'styled-components'
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
const GifCard = ({ data }) => <Gif props={data} />
export default function ListOfGifts() {
  const { gifs } = useContext(GifContext)
  return (
    <>
      {gifs.length > 0 ? (
        <Container>
          <Maso>
            <Masonry
              key={gifs[0].id}
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
