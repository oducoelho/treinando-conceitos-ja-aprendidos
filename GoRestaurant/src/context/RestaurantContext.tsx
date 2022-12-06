import { createContext, ReactNode, useCallback, useState } from "react"
import { api } from "../lib/axios"

interface Plates {
  id: number
  description: string
  title: string
  price: number
  link: string
  }

interface CreatePlateInput {
  description: string
  price: number
  link: string
  title: string
}
interface RestaurantContextType {
  createPlate: (data: CreatePlateInput) => Promise<void>
}

interface RestaurantContextProviderProps {
  Children: ReactNode 
}

export const RestaurantContext = createContext({} as RestaurantContextType)

export const RestaurantContextProvider = ({ children }: RestaurantContextProviderProps) => {
  const [newPlate, setNewPlate] = useState<Plates[]>([])

  const createPlate = useCallback(
    async (data: CreatePlateInput) => {
      const { description, price, link, title } = data

      const response = await api.post('transactions', {
        description,
        price,
        link,
        title
      })
      setNewPlate((state) => [response.data, ...state])
    },
    [],
  )

  return (
    <RestaurantContext.Provider value={{ createPlate }}>
      {children}
    </RestaurantContext.Provider>
  )
}