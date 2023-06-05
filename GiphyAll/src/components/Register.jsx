import { useState } from 'react'

import { ModalPortalAuth } from './modal/authModal'
import { Go, Form, Input, Info2 } from './ui'
import { Info, ContentModal } from './Gif/styles'

import useUser from '../hooks/useUser'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../schemas/registerSchema'
import CustomInput from './ui/CustomInput'

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: { name: '', email: '', password: '' },
    mode: 'onChange',
    resolver: yupResolver(registerSchema)
  })

  const { registerUser } = useUser()

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

  const onSubmit = async (data) => {
    try {
      setDisableButton(true)
      await registerUser(data)
      setDisableButton(false)
      HandleClick()
    } catch (err) {
      setError(err)
      setDisableButton(false)
      setTimeout(() => setError(), 2000)
    }
  }

  return (
    <>
      <Go onClick={HandleClick}>Registrarse</Go>
      {modalVisible && (
        <ModalPortalAuth onClose={HandleClick}>
          <ContentModal>
            <Info>Regístrate</Info>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <CustomInput
                errors={errors}
                register={register}
                name="name"
                label="Nombre"
              />
              <CustomInput
                errors={errors}
                register={register}
                name="email"
                label="Correo"
                type="email"
              />

              <CustomInput
                errors={errors}
                register={register}
                name="password"
                label="Contraseña"
                type="password"
              />
              <CustomInput
                errors={errors}
                register={register}
                name="confirmPassword"
                label="Confirmar contraseña"
                type="password"
              />
              <Go disabled={disableButton} type="submit">
                Enviar
              </Go>
            </Form>
            {error && (
              <Info2>
                {
                  'Error, rellene bien los campos y utilice un email sin registrar'
                }
              </Info2>
            )}
          </ContentModal>
        </ModalPortalAuth>
      )}
    </>
  )
}
