
import { useContext } from 'react'
import { RestaurantContext } from '../context/RestaurantContext'

export const useRestaurant = () => {
  const context = useContext(RestaurantContext)
  return context
}