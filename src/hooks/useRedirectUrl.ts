import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface IRedirectUrl {
  redirectUrl: string | undefined
  setRedirectUrl: (url: string | undefined) => void
}

const useRedirectUrl = create<IRedirectUrl>(
  devtools((set) => ({
    redirectUrl: undefined,
    setRedirectUrl: (url) =>
      set(() => ({
        redirectUrl: url
      }))
  }))
)

export default useRedirectUrl
