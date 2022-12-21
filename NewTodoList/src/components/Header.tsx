import { HeaderContainer } from "../styles/pages/Header"
import Logo from '../assets/Logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
    </HeaderContainer>
  )
}