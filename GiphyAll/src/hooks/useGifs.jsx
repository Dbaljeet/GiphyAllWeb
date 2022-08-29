import { useEffect, useState } from "react";
import GetGifs from "../components/services/GetGifs";
const INITIAL_PAGE = 0;
const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [gifs, setGifs] = useState([]);
  const [loadingNextPage, setLoadingNextPage] = useState(false) 

  useEffect(
    function () {
      setLoading(true);
      GetGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  );

  useEffect(()=>{
    if (page == INITIAL_PAGE) return
    setLoadingNextPage(true)
    GetGifs({keyword, page}).then(NextGifs=>{
        setGifs(prevGifs => prevGifs.concat(NextGifs))
        setLoadingNextPage(false)
    })
  },[keyword, page])

  return {
    loading,
    page,
    gifs,
    setPage
  };
};
export default useGifs;