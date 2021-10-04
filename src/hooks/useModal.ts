import { useState } from 'react'

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => {
    setIsOpen(true)
  }
  const onClose = () => {
    setIsOpen(false)
  }
  const onToggle = () => {
    setIsOpen(!isOpen)
  }

  return {
    isOpen: !!isOpen,
    onOpen,
    onClose,
    onToggle
  }
}

export default useModal
