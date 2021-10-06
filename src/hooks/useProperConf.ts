import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface IProperConfig {
  isProperConfig: boolean
  setIsProperConfig: (validInit: boolean) => void
}

const useProperConf = create<IProperConfig>(
  devtools((set) => ({
    isProperConfig: false,
    setIsProperConfig: (validIniti) =>
      set(() => ({
        isProperConfig: validIniti
      }))
  }))
)

export default useProperConf
