import React, { useEffect, useState } from "react";
import GetGifs from "./services/GetGifs";
import Gif from "./Gif/Gif";
import styled from "styled-components";
const MSG = styled.div`
  position:absolute;
  left:0;
  right:0;
`

export default function ListOfGifts({ keyword, isLoading }) {
  const [gifs, setGifts] = useState([]); //array vacio por defecto
  useEffect(
    function () {
      isLoading(true);
      GetGifs({ keyword }).then((gifs) => {
        isLoading(false);
        setGifts(gifs);
      });
    },
    [keyword]
  );
  return gifs.length > 0
    ? gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title ? title : "Gif sin título"} url={url} />
      ))
    : <MSG>"No se han encontrado resultados"</MSG>;
}
