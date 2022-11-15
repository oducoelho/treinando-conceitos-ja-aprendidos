import { ShoppingBag } from 'phosphor-react'
import { HeaderContainer } from '../../../styles/pages/Header'
import logo from '../../../assets/logo-ignite.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <div>
        <div>
          <span>Meu carrinho</span>
          <p>2 itens</p>
        </div>
        <ShoppingBag size={30} />
      </div>
    </HeaderContainer>
  )
}
