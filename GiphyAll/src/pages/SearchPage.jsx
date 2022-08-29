import { useState } from "react";
import ListOfGifts from "../components/ListOfGifts";

import styled from "styled-components";
const LoadingImg = styled.div`
  margin: 20px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #13c1df;
  animation: spin 1s ease infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const Content = styled.div`
  margin-top:50px;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    gap:40px;
    justify-content: center;
  }
  @media screen and (min-width: 800px){
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, auto);
    grid-column-gap: 40px;
    grid-row-gap: 40px;
  }
`;

export default function SearchPage({ params }) {
  params.keyword = decodeURIComponent(params.keyword);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <LoadingImg></LoadingImg>}

      <h2 className="SearchElement">{params.keyword}</h2>
      <Content>
        <ListOfGifts
          keyword={params.keyword}
          isLoading={setLoading}
        ></ListOfGifts>
      </Content>
    </>
  );
}
