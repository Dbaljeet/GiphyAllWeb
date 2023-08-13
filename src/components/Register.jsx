import { useState } from 'react'

import { ModalPortalAuth } from './modal/authModal'

import useUser from '../hooks/useUser'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../schemas/registerSchema'

import { toast } from 'sonner'

import CustomInput from './ui/CustomInput'
import { Go, Form } from './ui'
import { Info, ContentModal } from './Gif/styles'

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
      toast.promise(registerUser(data), {
        loading: 'Cargando...',
        success: 'registro exitoso',
        error: (err) => {
          const strErr = String(err)
          const match = Object.keys(
            JSON.parse(strErr.match(/Error: (.+)/).at(-1))
          )
          return `Por favor valide: ${match}`
        }
      })
      setDisableButton(false)
    } catch (err) {
      setDisableButton(false)
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
          </ContentModal>
        </ModalPortalAuth>
      )}
    </>
  )
}
