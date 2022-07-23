import participante from '../../assets/images/participante.png'
import { Header as Container } from './styles'

export const Header = () => (
  <Container>
    <div role="img" aria-label="raffler logo"/>
    <img src={participante} alt="participant with a gift in your hands" />    
  </Container>
)