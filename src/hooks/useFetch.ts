import { useState, useEffect } from 'react'
import axios from '../logic/http'

const UseFetch = (endpoint: string | null = null) => {
  const [isLoading, setIsLoading] = useState(true)
  const [res, setRes] = useState(null)

  useEffect(() => {
    if (!endpoint) return

    const fetchData = async () => {
      try {
        const _res = await axios.post(`${process.env.API_URL}/${endpoint}/`)
        const res = _res.data
        console.log('res: ', res)
        setRes(res)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }

      // Perform fetch
      fetchData()
    }
  }, [endpoint])

  return {
    isLoading,
    res
  }
}

export default UseFetch
