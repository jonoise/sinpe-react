import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface IVendorPhone {
  current: string
  setCurrent: (number: string) => void
}

const useVendorPhoneNumber = create<IVendorPhone>(
  devtools((set) => ({
    current: '',
    setCurrent: (number) =>
      set(() => ({
        current: number
      }))
  }))
)

export default useVendorPhoneNumber
