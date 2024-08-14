import { Input } from '../../../shared/ui-kit/input'
import { ReactElement, useEffect, useState } from 'react'
import { useDebounce } from '../../../shared/ui-kit/hooks'

type SearchProps = {
  onChange: (value: string) => void
}

export const Search = (props: SearchProps): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>('')

  const debounce = useDebounce<string>(searchValue, 500)

  useEffect(() => {
    props.onChange(debounce)
  }, [debounce])

  const handleChange = (value: string): void => {
    setSearchValue(value)
  }

  return <Input onChange={handleChange} value={searchValue} placeholder="Search" />
}
