import styled from 'styled-components'
const Input = styled.input`
  margin: auto;
  background-color: #fff;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 90%;
  border: none;
  &::placeholder {
    color: #0009;
  }
  border-bottom: 1px solid #757575;
  &:focus {
    outline: 1px solid #fff;
    background-color: #fff3;
  }
`

const PError = styled.p`
  text-align: center;
`

const formValidation = (errors, errorKey) => {
  return errors[errorKey] ? (
    <PError color="red">{errors[errorKey].message}</PError>
  ) : (
    ''
  )
}

export const CustomInput = ({
  register,
  name,
  errors,
  label = '',
  type,
  disabled = false,
  trigger
}) => {
  return (
    <div>
      <Input
        required
        disabled={disabled}
        type={type}
        error={errors && !!errors[name]}
        id={name}
        label={label}
        placeholder={label}
        variant="outlined"
        {...register(name)}
        {...(trigger ? { onChange: () => trigger && trigger() } : {})}
      />
      {errors && formValidation(errors, name)}
    </div>
  )
}

export default CustomInput
