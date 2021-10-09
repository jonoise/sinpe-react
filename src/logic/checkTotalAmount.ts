import { sanitizeTotalAmount } from './sanitizeTotalAmount'

export const checkTotalAmount = (totalAmount: number) => {
  if (totalAmount === 0) {
    console.log('React-Sinpe: El monto total no puede ser 0.')
    return false
  }
  const sanitized = sanitizeTotalAmount(totalAmount)
  return sanitized
}
