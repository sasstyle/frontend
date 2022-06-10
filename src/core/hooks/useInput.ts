import { useState } from 'react'

export function useInput(initialState: any) {
  const [value, setValue] = useState(initialState)
  const onSetValue = (e: any) => setValue(e.target.value)

  return { value, onSetValue }
}
