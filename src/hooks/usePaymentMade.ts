import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface IPaymentMade {
  isPaymentMade: boolean
  setPaymentMade: (wasMade: boolean) => void
}

const usePaymentMade = create<IPaymentMade>(
  devtools((set) => ({
    isPaymentMade: false,
    setPaymentMade: (wasMade) =>
      set(() => ({
        isPaymentMade: wasMade
      }))
  }))
)

export default usePaymentMade
