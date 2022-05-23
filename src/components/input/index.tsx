import { FormControl, OutlinedInput } from "@mui/material"
import { HTMLAttributes, InputHTMLAttributes } from "react"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  placeholder: string,
  width: string,
  title?: string,
  subtitle?: string,
  disabled?: boolean,
  height?: string,
  border?: string
  radius?: string
  padding?: string
  value?: string
  onChange: (event) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  width,
  title,
  subtitle,
  height,
  border,
  radius,
  padding,
  value,
  onChange
}) => {
  return(
  <>
    <p
    style={{
      fontSize: '14px',
      color:'#666666',
      marginBottom: '8px'
    }}>
      {title}
    </p>
    <input
    value={value}
    onChange={onChange}
    style={{
      width,
      height,
      border,
      borderRadius: radius,
      padding,
    }}>
    </input>
    <p style={{ fontSize: '14px', color:'#666666' }}>{subtitle}</p>
  </>
  )
}

export default Input
