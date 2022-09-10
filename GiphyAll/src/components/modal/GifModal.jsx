import ReactDOM from 'react-dom'
import styled from 'styled-components'

const ContentModal = styled.div`
  position: fixed;
  z-index: 101;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(2px);
  @media screen and (min-width: 900px) {
    bottom: 5%;
    top: 10%;
    left: 30%;
    right: 30%;
    padding-left: 7px;
  }
  @media screen and (max-width: 900px) {
    top: 30%;
    bottom: 0%;
    left: 0%;
    right: 0%;
  }

  background-image: linear-gradient(
    to right top,
    #4382e0,
    #6979ec,
    #9469ef,
    #c14fe8,
    #eb12d5
  );

  animation: Back 0.8s;

  @keyframes Back {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
`

const CloseModal = styled.button.attrs((props) => ({
  onClick: props.onClick,
}))`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 20px;
  width: 32px;
  height: 40px;
  opacity: 1;
  &:before,
  &:after {
    position: absolute;
    content: ' ';
    height: 33px;
    width: 3px;
    top: 10px;
    left: 30px;
    background-color: rgb(255, 250, 250);
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`

const Background = styled.div`
  position: fixed;
  z-index: 100;
  background-color: #000000ba;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: Backgroundd 1s;

  @keyframes Backgroundd {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const ModalGif = ({ children, onClose }) => {
  return (
    <>
      <Background></Background>
      <ContentModal>
        <CloseModal onClick={onClose}></CloseModal>
        <>{children}</>
      </ContentModal>
    </>
  )
}
export const ModalPortalGif = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <ModalGif onClose={onClose}>{children}</ModalGif>,
    document.getElementById('modal-root')
  )
}
