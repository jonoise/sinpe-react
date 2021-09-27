export type VendorOptions = {
  phone: string
  thankyouPage: string
}

export type CustomerOptions = {
  phone?: string
  email: string
  name: string
}

export type SinpeProps = {
  btnClass: string
  modalClass: string
  vendorOptions: VendorOptions
  customerOptions: CustomerOptions
}
