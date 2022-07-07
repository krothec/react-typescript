import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export interface OptionsProps {
  id: number
  value: string
  label: string
}

export interface SelectProps {
  options: OptionsProps[]
  label?: string
}

const SelectComponent: React.FC<SelectProps> = ({ options, label }) => {
  const [value, setValue] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    debugger
    setValue(event.target.value)
  }

  return (
    <div>
      <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={value}
        onChange={handleChange}
        autoWidth
        label={label}
      >
        {options.map(op => {
          return <MenuItem value={op.value}>{op.label}</MenuItem>
        })}
      </Select>
    </div>
  )
}

export default SelectComponent
