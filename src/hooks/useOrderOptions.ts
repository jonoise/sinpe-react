import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { OrderOptions } from '../types'

const useOrderOptions = create<OrderOptions>(
  devtools((set) => ({
    totalAmount: 0,
    user_id: null,
    order_id: null,
    products: null,
    details: null,
    service: 'sinpe',
    setOrderOptions: (payload: object) =>
      set((state) => ({
        ...state,
        ...payload
      }))
  }))
)

export default useOrderOptions
