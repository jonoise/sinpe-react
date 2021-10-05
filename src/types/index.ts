export type VendorOptions = {
  phone: string
  callbackUrl: string
}

export type ConfOptions = {
  public_key?: string
  api_key?: string
}

export type SinpeProps = {
  btnClass?: string
  modalClass?: string
  vendor: VendorOptions
  conf: ConfOptions
  order: OrderOptions
}

export type SinpeModalProps = {
  modalClass: string
  onClose: Function
}

export type OrderOptions = {
  amount: number
  products?: object[]
  orderId?: string
}
