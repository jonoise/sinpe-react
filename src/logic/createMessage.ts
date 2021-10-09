import { banks } from '../info/banks'

const createMessage = (
  bank: { value: string; label: string },
  totalAmount: number,
  vendorPhoneNumber: string
) => {
  const bankNumber = banks[bank.value]
  return `+506${bankNumber}?body=PASE ${totalAmount} ${vendorPhoneNumber} COMPRA CREADORES.CASH`
}

export default createMessage
