import { useState } from 'react'

import { ModalPortalAuth } from './modal/authModal'
import { Go, Form, Info2 } from './ui'
import { Info, ContentModal } from './Gif/styles'
import useUser from '../hooks/useUser'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../schemas/loginSchema'
import CustomInput from './ui/CustomInput'
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid }
  } = useForm({
    defaultValues: { email: '', password: '' },
    mode: 'onChange',
    resolver: yupResolver(loginSchema)
  })

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

  const onSubmit = async (data) => {
    try {
      setDisableButton(true)
      await loginUser(data)
    } catch (err) {
      setError(err)
      setDisableButton(false)
      setTimeout(() => setError(), 2000)
    }
  }
  console.log(errors)
  return (
    <>
      <Go onClick={HandleClick}>Iniciar sesión</Go>
      {modalVisible && (
        <ModalPortalAuth onClose={HandleClick}>
          <ContentModal>
            <Info>Iniciar Sesión</Info>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <CustomInput
                name="email"
                label="Correo"
                errors={errors}
                register={register}
                type="email"
                defaultValue=""
              />
              <CustomInput
                errors={errors}
                register={register}
                name="password"
                label="Contraseña"
                type="password"
                defaultValue=""
              />
              <Go
                isDisabled={!isDirty || !isValid}
                isLoading={disableButton}
                type="submit"
              >
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
