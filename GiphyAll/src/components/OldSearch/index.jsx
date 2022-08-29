import { Link } from "wouter";
import styled from "styled-components";

const Go = styled(Link)`
  cursor: pointer;
  font-size:2.5rem;
  transition:opacity 2s;
  outline:1px solid #fff;
  padding:7px;
  color:#fff;
  text-decoration:none;
  @media screen and (min-height:550px){
    margin-top:80px;
  }
`;
//svg <!-- License: CC Attribution. Made by epicons: https://epicons.co/ -->
const OldSearch = ({ word }) => {
  return (
    <>
      <Go className="container-s" to={`/search/${word}`}>
        Busqueda anterior
      </Go>
    </>
  );
};
export default OldSearch;
