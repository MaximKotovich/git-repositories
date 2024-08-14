import { ChangeEvent, ReactElement } from 'react'
import { Option } from '../../../../entities/repository-card/lib/types.ts'
import style from './style.module.scss'

type SelectProps = {
  options: Option[]
  onChange: (option: string) => void
  value?: string
}

export const Select = ({ options, value, onChange }: SelectProps): ReactElement => {
  return (
    <select
      className={style.select}
      value={value}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
    >
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
