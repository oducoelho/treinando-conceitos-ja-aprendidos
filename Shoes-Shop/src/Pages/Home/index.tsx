import { useCart } from '../../hook/useCart'
import { HomeContainer, Shoes } from '../../styles/pages/Home'
import { Header } from './components/Header'

export interface Product {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}

interface ShoesProps {
  product: Product
}

export const Home = ({ product }: ShoesProps) => {
  const { addToCart } = useCart()
  const handleAddToCart = () => {
    const shoesToAdd = {
      ...product,
    }
    addToCart(shoesToAdd)
  }
  return (
    <HomeContainer>
      <Header />
      <Shoes>
        <div key={product.id}>
          <img src={product.image} alt="" />
          <h2>{product.title}</h2>
          <span>{product.price}</span>
          <button onClick={handleAddToCart}>ADICIONAR AO CARRINHO</button>
        </div>

        {/* {Products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt="" />
            <h2>{product.title}</h2>
            <span>{product.price}</span>
            <button onClick={handleAddToCart}>ADICIONAR AO CARRINHO</button>
          </div>
        ))} */}
      </Shoes>
    </HomeContainer>
  )
}
