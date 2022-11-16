import PhotoShoes from '../../../assets/tenis.webp'

import { Shoes } from '../../../styles/pages/BuyShoes'
import { ShoesBanner } from './ShoesBanner'

export const BuyShoes = () => {
  const Products = [
    {
      id: 1,
      title: 'Tênis de corrida muito confortavel',
      image: PhotoShoes,
      price: 110,
      quantity: 1,
    },
    {
      id: 2,
      image: PhotoShoes,
      title: 'Tênis de corrida muito confortavel',
      price: 240.9,
      quantity: 1,
    },
    {
      id: 3,
      image: PhotoShoes,
      title: 'Tênis de corrida muito confortavel',
      price: 99.9,
      quantity: 1,
    },
    {
      id: 4,
      image: PhotoShoes,
      title: 'Tênis de corrida muito confortavel',
      price: 250.5,
      quantity: 1,
    },
    {
      id: 5,
      image: PhotoShoes,
      title: 'Tênis de corrida muito confortavel',
      price: 180.9,
      quantity: 1,
    },
    {
      id: 6,
      image: PhotoShoes,
      title: 'Tênis de corrida muito confortavel',
      price: 380.8,
      quantity: 1,
    },
  ]
  return (
    <Shoes>
      {Products.map((product) => (
        <ShoesBanner key={product.id} product={product} />
      ))}
    </Shoes>
  )
}
