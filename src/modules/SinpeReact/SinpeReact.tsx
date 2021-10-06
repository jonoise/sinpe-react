import React from 'react'
import { SinpeProps } from '../../types/index'
import useModal from '../../hooks/useModal'
import SinpeModal from '../SinpeModal/index'
import styles from '../../../styles/Modal.module.css'
import Initializer from './Initializer'
const SinpeReact = (props: SinpeProps) => {
  const btnClass = props.btnClass ? props.btnClass : styles.defaultButtonStyle
  const modalClass = props.modalClass
    ? props.modalClass
    : styles.defaultModalStyle

  const { isOpen, onToggle, onClose } = useModal()

  return (
    <>
      <Initializer {...props} />
      <button className={btnClass} onClick={onToggle}>
        Pagar con Sinpe
      </button>
      {isOpen && <SinpeModal modalClass={modalClass} onClose={onClose} />}
    </>
  )
}

export default SinpeReact
