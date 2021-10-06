export type CredentialsOptions = {
  public_key: string | null
  api_key: string | null
}

export type OrderOptions = {
  totalAmount: number
  products?: object[] | null
  orderId?: string | null
  details?: string | null
  userId?: string | number
  setOrderOptions: (payload: object) => void
}

export type SinpeProps = {
  vendorPhoneNumber: string
  order: OrderOptions
  credentials?: CredentialsOptions
  callbackFunction?: (() => any) | null
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
