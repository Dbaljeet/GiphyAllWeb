import React, { useContext } from 'react'
import Gif from './Gif/Gif'
import Error from '../assets/Error.svg'
import GifContext from '../context/GifContext'

export default function ListOfGifts() {
  const { gifs } = useContext(GifContext)
  return gifs.map(({ id, title, url, import_datetime, rating }) => (
    <Gif
      key={id + url}
      title={title ? title : 'Gif sin título'}
      url={url ? url : Error}
      import_datetime={import_datetime ? import_datetime : 'sin fecha'}
      rating={rating ? rating : 'sin categoría'}
      id={id}
    />
  ))
}
