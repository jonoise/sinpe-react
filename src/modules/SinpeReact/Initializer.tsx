import { useEffect } from 'react'
import useOrderOptions from '../../hooks/useOrderOptions'
import useCredentialsOptions from '../../hooks/useCredentialsOptions'
import useVendorPhoneNumber from '../../hooks/useVendorPhoneNumber'
import useCheckoutCallback from '../../hooks/useCheckoutCallback'
import useRedirectUrl from '../../hooks/useRedirectUrl'
import { SinpeProps } from '../../types'
import initSinpe from '../../logic/initSinpe'

import useProperConf from '../../hooks/useProperConf'
import { sanitizeTotalAmount } from '../../logic/sanitizeTotalAmount'

const Initializer = (props: SinpeProps) => {
  const setProperConfig = useProperConf((state) => state.setIsProperConfig)
  // DECLARING SETTERS
  const setOrderOptions = useOrderOptions((state) => state.setOrderOptions)
  const setTotalAmount = useOrderOptions((state) => state.setTotalAmount)
  const setCredentials = useCredentialsOptions((state) => state.setCredentials)
  const setVendorNumber = useVendorPhoneNumber((state) => state.setCurrent)
  const setCb = useCheckoutCallback((state) => state.setCb)
  const setRedirectUrl = useRedirectUrl((state) => state.setRedirectUrl)

  useEffect(() => {
    // INITIALIZING DATA
    setCredentials(props.credentials)
    setVendorNumber(props.vendorPhoneNumber)
    setOrderOptions(props.order)
    setCb(props.callbackFunction)
    setRedirectUrl(props.redirectUrl)

    // SANITIZE TOTAL AMOUNT
    const s_totalAmount = sanitizeTotalAmount(props.order.totalAmount)
    setTotalAmount(s_totalAmount)

    // VALIDATE PROPS
    const validInit = initSinpe(props)
    setProperConfig(validInit)
  }, [props])
  return null
}

export default Initializer