import { useState } from 'react'
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
export default function Gif({ title, url, import_datetime, rating, id }) {
  const [modalVisible, setModalVisible] = useState(false)
  const HandleClick = () => {
    modalVisible ? setModalVisible(false) : setModalVisible(true)
  }
  return (
    <>
      <GeneralContainer onClick={HandleClick}>
        <Title>{title}</Title>
        <ContainerGif alt={`gif '${title}'`} src={url} />
      </GeneralContainer>
      {modalVisible && (
        <ModalPortalGif onClose={HandleClick}>
          <ContentModal>
            <Info>{title}</Info>
            <Info>fecha: {import_datetime}</Info>
            <Info>clasificación: {rating}</Info>
            <Link href={`/Gif/${id}`}>
              <Go>Ver más</Go>
            </Link>
          </ContentModal>
        </ModalPortalGif>
      )}
    </>
  )
}
