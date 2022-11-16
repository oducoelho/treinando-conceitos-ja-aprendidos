import { useCart } from '../../hook/useCart'
import { CheckoutContainer, Finish } from '../../styles/pages/Checkout'
import { formatMoney } from '../../utils/formatMoney'
import { ShoesContainer } from './components/ShoesContainer'

export const Checkout = () => {
  const { cartItems, cartItemsTotal, cleanCart } = useCart()

  const formatPrice = formatMoney(cartItemsTotal)

  const handleFinish = () => {
    alert('Parabens pelas as suas novas aquisisoes!! volte sempre')
    cleanCart()
  }
  return (
    <CheckoutContainer>
      {cartItems.length <= 0 && <h1>O seu carrinho está vazio</h1>}
      {cartItems.map((item) => (
        <ShoesContainer key={item.id} product={item} />
      ))}
      <Finish>
        <button onClick={handleFinish}>FINALIZAR PEDIDO</button>
        <span>
          <strong>TOTAL</strong>
          {formatPrice}
        </span>
      </Finish>
    </CheckoutContainer>
  )
}
