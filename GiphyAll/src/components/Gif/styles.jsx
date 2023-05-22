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
  border-radius: 20px;
  min-height: 100px;
  width: 100%;
  transition: transform 100ms ease-in-out;
  position: relative;

  color: ${(props) => (props.favorite ? '#d72b2b85;' : '#fff8;')};
  background-color: ${(props) =>
    props.favorite ? '#ff000061;' : '#ff00001d;;'};

  &:hover > button > svg {
    opacity: 1;
  }

  & > button > svg:hover {
    color: ${(props) => (props.favorite ? '#fff8;' : '#d72b2b85;')};
  }
`

export const ButtonFav = styled.button`
  color: inherit;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 20px 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media (max-width: 500px) {
    & > svg {
      opacity: 1;
    }
  }
`

export const Go2 = styled.button`
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
  cursor: pointer;
`
