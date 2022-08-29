import React from 'react'
import {ContainerGif, GeneralContainer} from './styles'
export default function Gif ({title, url}) {
    return( 
        <GeneralContainer>
            <h4>{title}</h4>
            <ContainerGif alt="gifs" src={url}/>
        </GeneralContainer>
    )
}