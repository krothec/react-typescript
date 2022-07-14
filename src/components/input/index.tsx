import { HTMLAttributes, InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  value: string
  placeholder?: string
  width?: string
  title?: string
  subtitle?: string
  disabled?: boolean
  height?: string
  border?: string
  radius?: string
  padding?: string
  onChange?: (event) => void
}

const Input: React.FC<InputProps> = ({
  placeholder,
  name,
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
  return (
    <div>
      <p
        style={{
          fontSize: '14px',
          color: '#666666',
          marginBottom: '8px'
        }}
      >
        {title}
      </p>
      <input
        value={value}
        name={name}
        onChange={onChange}
        style={{
          width,
          height,
          border,
          borderRadius: radius,
          padding
        }}
      ></input>
      <p style={{ fontSize: '14px', color: '#666666' }}>{subtitle}</p>
    </div>
  )
}
export default Input
