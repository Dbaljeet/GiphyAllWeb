import React from "react";
import {Link} from "wouter"
import styled from "styled-components";
const Head = styled.header`
  display: flex;
  cursor: pointer;
`
const Header = () =>{
    return(
        <>
            <Head>
                <Link to="/">
                    <h1>GiphyAll</h1>
                </Link>
            </Head>
            <h2>Busqueda de gifs</h2>
        </>
    )
};
export default Header;