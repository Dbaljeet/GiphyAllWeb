import { useEffect, useState } from 'react'
import ListOfGifts from '../components/ListOfGifts'
import useGifs from '../hooks/useGifs'
import Arrow from '../assets/Arrow'

import styled from 'styled-components'
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
`

const Content = styled.div`
  margin-top: 50px;
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
  }
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-template-rows: 400px;
    gap: 40px;
    grid-auto-flow: row;
    justify-items: center;
  }
`
const Button = styled.button`
  cursor: pointer;
  border-radius: 4px;
  border: none;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 80px;
  background-color: #ff0081;
  color: #ece6e6;
`

const Up = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 0;
  right: 15px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 80px;
  border-radius: 4px;
  border: none;
  background-color: #ff0081;
  color: #e4d6d6;
  display: ${(props) => (props.visible ? 'block' : 'none')};
`
export default function SearchPage({ params }) {
  const keyword = decodeURIComponent(params.keyword)
  const { loading, gifs, setPage, noData, loadingNextPage } = useGifs({
    keyword,
  })
  const [visible, setVisible] = useState(false)

  const handlePage = () => {
    setPage((prevPage) => prevPage + 1)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    scrolled > 300 ? setVisible(true) : setVisible(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
    return () => {
      window.removeEventListener('scroll', toggleVisible)
    }
  }, [])
  return (
    <>
      {loading && <LoadingImg></LoadingImg>}
      <h2 className="SearchElement">{keyword}</h2>

      <Content>
        <ListOfGifts gifs={gifs}></ListOfGifts>
      </Content>

      {loadingNextPage && <LoadingImg></LoadingImg>}

      {noData ? <p>no data</p> : <Button onClick={handlePage}>Ver más</Button>}

      <Up onClick={scrollToTop} visible={visible}>
        <Arrow />
      </Up>
    </>
  )
}
