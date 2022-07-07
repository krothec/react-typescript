import * as React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Datepicker = () => {
  const [startDate, setDate] = React.useState(new Date())
  const defaultEndDate = new Date()
  defaultEndDate.setDate(defaultEndDate.getDate() + 7)
  const today = new Date()

  const selectDateHandler = d => {
    setDate(d)
  }
  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={selectDateHandler}
      minDate={today}
      todayButton={'Today'}
    />
  )
}

export default Datepicker
