import {
  CheckoutContainer,
  Finish,
  PartOfTheCheckout,
  Product,
} from '../../styles/pages/Checkout'
import { MinusCircle, PlusCircle, Trash } from 'phosphor-react'
import { useCart } from '../../hook/useCart'
export const Checkout = () => {
  const { cartItems, removeCartItem } = useCart()
  return (
    <CheckoutContainer>
      {cartItems.length <= 0 && <h1>Parece que seu carrinho está vazio :( </h1>}
      {cartItems.map((products) => (
        <Product key={products.id}>
          <div>
            <img src={products.image} alt="" />
            <div>
              <span>{products.title}</span>
              <p>{products.price}</p>
            </div>
          </div>

          <PartOfTheCheckout>
            <div>
              {' '}
              {/* <MinusCircle /> */} - 2 +{/* <PlusCircle  /> */}{' '}
            </div>
            <span>total</span>

            <Trash onClick={() => removeCartItem(products.id)} />
          </PartOfTheCheckout>
        </Product>
      ))}

      <Finish>
        <button>FINALIZAR PEDIDO</button>
        <span>
          <strong>TOTAL</strong>R$ 500,00
        </span>
      </Finish>
    </CheckoutContainer>
  )
}
