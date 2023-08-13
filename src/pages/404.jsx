import { Link } from 'wouter'
import styled from 'styled-components'
import { Go } from '../components/Gif/styles'
const Content = styled.div`
  margin: auto;
  display: flex;
  text-align: center;
  flex-direction: column;
`

const Go2 = styled(Go)`
  background-color: #6a51a7;
  margin-bottom: 100px;
`
const Error = () => {
  return (
    <>
      <Content>
        Error 404 :(
        <Link href="/">
          <Go2>Volver</Go2>
        </Link>
      </Content>
    </>
  )
}
export default Error
