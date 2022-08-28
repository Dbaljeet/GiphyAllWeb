import ListOfGifts from "../components/ListOfGifts";
export default function SearchPage({params}){
    params.keyword = decodeURIComponent(params.keyword)
    return(
        <>
            <h2 className="SearchElement">{params.keyword}</h2>
            <div className="Content">
                <ListOfGifts params={params}></ListOfGifts>
            </div>
        </>
    )
}