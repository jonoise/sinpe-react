import create from 'zustand'
import { devtools } from 'zustand/middleware'

export type OptionsStore = {
  manualAddress: boolean
  email: string | null
  phone: string | null
  setManualAddress: (newValue: boolean) => void
}

const useOptions = create<OptionsStore>(
  devtools((set) => ({
    manualAddress: false,
    email: null,
    phone: null,
    setManualAddress: (newValue: boolean) =>
      set((state) => ({
        ...state,
        manualAddress: newValue
      }))
  }))
)

export default useOptions
