import { useCallback, useState } from 'react'
import axios from '../lib/http'

interface usePostDataState {
  data: any
  error: any
  loading: boolean
}

const usePostData = (url: string) => {
  const [res, setRes] = useState<usePostDataState>({
    data: null,
    error: null,
    loading: false
  })

  const makeRequest = useCallback(
    (obj: any) => {
      setRes((prev) => ({ ...prev, loading: true }))
      axios
        .post(url, obj)
        .then((res) => setRes({ data: res.data, error: null, loading: false }))
        .catch((err) => setRes({ data: null, error: err, loading: false }))
    },
    [url]
  )

  return [res, makeRequest] as const
}

export default usePostData
