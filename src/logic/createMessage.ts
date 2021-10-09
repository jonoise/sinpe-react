import { banks } from '../info/banks'

const createMessage = (
  bank: { value: string; label: string },
  totalAmount: number | null,
  vendorPhoneNumber: string | null
) => {
  const bankNumber = banks[bank.value]
  return `+506${bankNumber}?body=PASE ${totalAmount} ${vendorPhoneNumber} COMPRA CREADORES.CASH`
}

export default createMessage
