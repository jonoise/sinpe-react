import React from 'react'
import { SinpeModalProps } from './types'

const SinpeModal = (props: SinpeModalProps) => {
  return (
    <>
      <div>
        <div className={props.modalClass}>🎉</div>
      </div>
    </>
  )
}

export default SinpeModal
