import * as yup from 'yup'
export const registerSchema = yup.object().shape({
  name: yup.string().required('Debe agregar su nombre').min(2, 'Debe ser >2'),
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
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas no son iguales')
    .required('Necesita repetir la contraseña')
})
