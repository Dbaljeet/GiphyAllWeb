import React, { useContext } from "react";
import Gif from "./Gif/Gif";
import styled from "styled-components";
import Error from '../assets/Error.svg'
import GifContext from '../context/GifContext'
const MSG = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;

export default function ListOfGifts() {
  const {gifs} = useContext(GifContext)
  return  (
    gifs.map(({ id, title, url }) => (
      <Gif key={id+url} title={title ? title : "Gif sin título"} url={url?url:Error} />
    ))
  );
}
