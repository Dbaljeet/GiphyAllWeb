import { Link } from "wouter";
import styled from "styled-components";

const Go = styled(Link)`
  opacity: 0.6;
  cursor: pointer;
  display: flex;
  transition:opacity 2s;
  &:hover {
    opacity:1;
    & > svg {
      -webkit-transform: scale(1.25);
      -moz-transform: scale(1.25);
      -ms-transform: scale(1.25);
      -o-transform: scale(1.25);
      transform: scale(1.25);
    }
  }
  & > svg {
    width: 17rem;
    color: #fff;
    transition: all 2s;
  }
  & > label {
    cursor: pointer;
    position: absolute;
    font-size: 1rem;
    transform: translate3d(80px, 120px, 0);
    color: rgb(2, 2, 2);
    font-family: "Merriweather", serif;
    font-weight: bold;
  }
`;
//svg <!-- License: CC Attribution. Made by epicons: https://epicons.co/ -->
const OldSearch = ({ word }) => {
  return (
    <>
      <Go className="container-s" to={`/search/${word}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="CurrentColor"
            d="M12.375 3C17.1385 3 21 6.86154 21 11.625c0 4.7635-3.8615 8.625-8.625 8.625-1.2296 0-2.40074-.2577-3.461-.7227l-4.29113.7126c-.23879.0396-.48203-.0384-.65319-.2096-.17116-.1711-.24919-.4144-.20954-.6532l.71257-4.2911c-.46497-1.0602-.7227-2.2314-.7227-3.461C3.75001 6.86154 7.61155 3 12.375 3Z"
          />
        </svg>
        <label>Busqueda Pasada</label>
      </Go>
    </>
  );
};
export default OldSearch;
