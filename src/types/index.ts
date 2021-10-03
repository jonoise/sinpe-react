export type VendorOptions = {
  phone: string
  callbackUrl: string
}

export type CustomerOptions = {
  email: string
}

export type SinpeProps = {
  btnClass?: string
  modalClass?: string
  vendor: VendorOptions
  customer: CustomerOptions
}

export type SinpeModalProps = {
  modalClass: string
  onClose: Function
}
