import React from 'react'
export default function Gif ({title, url}) {
    return( 
        <div className='container-Gif'>
            <h4>{title}</h4>
            <img className="container-Gif__Gif" alt="gifs" src={url}/>
        </div>
    )
}