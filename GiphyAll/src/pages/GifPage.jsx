import { useContext } from 'react'
import GifContext from '../context/GifContext'
const GifPage = () => {
  const { gif } = useContext(GifContext)
  return <>{}</>
}
export default GifPage
