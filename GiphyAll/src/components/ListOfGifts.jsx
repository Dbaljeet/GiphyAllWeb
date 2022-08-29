import React, { useEffect, useState } from "react";
import GetGifs from "./services/GetGifs";
import Gif from "./Gif/Gif";

export default function ListOfGifts({ keyword, isLoading }) {
  const [gifs, setGifts] = useState([]); //array vacio por defecto
  useEffect(
    function () {
      isLoading(true);
      GetGifs({ keyword }).then((gifs) => {
        console.log(gifs.length);
        isLoading(false);
        setGifts(gifs);
      });
    },
    [keyword]
  );
  return gifs.length > 0
    ? gifs.map(({ id, title, url }) => <Gif key={id} title={title} url={url} />)
    : "No se han encontrado resultados";
}
