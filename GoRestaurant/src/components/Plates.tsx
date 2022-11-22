import { Checkout, Context, PlatesContainer } from "../styles/pages/Plates"
import food1 from '../assets/food1.png'
import { Pen, Trash } from "phosphor-react"

export const Plates = () => {
  return (
    <PlatesContainer>
      <div>
        <img src={food1} alt="" />

        <Context>
          <h1>Ao Molho</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, dolor repellendus</p>
          <span>R$ 19,90</span>
        </Context>

        <Checkout>
          <div>
            <Pen size={20}/>
          </div>
          <div>
            <Trash size={20}/>
          </div>
        </Checkout>
      </div>
    </PlatesContainer>
  )
}
