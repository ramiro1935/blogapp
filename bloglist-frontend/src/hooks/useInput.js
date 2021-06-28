import { useState } from 'react'

const useInput = type => {
  const [value, setValue] = useState('')

  const onchange = e => {
    setValue(e.target.value)
  }
  return {
    type,
    value,
    onchange,
  }
}

export default useInput
