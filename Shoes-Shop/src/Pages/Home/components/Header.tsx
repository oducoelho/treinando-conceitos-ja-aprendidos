import { ShoppingBag } from 'phosphor-react'
import { HeaderContainer } from '../../../styles/pages/Header'
import logo from '../../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../../hook/useCart'

export const Header = () => {
  const { cartQuantity } = useCart()
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <NavLink to="/checkout">
        <div>
          <div>
            <span>Meu carrinho</span>
            <p>{cartQuantity} itens</p>
          </div>
          <ShoppingBag size={30} />
        </div>
      </NavLink>
    </HeaderContainer>
  )
}
