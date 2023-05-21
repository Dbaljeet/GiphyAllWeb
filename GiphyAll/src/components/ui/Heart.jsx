import styled from 'styled-components'
const Svg = styled.svg`
  background-color: #0009;
  border-radius: 20px 0;
  padding: 10px;
  opacity: 0;
  position: relative;
  right: 0;
  bottom: -5px;
`

export default function Heart() {
  return (
    <Svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6957 3C14.6522 3 12.887 4.197 12 5.943C11.113 4.197 9.34783 3 7.30435 3C4.37391 3 2 5.457 2 8.481C2 11.505 3.81739 14.277 6.16522 16.554C8.51304 18.831 12 21 12 21C12 21 15.3739 18.867 17.8348 16.554C20.4609 14.088 22 11.514 22 8.481C22 5.448 19.6261 3 16.6957 3Z"
        fill="currentColor"
      />
    </Svg>
  )
}
