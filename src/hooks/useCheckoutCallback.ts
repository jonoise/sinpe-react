import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { OrderOptions } from '../types'

interface ICheckoutCallback {
  cb: ((order: OrderOptions) => any) | null | undefined
  setCb: (cb: (() => any) | null | undefined) => void
}

const useVendorPhoneNumber = create<ICheckoutCallback>(
  devtools((set) => ({
    cb: null,

    setCb: (f) =>
      set(() => ({
        cb: f
      }))
  }))
)

export default useVendorPhoneNumber
