import { CredentialsOptions } from '../types'

const checkCredentialsOrCallback = (
  credentials: CredentialsOptions | null | undefined,
  cb: (() => any) | null | undefined
): boolean => {
  if (credentials) {
    if (credentials.api_key && credentials.public_key) {
      return true
    }
  }
  if (cb) {
    return true
  }
  return false
}

export default checkCredentialsOrCallback
