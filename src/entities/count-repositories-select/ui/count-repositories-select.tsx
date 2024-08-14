import { ReactElement } from 'react'
import { Select } from '../../../shared/ui-kit/select'
import { options } from '../lib/constants.ts'

type CountRepositoriesSelectProps = {
  onChange: (value: string) => void
  value?: string
}

export const CountRepositoriesSelect = ({ value, onChange }: CountRepositoriesSelectProps): ReactElement => {
  return <Select options={options} onChange={onChange} value={value} />
}
