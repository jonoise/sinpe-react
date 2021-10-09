import { SinpeProps } from '../types'
import checkCredentialsOrCallback from './checkCredentialsOrCallback'
import { checkTotalAmount } from './checkTotalAmount'

export default (props: SinpeProps): boolean => {
  // CHECK IF PROPERLY CONFIG
  const CREDENTIALS = checkCredentialsOrCallback(
    props.credentials,
    props.callbackFunction
  )
  const VALID_AMOUNT = checkTotalAmount(props.order.totalAmount)
  if (!CREDENTIALS || !VALID_AMOUNT) {
    return false
  }

  return true
}
