import styled from 'styled-components'

export const Go = styled.button`
  text-decoration: none;
  font-family: 'Helvetica', 'Arial', sans-serif;
  display: inline-block;
  font-size: 1em;
  padding: 1em 2em;
  margin: auto;
  -webkit-appearance: none;
  appearance: none;
  background: rgba(11, 2, 23, 0.2);
  color: #fff;
  border-radius: 4px;
  border: 1px solid #fff4;
  position: relative;
  transition: all ease-in 0.2s;
  font-size: 1.2rem;
  &:focus {
    outline: 0;
  }
  margin-top: 20px;
  width: 90%;
  max-width: 200px;
  cursor: ${(props) => (props.isLoading ? 'wait;' : 'pointer;')};
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 90%;
  margin: 20px auto;
  gap: 10px;
`

export const Input = styled.input`
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
export const Info2 = styled.p`
  text-align: center;
  color: #fff;
  display: box;
  padding: 10px;
`
