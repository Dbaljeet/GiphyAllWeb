import React from "react";
import {Link} from "wouter"
import styled from "styled-components";
const Head = styled.header`
  display: flex;
  cursor: pointer;
`
const Titulo = styled.h1`
    margin:20px;
`
const PTitulo = styled.h2`
    margin-top:50px;
    @media screen and (max-height: 600px ){
        margin-top:0;
    }
`

const Header = () =>{
    return(
        <>
            <Head>
                <Link to="/">
                    <Titulo>GiphyAll</Titulo>
                </Link>
            </Head>
            <PTitulo>Busqueda de gifs</PTitulo>
        </>
    )
};
export default Header;