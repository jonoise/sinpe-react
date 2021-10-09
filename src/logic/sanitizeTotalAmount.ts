export const sanitizeTotalAmount = (totalAmount: number): number => {
  try {
    const trunc = Math.trunc(totalAmount)
    const plain = `${trunc}`.split('.').join('')
    return Number.parseInt(plain)
  } catch (error) {
    console.log(error)
    return 0
  }
}
