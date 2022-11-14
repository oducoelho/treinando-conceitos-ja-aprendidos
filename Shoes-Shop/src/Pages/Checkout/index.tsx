import { CheckoutContainer, Finish, PartOfTheCheckout, Product } from "../../styles/pages/Checkout"
import PhotoShoes from '../../assets/tenis.webp'
import { MinusCircle, PlusCircle, Trash } from "phosphor-react"
export const Checkout = () => {
  return (
    <CheckoutContainer>
      <Product>
        <div>
          <img src={PhotoShoes} alt="" />
          <div>
            <span>Tenis de corrida super confortavel</span>
            <p>R$ 250,5</p>
          </div>
        </div>
        <PartOfTheCheckout>
          <div> {/*<MinusCircle />*/} -  2  +{/*<PlusCircle  />*/} </div>
          <span>R$ 250,5</span>
          <Trash />
        </PartOfTheCheckout>
      </Product>

      <Finish>
        <button>FINALIZAR PEDIDO</button>
        <span><strong>TOTAL</strong>R$ 500,00</span>
      </Finish>
    </CheckoutContainer>
  )
}
