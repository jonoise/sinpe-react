import { useState } from 'react'

export interface UseModalProps {
  defaultIsOpen?: boolean
}

const UseModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => {
    setIsOpen(true)
  }
  const onClosed = () => {
    setIsOpen(false)
  }
  const onToggle = () => {
    setIsOpen(!isOpen)
  }

  return {
    isOpen: !!isOpen,
    onOpen,
    onClosed,
    onToggle
  }
}

export default UseModal
