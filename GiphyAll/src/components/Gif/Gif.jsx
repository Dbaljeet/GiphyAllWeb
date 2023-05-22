import { useState, useContext, useEffect, useRef } from 'react'

import GifContext from '../../context/GifContext'
import AuthContext from '../../context/AuthContext'

import {
  ContainerGif,
  ContentModal,
  GeneralContainer,
  Title,
  Info,
  Go,
  ButtonFav,
  Go2
} from './styles'

import { ModalPortalGif } from '../modal/GifModal'

import { Link } from 'wouter'
import Heart from '../ui/Heart.jsx'

export default function Gif({ props, cond, setCond, userGif, setUserGif }) {
  const [modalVisible, setModalVisible] = useState(false)
  const { title, import_datetime, rating, id } = props
  const image = props.images.downsized_medium.url
  const open = useRef(false)
  const disabled = useRef(false)

  const { setGif } = useContext(GifContext)
  const { isLogin } = useContext(AuthContext)

  const HandleClick = () => {
    setModalVisible((prev) => {
      return !prev
    })
    if (!open.current) {
      open.current = false
    } else {
      setGif(props)
      open.current = true
    }
  }
  const handleFav = (ev) => {
    ev.stopPropagation()
    if (userGif.includes(id)) {
      setUserGif(userGif.filter((gif) => gif !== id))
    } else {
      setUserGif(userGif.concat(id))
    }
  }

  useEffect(() => {
    setCond(userGif.includes(id))
  }, [userGif])

  useEffect(() => {
    modalVisible
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible')
  }, [modalVisible])

  return (
    <>
      <GeneralContainer
        onClick={HandleClick}
        favorite={cond}
        title="Abrir modal"
      >
        <Title>{title}</Title>
        <ContainerGif alt={`gif '${title}'`} src={image} />
        {isLogin && (
          <ButtonFav
            onClick={handleFav}
            title={`${cond ? 'Quitar de favoritos' : 'Agregar a favoritos'}`}
          >
            <Heart />
          </ButtonFav>
        )}
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

            {isLogin &&
              (cond ? (
                <Go2 onClick={handleFav} disabled={disabled}>
                  Eliminar de favoritos
                </Go2>
              ) : (
                <Go2 onClick={handleFav}>Agregar a favoritos</Go2>
              ))}

            <img src={image} />
          </ContentModal>
        </ModalPortalGif>
      )}
    </>
  )
}
