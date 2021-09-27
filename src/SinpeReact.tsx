import React from 'react'
import { SinpeProps } from './types/index'
import UseModal from './hooks/useModal'
import SinpeModal from './SinpeModal'

const SinpeReact = (props: SinpeProps) => {
  const btnClass = props.btnClass ? props.btnClass : 'defaultButtonStyle'
  const modalClass = props.modalClass ? props.modalClass : 'defaultModalStyle'

  const { isOpen, onToggle } = UseModal()

  return (
    <>
      <button className={btnClass} onClick={onToggle}>
        Pagar con Sinpe
      </button>
      {isOpen && <SinpeModal modalClass={modalClass} />}
    </>
  )
}

export default SinpeReact
