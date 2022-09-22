import styled from 'styled-components'
export const LoadingImg = styled.div`
  margin: 20px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #13c1df;
  animation: spin 1s ease infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`

export const Content = styled.div``
export const Button = styled.button`
  cursor: pointer;
  border-radius: 4px;
  border: none;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 80px;
  background-color: #ff0081;
  color: #ece6e6;
`

export const Up = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 0;
  right: 15px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 80px;
  border-radius: 4px;
  border: none;
  background-color: #ff0081;
  color: #e4d6d6;
  display: ${(props) => (props.visible ? 'block' : 'none')};
`

export const MSG = styled.p`
  @media screen and (max-width: 800px) {
    margin-top: 30%;
  }
  margin-top: 10%;
  text-align: center;
  font-size: 3rem;
  color: #fff;
`
