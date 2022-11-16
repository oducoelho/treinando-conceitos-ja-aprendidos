import { ShoppingBag } from 'phosphor-react'
import { HeaderContainer } from '../../../styles/pages/Header'
import logo from '../../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <NavLink to="/checkout" title="carrinho">
        <div>
          <div>
            <span>Meu carrinho</span>
            <p>2 itens</p>
          </div>
          <ShoppingBag size={30} />
        </div>
      </NavLink>
    </HeaderContainer>
  )
}
