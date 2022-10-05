import { useContext, useEffect } from 'react'
import GifContext from '../context/GifContext'
import useGifs from '../hooks/useGifs'
import styled from 'styled-components'

const IMG = styled.img`
  object-fit: cover;
  width: 300px;
  border-radius: 6px;
  padding: 40px 0;
  max-width: 1100px;
  max-height: 90vh;
  @media screen and (min-width: 600px) {
    width: 70%;
  }
`
const Info = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ContentImg = styled.div`
  text-align: center;
  width: 100%;
  min-height: 50vh;
`
const GoSource = styled.a`
  background-color: #f0efef;
  border-radius: 40px;
  padding: 20px 40px;
  max-width: 300px;
  margin: auto;
  font-size: 1.5rem;
  text-decoration: none;
  &:hover {
    background-color: #fff;
  }
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
      <Info>
        <h2>título: {gif.title}</h2>
        <h3>clasificación: {gif.rating}</h3>
        <h3>
          Fecha de subida:{' '}
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
      </Info>
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
