import styled from 'styled-components'
export const Title = styled.h4`
  color: #cfcfcf;
`
export const ContainerGif = styled.img`
  border: 2px solid rgba(0, 0, 0, 0.089);
  border-radius: 20px;
  width: 100%;
  object-fit: cover;
  margin: auto;
  min-width: 200px;
  max-height: 200px;
`
export const GeneralContainer = styled.figure`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 20px;

  background-color: #ff00001d;
  border-radius: 20px;
  min-width: 300px;
  max-width: 370px;
  width: 100%;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
  :nth-child(1) {
    max-width: 100%;
    margin: auto;
    @media screen and (max-width: 550px) {
      width: 90%;
    }
    @media screen and (min-width: 550px) {
      width: 90%;
      grid-area: 1 / 1 / 2 / 4;
    }
    @media screen and (min-width: 1200px) {
      width: 80%;
      grid-area: 1 / 1 / 2 / 4;
    }
  }
`
