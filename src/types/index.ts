export type CredentialsOptions = {
  public_key: string | null | undefined
  api_key: string | null | undefined
}

export type OrderOptions = {
  totalAmount: number
  products?: object[] | null | undefined
  orderId?: string | null | undefined
  details?: string | null | undefined
  userId?: string | number
}

export type SinpeProps = {
  // SINGLE STORES
  vendorPhoneNumber: string
  order: OrderOptions
  credentials?: CredentialsOptions | undefined | null

  // SETTINGS STORE
  callbackFunction?: (() => any) | undefined
  styles?: StyleTypes | null
  redirectUrl?: string
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
