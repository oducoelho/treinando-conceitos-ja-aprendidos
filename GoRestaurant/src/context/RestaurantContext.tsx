import { createContext, ReactNode, useState } from "react"

interface PlatesItems {
  id: string;
  title: string;
  subTitle: string;
  price: number;
}

interface RestaurantContextType {
  newPlate: PlatesItems[]
  addPlate: (plate: PlatesItems) => void
}

interface RestaurantContextProviderProps {
  Children: ReactNode 
}

export const RestaurantContext = createContext({} as RestaurantContextType)

export const RestaurantContextProvider = ({ children }: RestaurantContextProviderProps) => {
  const [newPlate, setNewPlate] = useState([])

  const addPlate = (data) => {
    setNewPlate([
      ... newPlate, 
       data
    ])
  }
  console.log(newPlate)

  return (
    <RestaurantContext.Provider value={{ addPlate, newPlate }}>
      {children}
    </RestaurantContext.Provider>
  )
}