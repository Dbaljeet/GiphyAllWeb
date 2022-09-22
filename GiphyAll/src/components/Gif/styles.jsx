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
  display: block;
  object-fit: cover;
`

export const Info = styled.p`
  text-align: center;
  font-size: 3rem;
  color: #fff;
  display: box;
`

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
`

export const Go = styled.a`
  text-decoration: none;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  padding: 20px;
  margin: auto;
  background-color: #ff0081;
  color: #ece6e6;
  text-align: center;
  font-size: 1.2rem;
  width: 150px;

  :hover {
    background-color: #c20865;
  }
`

export const GeneralContainer = styled.figure`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  box-sizing: border-box;
  padding: 20px;
  align-items: center;
  background-color: #ff00001d;
  border-radius: 20px;
  min-height: 100px;
  width: 100%;
  transition: transform 100ms ease-in-out;
`
