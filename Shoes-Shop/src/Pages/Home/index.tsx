import { Products } from "../../data/ProductData"
import { HomeContainer, Product } from "../../styles/pages/Home"
import { Header } from "./components/Header"

export const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Product>
        {Products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt="" />
            <h2>{product.title}</h2>
            <span>{product.price}</span>
            <button>ADICIONAR AO CARRINHO</button>
          </div>
        ))}
      </Product>
    </HomeContainer>
  )
}
