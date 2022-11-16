import { useCart } from '../../../hook/useCart'
import { formatMoney } from '../../../utils/formatMoney'

export interface Product {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}
interface ProductProps {
  product: Product
}

export const ShoesBanner = ({ product }: ProductProps) => {
  const { addToCart } = useCart()
  const handleAddToCart = () => {
    const shoesToAdd = {
      ...product,
    }
    addToCart(shoesToAdd)
  }
  const formatPrice = formatMoney(product.price)
  return (
    <div key={product.id}>
      <img src={product.image} alt="" />
      <span>{formatPrice}</span>
      <h2>{product.title}</h2>
      <button onClick={handleAddToCart}>ADICIONAR AO CARRINHO</button>
    </div>
  )
}
