import { banks } from '../info/banks'
import { IuseOrderOptions } from '../hooks/useOrderOptions'
const createMessage = (
  bank: { value: string; label: string },
  order: IuseOrderOptions,
  vendorPhoneNumber: string
) => {
  const bankNumber = banks[bank.value]
  const totalAmount = order.totalAmount
  const details = order.details

  return `+506${bankNumber};?&body=PASE ${totalAmount} ${vendorPhoneNumber} ${details}`
}

export default createMessage
