import * as yup from 'yup'
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Necesita agregar su correo')
    .min(10, 'Debe tener más de 10 caracteres')
    .matches(/^\S+@\S+\.\S+$/, 'Ingrese un correo válido'),
  password: yup
    .string()
    .required('Necesita agregar la contraseña')
    .min(10, 'Debe tener más de 10 caracteres')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{10,}$/,
      'Debe tener mayúsculas, minusculas y números'
    )
})
