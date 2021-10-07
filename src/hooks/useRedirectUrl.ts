import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface IProperConfig {
  redirectUrl: string | undefined
  setRedirectUrl: (url: string | undefined) => void
}

const useProperConf = create<IProperConfig>(
  devtools((set) => ({
    redirectUrl: undefined,
    setRedirectUrl: (url) =>
      set(() => ({
        redirectUrl: url
      }))
  }))
)

export default useProperConf
