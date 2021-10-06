import { SinpeProps } from '../types'
import checkCredentialsOrCallback from './checkCredentialsOrCallback'

export default (props: SinpeProps): boolean => {
  // CHECK IF PROPERLY CONFIG
  const CREDENTIALS = checkCredentialsOrCallback(
    props.credentials,
    props.callbackFunction
  )
  if (!CREDENTIALS) {
    return false
  }

  return true
}
