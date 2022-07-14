import * as React from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { DatePickerCustom } from './style'

const Datepicker = () => {
  const [startDate, setDate] = React.useState(new Date())
  const defaultEndDate = new Date()
  defaultEndDate.setDate(defaultEndDate.getDate() + 7)
  const today = new Date()

  const selectDateHandler = d => {
    setDate(d)
  }
  return (
    <>
      <h6>Data de nascimento</h6>
      <DatePickerCustom>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={selectDateHandler}
          minDate={today}
          todayButton={'Today'}
        />
      </DatePickerCustom>
    </>
  )
}

export default Datepicker
