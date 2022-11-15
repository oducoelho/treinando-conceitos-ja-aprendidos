import { createContext, ReactNode, useState } from 'react'
import { Product } from '../Pages/Home/index'
import { produce } from 'immer'

export interface CartItem extends Product {
  quantity: number
}

interface CartContextProvaiderProps {
  children: ReactNode
}

interface CartContextType {
  cartItems: Product[]
  addToCart: (product: CartItem) => void
  // removeProduct: (productId: number) => void
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartContextProvaider = ({
  children,
}: CartContextProvaiderProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([])

  const addToCart = (product: CartItem) => {
    const productAlreadyInCart = cartItems.findIndex(
      (cartiItem) => cartiItem.id === product.id,
    )
    const newCart = produce(cartItems, (draft) => {
      if (productAlreadyInCart < 0) {
        draft.push(product)
      } else {
        draft[productAlreadyInCart].quantity += product.quantity
      }
    })
    setCartItems(newCart)
  }
  console.log(cartItems)
  // const removeFromCart = () => {}

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
