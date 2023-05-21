import { useState } from 'react'
import { ModalPortalAuth } from './modal/authModal'
import { Go, Form, Input, Info2 } from './ui'
import { Info, ContentModal } from './Gif/styles'
import useUser from '../hooks/useUser'

export const Login = () => {
  const { loginUser } = useUser()
  const [modalVisible, setModalVisible] = useState(false)
  const [disableButton, setDisableButton] = useState(false)
  const [error, setError] = useState()

  const HandleClick = () => {
    if (modalVisible) {
      setModalVisible(false)
      document.body.style.overflow = 'auto'
    } else {
      setModalVisible(true)
      document.body.style.overflow = 'hidden'
    }
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    try {
      setDisableButton(true)
      const fields = Object.fromEntries(new window.FormData(ev.target))
      await loginUser(fields)
    } catch (err) {
      setError(err)
      setDisableButton(false)
      setTimeout(() => setError(), 2000)
    }
  }

  return (
    <>
      <Go onClick={HandleClick}>Iniciar sesión</Go>
      {modalVisible && (
        <ModalPortalAuth onClose={HandleClick}>
          <ContentModal>
            <Info>Iniciar Sesión</Info>

            <Form onSubmit={handleSubmit}>
              <Input name="email" placeholder="Correo" type="email" />
              <Input name="password" placeholder="Contraseña" type="password" />
              <Go disabled={disableButton} type="submit">
                Enviar
              </Go>
            </Form>
            {error && <Info2>{'Error, rellene bien los campos'}</Info2>}
          </ContentModal>
        </ModalPortalAuth>
      )}
    </>
  )
}
