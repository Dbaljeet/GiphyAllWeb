import { useEffect, useState } from 'react'
import ListOfGifts from '../components/ListOfGifts'
import useGifs from '../hooks/useGifs'
import Arrow from '../assets/Arrow'
import { ModalPortalError } from '../components/modal/ErrorModal'
import { LoadingImg, Content, Button, Up, MSG } from './Styles'

export default function SearchPage({ params }) {
  const keyword = decodeURIComponent(params.keyword)
  const { loading, gifs, setPage, noData, loadingNextPage } = useGifs({
    keyword,
  })
  const [visible, setVisible] = useState(false)
  const [visibleModalMoreGif, setVisibleModalMoreGif] = useState(true)
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

  useEffect(() => {
    setVisibleModalMoreGif(true)
  }, [keyword])

  const onClose = () => {
    setVisibleModalMoreGif(false)
  }
  return (
    <>
      {loading && <LoadingImg></LoadingImg>}
      <h2 className="SearchElement">{keyword}</h2>

      <Content>
        <ListOfGifts gifs={gifs}></ListOfGifts>
      </Content>

      {loadingNextPage && <LoadingImg></LoadingImg>}

      {noData ? (
        visibleModalMoreGif && (
          <ModalPortalError onClose={onClose}>
            <MSG>No existen más resultados</MSG>
          </ModalPortalError>
        )
      ) : (
        <Button onClick={handlePage}>Ver más</Button>
      )}

      <Up onClick={scrollToTop} visible={visible}>
        <Arrow />
      </Up>
    </>
  )
}
