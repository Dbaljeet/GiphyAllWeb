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
export default function Gif({ props }) {
  const { title, import_datetime, rating, id } = props
  const image = props.images.downsized_medium.url
  const [modalVisible, setModalVisible] = useState(false)
  const gifContext = useContext(GifContext)
  const { setGif } = gifContext
  const HandleClick = () => {
    setGif(props)
    modalVisible ? setModalVisible(false) : setModalVisible(true)
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
              onClick={() => window.scroll({ top: 10 })}
            >
              <Go>Ver más</Go>
            </Link>
          </ContentModal>
        </ModalPortalGif>
      )}
    </>
  )
}
