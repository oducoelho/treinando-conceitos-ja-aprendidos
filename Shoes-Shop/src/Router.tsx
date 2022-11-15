import { Route, Routes } from 'react-router-dom'
import { Checkout } from './Pages/Checkout'
import { Home } from './Pages/Home'
import { Success } from './Pages/Success'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}
