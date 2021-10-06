import useOrderOptions from '../hooks/useOrderOptions'
import useCredentialsOptions from '../hooks/useCredentialsOptions'
import useVendorPhoneNumber from '../hooks/useVendorPhoneNumber'
import useCheckoutCallback from '../hooks/useCheckoutCallback'
import checkCredentials from './checkCredentialsOrCallback'
import { SinpeProps } from '../types'

export default (props: SinpeProps): boolean => {
  // DECLARING SETTERS
  const setOrderOptions = useOrderOptions((state) => state.setOrderOptions)
  const setCredentials = useCredentialsOptions((state) => state.setCredentials)
  const setVendorNumber = useVendorPhoneNumber((state) => state.setCurrent)
  const setCb = useCheckoutCallback((state) => state.setCb)

  const CHECKED = checkCredentials(props.credentials, props.callbackFunction)

  if (!CHECKED) {
    return false
  }

  setCredentials(props.credentials)
  setVendorNumber(props.vendorPhoneNumber)
  setOrderOptions(props.order)
  setCb(props.callbackFunction)
  return true
}
