import { useEffect, useState } from 'react'

const useDelay = (delay: number) => {
  const [_delay, setDelay] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setDelay(true)
    }, delay)
  }, [delay])

  return _delay
}

export default useDelay
