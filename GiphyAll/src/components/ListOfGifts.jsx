import React, {useEffect,useState} from 'react';
import GetGifs from './GetGifs';
import Gif from './Gif';

export default function ListOfGifts ({ params }) {
  const {keyword} = params;
  const [gifs, setGifts] = useState([]); //array vacio por defecto
  useEffect(function () {
        GetGifs({keyword})
          .then(gifs => setGifts(gifs))
  }, [keyword])
  return gifs.map(({id, title, url}) =>
    <Gif
      key={id} 
      title={title} 
      url={url}
    />
  )
}
