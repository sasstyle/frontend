import { useState } from 'react'

export function useSelect(optionList: Array<string>) {
  const [value, setValue] = useState('')
  const onSetValue = (e: any) => setValue(e.currentTarget.value)
  console.log(value)

  return { value, onSetValue, optionList }
}
