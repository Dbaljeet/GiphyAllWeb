import React from "react";
import ListOfGifts from "./ListOfGifts";
export default function ContainerList({params}){
    return(
        <>
            <div className={params.keyword} >
            <ListOfGifts params={params}></ListOfGifts>
            </div>
        </>
    )
}