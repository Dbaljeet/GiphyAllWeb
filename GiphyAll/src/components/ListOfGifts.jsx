import React from "react";
import Gif from "./Gif/Gif";
import styled from "styled-components";
const MSG = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;

export default function ListOfGifts({ gifs }) {
  return gifs.length > 0 ? (
    gifs.map(({ id, title, url }) => (
      <Gif key={id+url} title={title ? title : "Gif sin título"} url={url} />
    ))
  ) : (
    <MSG>"No se han encontrado resultados"</MSG>
  );
}
