import ReactDOM from 'react-dom'
import styled from 'styled-components'

const ContentModal = styled.div`
  position: fixed;
  z-index: 101;
  padding-top: 2px;

  backdrop-filter: blur(2px);
  @media screen and (min-width: 765px) {
    bottom: 5%;
    top: 10%;
    left: 10%;
    right: 10%;
    padding-left: 7px;
  }
  @media screen and (max-width: 765px) {
    top: 30%;
    bottom: 0%;
    left: 0%;
    right: 0%;
  }

  &.close {
    width: 32px;
    height: 40px;
    opacity: 1;
  }
  &.close:before,
  .close:after {
    position: absolute;
    content: ' ';
    height: 33px;
    width: 3px;
    top: 10px;
    background-color: rgb(255, 250, 250);
  }
  &.close:before {
    transform: rotate(45deg);
  }
  &.close:after {
    transform: rotate(-45deg);
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

export const ModalError = ({ children, onClose }) => {
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
export const ModalPortalError = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <ModalError onClose={onClose}>{children}</ModalError>,
    document.getElementById('modal-root')
  )
}
