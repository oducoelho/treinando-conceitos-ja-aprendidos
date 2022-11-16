import { HomeContainer } from '../../styles/pages/Home'
import { BuyShoes } from './components/BuyShoes'
import { Header } from './components/Header'

export const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <BuyShoes />
    </HomeContainer>
  )
}
