export type CredentialsOptions = {
  public_key: string | undefined
  api_key: string | undefined
}

export type OrderOptions = {
  totalAmount: number
  products?: object[] | undefined
  orderId?: string | undefined
  details?: string | undefined
  userId?: string | number
}

export type SinpeProps = {
  // SINGLE STORES
  vendorPhoneNumber: string
  order: OrderOptions
  credentials?: CredentialsOptions | undefined

  // SETTINGS STORE
  callbackFunction?: (() => any) | undefined
  styles?: StyleTypes | undefined
  redirectUrl?: string | undefined
}

/////////////////////
// ↓ MODAL TYPES ↓ //
/////////////////////

export type SinpeModalProps = {
  modalClass: string
  onClose: Function
}

//////////////////////
// ↓ STYLES TYPES ↓ //
//////////////////////

export type StyleTypes = {
  modalClass: string
  btnClass: string
}
