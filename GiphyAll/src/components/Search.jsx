import React from 'react';
import {useLocation} from "wouter"; //, 
export default function Search ({keyword, setKeyword}) {

    const [path, pushLocation] = useLocation();
    //para que se ve el cambio en la keyword por cada palabra
    const handleSubmit = ev =>{
        ev.preventDefault() //para que no se recargue la pag por apretar enter
        localStorage.getItem("keyword") !== keyword ? (localStorage.setItem("keyword",keyword)):(console.log("pag ya visitada"))
        pushLocation(`/search/${keyword}`);
    }
    
    const handleChange = (evt) =>{
        setKeyword(evt.target.value);
    }

    //el envio de la keyword
    
    return (
    <form onSubmit={handleSubmit}>
        <input placeholder="busqueda" onChange={handleChange} type="text" value={keyword}></input>
    </form>
    )
}