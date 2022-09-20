import { useState, useContext } from 'react'
import GifContext from '../../context/GifContext'
import {
  ContainerGif,
  ContentModal,
  GeneralContainer,
  Title,
  Info,
  Go,
} from './styles'
import { ModalPortalGif } from '../modal/GifModal'
import { Link } from 'wouter'
import { useEffect } from 'react'
export default function Gif({ props }) {
  const { title, import_datetime, rating, id } = props
  const image = props.images.downsized_medium.url
  const [modalVisible, setModalVisible] = useState(false)
  const gifContext = useContext(GifContext)
  const { setGif } = gifContext
  const HandleClick = () => {
    setGif(props)
    if (modalVisible) {
      setModalVisible(false)
      document.body.style.overflow = 'auto'
    } else {
      setModalVisible(true)
      document.body.style.overflow = 'hidden'
    }
  }
  return (
    <>
      <GeneralContainer onClick={HandleClick}>
        <Title>{title}</Title>
        <ContainerGif alt={`gif '${title}'`} src={image} />
      </GeneralContainer>
      {modalVisible && (
        <ModalPortalGif onClose={HandleClick}>
          <ContentModal>
            <Info>{title}</Info>
            <Info>fecha: {import_datetime}</Info>
            <Info>clasificación: {rating}</Info>
            <Link
              href={`/Gif/${id}`}
              onClick={() => {
                window.scroll({ top: 10 })
                document.body.style.overflow = 'auto'
              }}
            >
              <Go>Ver más</Go>
            </Link>
            <img src={image} />
          </ContentModal>
        </ModalPortalGif>
      )}
    </>
  )
}
