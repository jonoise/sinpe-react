import create from 'zustand'
import { devtools } from 'zustand/middleware'

export type OptionsStore = {
  manualAddress: boolean
  setManualAddress: (newValue: boolean) => void
}

const useOptions = create<OptionsStore>(
  devtools((set) => ({
    manualAddress: false,
    setManualAddress: (newValue: boolean) =>
      set((state) => ({
        ...state,
        manualAddress: newValue
      }))
  }))
)

export default useOptions
