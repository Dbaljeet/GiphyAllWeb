import { useContext, useEffect } from 'react'
import GifContext from '../context/GifContext'
import useGifs from '../hooks/useGifs'
import styled from 'styled-components'

const IMG = styled.img`
  object-fit: cover;
  width: 300px;
  border-radius: 6px;
  @media screen and (min-width: 600px) {
    width: 70%;
  }
`
const ContentImg = styled.div`
  text-align: center;
  width: 100%;
  min-height: 50vh;
`
const GoSource = styled.a`
  text-decoration: none;
`
const GifPage = ({ params }) => {
  const { gif } = useContext(GifContext)
  const { getGif } = useGifs()
  useEffect(() => {
    if (gif.title === undefined) {
      const id = decodeURIComponent(params.id)
      getGif({ id })
    }
  }, [])
  return (
    <>
      <h2>título: {gif.title}</h2>
      <h3>clasificación: {gif.rating}</h3>
      <h3>
        Fecha subida:{' '}
        {gif.import_datetime
          ? gif.import_datetime
          : 'fecha de subida desconocida'}
      </h3>
      {gif.source ? (
        <GoSource target="_blank" href={gif.source}>
          fuente
        </GoSource>
      ) : (
        ''
      )}

      {gif.images ? (
        <ContentImg>
          <IMG loading="lazy" src={gif.images.downsized_medium.url} />
        </ContentImg>
      ) : (
        ''
      )}
    </>
  )
}
export default GifPage
