import React from 'react'
import {ContainerGif, GeneralContainer, Title} from './styles'
export default function Gif ({title, url}) {
    return( 
        <GeneralContainer>
            <Title>{title}</Title>
            <ContainerGif alt="gifs" src={url}/>
        </GeneralContainer>
    )
}