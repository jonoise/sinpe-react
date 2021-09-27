import React from 'react'
import { SinpeProps } from './types/index'
import UseModal from './hooks/useModal'
import SinpeModal from './SinpeModal'

const SinpeReact = (props: SinpeProps) => {
  const btnClass = props.btnClass ? props.btnClass : 'defaultStyles'
  const { isOpen, onToggle } = UseModal()
  return (
    <>
      <h1>Info</h1>
      <ul>
        <li>customer name: {props.customerOptions.name}</li>
      </ul>
      <ul>
        <li>customer email: {props.customerOptions.email}</li>
      </ul>
      <ul>
        <li>vendor phone: {props.vendorOptions.phone}</li>
      </ul>
      <button className={btnClass} onClick={onToggle}>
        Pagar con Sinpe
      </button>
      {isOpen && <SinpeModal />}
    </>
  )
}

export default SinpeReact
