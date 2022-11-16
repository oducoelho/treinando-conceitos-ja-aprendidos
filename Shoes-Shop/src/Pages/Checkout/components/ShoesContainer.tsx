import {
  CheckoutContainer,
  PartOfTheCheckout,
  Products,
} from '../../../styles/pages/Checkout'
import { TrashSimple  } from 'phosphor-react'
import { useCart } from '../../../hook/useCart'
import { CartItem } from '../../../context/CartContext'
import { formatMoney } from '../../../utils/formatMoney'

interface ProductsInTheCartProps {
  product: CartItem
}

export const ShoesContainer = ({ product }: ProductsInTheCartProps) => {
  const { removeCartItem, changeCartItemQuantity } = useCart()

  const formatPrice = formatMoney(product.price)

  const handleIncrease = () => {
    changeCartItemQuantity(product.id, 'increase')
  }

  const handleDecrease = () => {
    changeCartItemQuantity(product.id, 'decrease')
  }

  const productTotal = product.price * product.quantity

  const formatTotal = formatMoney(productTotal)

  return (
    <CheckoutContainer>
      <Products>
        <div>
          <img src={product.image} alt="" />
          <div>
            <span>{product.title}</span>
            <p>{formatPrice}</p>
          </div>
        </div>

        <PartOfTheCheckout>
          <div>
            <div>
              <span onClick={handleDecrease}>-</span>
              <span>{product.quantity}</span>
              <span onClick={handleIncrease}>+</span>
            </div>
          </div>
          <span>{formatTotal}</span>
          <span>
            <TrashSimple  size={25} onClick={() => removeCartItem(product.id)} />
          </span>
        </PartOfTheCheckout>
      </Products>
    </CheckoutContainer>
  )
}
