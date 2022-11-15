import PhotoShoes from '../assets/tenis.webp'

// import { Home } from '../Pages/Home'
import { DataContainer } from './ProductDta'

export const PhotoShoess = () => {
  const Products = [
    {
      id: 1,
      title: 'Expresso Tradicional',
      image: PhotoShoes,
      price: 9.9,
      quantity: 1,
    },
    {
      id: 2,
      image: PhotoShoes,
      title: 'Expresso Americano',
      price: 9.9,
      quantity: 1,
    },
    {
      id: 3,
      image: PhotoShoes,
      title: 'Expresso Cremoso',
      price: 9.9,
      quantity: 1,
    },
    {
      id: 4,
      image: PhotoShoes,
      title: 'Expresso Gelado',
      price: 9.9,
      quantity: 1,
    },
    {
      id: 5,
      image: PhotoShoes,
      title: 'Café com Leite',
      price: 9.9,
      quantity: 1,
    },
    {
      id: 6,
      image: PhotoShoes,
      title: 'Latte',
      price: 9.9,
      quantity: 1,
    },
  ]

  return (
    <DataContainer>
      <h1>Meus Tenis</h1>

      <div>
        {Products.map((product) => {
          console.log(product)
          return <h1 key={product.id}>ola</h1>
          /* <Home key={product.id} product={product} /> */
        })}
      </div>
    </DataContainer>
  )
}
