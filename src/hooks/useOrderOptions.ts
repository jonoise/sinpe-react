import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface IuseOrderOptions {
  totalAmount: number
  user_id?: number | string | null
  order_id?: number | string | null
  products?: object[] | null
  details?: string | null
  service: string
  setOrderOptions: (payload: object) => void
  setTotalAmount: (newAmount: number) => void
}

const useOrderOptions = create<IuseOrderOptions>(
  devtools((set) => ({
    totalAmount: 0,
    user_id: null,
    order_id: null,
    products: null,
    details: null,
    service: 'sinpe',
    setOrderOptions: (payload) =>
      set((state) => ({
        ...state,
        ...payload
      })),
    setTotalAmount: (newAmount) =>
      set((state) => ({
        ...state,
        totalAmount: newAmount
      }))
  }))
)

export default useOrderOptions
