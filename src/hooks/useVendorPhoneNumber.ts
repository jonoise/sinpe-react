import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface IVendorPhone {
  current: string | null
  setCurrent: (number: string) => void
}

const useVendorPhoneNumber = create<IVendorPhone>(
  devtools((set) => ({
    current: null,
    setCurrent: (number) =>
      set(() => ({
        current: number
      }))
  }))
)

export default useVendorPhoneNumber
