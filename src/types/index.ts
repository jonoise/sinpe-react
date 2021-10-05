export type ConfOptions = {
  public_key: string
  api_key: string
}

export type OrderOptions = {
  amount: number
  products?: object[]
  orderId?: string
  details?: string
}

export type SinpeProps = {
  vendorPhoneNumber: string
  order: OrderOptions
  conf?: ConfOptions
  callbackFunction?: Function
  btnClass?: string
  modalClass?: string
}

/////////////////////
// ↓ MODAL TYPES ↓ //
/////////////////////

export type SinpeModalProps = {
  modalClass: string
  onClose: Function
}
