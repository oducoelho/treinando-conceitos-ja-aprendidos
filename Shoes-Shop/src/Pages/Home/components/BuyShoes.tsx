import PhotoShoes from '../../../assets/tenis.webp'
import tenis2 from '../../../assets/tenis2.jpg'
import tenis3 from '../../../assets/tenis3.webp'
import tenis4 from '../../../assets/tenis4.webp'
import tenis5 from '../../../assets/tenis5.webp'
import tenis6 from '../../../assets/tenis6.webp'

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
      image: tenis2,
      title: 'Tênis Vans oldSchool',
      price: 240.9,
      quantity: 1,
    },
    {
      id: 3,
      image: tenis3,
      title: 'Tênis Vans de corrida',
      price: 499.9,
      quantity: 1,
    },
    {
      id: 4,
      image: tenis4,
      title: 'Tênis Vans oldSchool allBack',
      price: 240.9,
      quantity: 1,
    },
    {
      id: 5,
      image: tenis5,
      title: 'Tênis Nike original de corrida',
      price: 200,
      quantity: 1,
    },
    {
      id: 6,
      image: tenis6,
      title: 'Tênis Adidas social',
      price: 250,
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
