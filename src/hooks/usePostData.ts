import { useCallback, useState } from 'react'
import axios from '../lib/http'

interface IRes {
  data: object | null
  error: unknown | null
  isLoading: boolean | null
}

const usePostData = ({
  endpoint,
  headers
}: {
  endpoint: string
  headers?: object | null
}) => {
  const [res, setRes] = useState<IRes>({
    data: null,
    error: null,
    isLoading: false
  })
  // You POST method here
  const callAPI = (payload: any) =>
    useCallback(() => {
      setRes((prevState) => ({ ...prevState, isLoading: true }))
      axios
        .post(endpoint, headers, payload)
        .then((res) => {
          setRes({ data: res.data, isLoading: false, error: null })
        })
        .catch((error) => {
          setRes({ data: null, isLoading: false, error })
        })
    }, [endpoint, headers, payload])

  return [res, callAPI] as const
}

export default usePostData
