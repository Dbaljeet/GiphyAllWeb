import React, { useContext } from 'react'
import Gif from './Gif/Gif'
import Error from '../assets/Error.svg'
import GifContext from '../context/GifContext'

export default function ListOfGifts() {
  const { gifs } = useContext(GifContext)
  return gifs.map((props) => <Gif key={props.id + props.url} props={props} />)
}
