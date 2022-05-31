import React from "react";
import ListOfGifts from "../components/ListOfGifts";
export default function SearchPage({params}){
    return(
        <>
            <div className="Content" >
                <ListOfGifts params={params}></ListOfGifts>
            </div>
        </>
    )
}