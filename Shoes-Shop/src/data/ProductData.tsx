import PhotoShoes from '../assets/tenis.webp'
import { Home } from '../Pages/Home'
export const PhotoShoess = () => {
  const Products = [
    {
      id: crypto.randomUUID(),
      title: 'Tenis de corrida super confortavel',
      price: 240.9,
      image: PhotoShoes,
    },
    {
      id: crypto.randomUUID(),
      title: 'Tenis de corrida super confortavel',
      price: 140.0,
      image: PhotoShoes,
    },
    {
      id: crypto.randomUUID(),
      title: 'Tenis de corrida super confortavel',
      price: 200,
      image: PhotoShoes,
    },
    {
      id: crypto.randomUUID(),
      title: 'Tenis de corrida super confortavel',
      price: 99.9,
      image: PhotoShoes,
    },
    {
      id: crypto.randomUUID(),
      title: 'Tenis de corrida super confortavel',
      price: 120,
      image: PhotoShoes,
    },
    {
      id: crypto.randomUUID(),
      title: 'Tenis de corrida super confortavel',
      price: 350.5,
      image: PhotoShoes,
    },
  ]
  return (
    <div>
      {Products.map((product) => (
        <Home key={product.id} product={product} />
      ))}
    </div>
  )
}
