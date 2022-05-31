import React from "react";
import ListOfGifts from "../components/ListOfGifts";
export default function SearchPage({params}){
    return(
        <>
            <div className={params.keyword} >
                <ListOfGifts params={params}></ListOfGifts>
            </div>
        </>
    )
}