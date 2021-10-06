import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface ICredentials {
  public_key: string | null
  private_key: string | null
  setCredentials: (payload: object | undefined) => void
}

const useCredentialsOptions = create<ICredentials>(
  devtools((set) => ({
    public_key: null,
    private_key: null,
    setCredentials: (payload) =>
      set((state) => ({
        ...state,
        ...payload
      }))
  }))
)

export default useCredentialsOptions
