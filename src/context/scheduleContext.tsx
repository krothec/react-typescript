import React, { useEffect, createContext, useState, ReactNode } from 'react'

import ISchedule from '../interfaces/scheduleInterface'

const defaultAppointment: Array<ISchedule> = []

type ScheduleContextProps = {
  children: ReactNode
}

type ScheduleContextType = {
  listSchedule?: ISchedule[]
  schedule?: ISchedule
  setValue: (string) => void
}

const initialValue = {
  listSchedule: defaultAppointment,
  schedule: {
    id: 0,
    especialidade: '',
    start: '',
    end: '',
    idPaciente: 0
  },
  setValue: () => {}
}

export const ScheduleContext = createContext<ScheduleContextType>(initialValue)

export const ScheduleContextProvider = ({ children }: ScheduleContextProps) => {
  const [listSchedule, setListSchedule] = useState(initialValue.listSchedule)
  const [schedule, setSchedule] = useState(initialValue.schedule)

  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    debugger
    const { name, value } = e.target
    setSchedule({ ...schedule, [name]: value })
  }
  return (
    <ScheduleContext.Provider
      value={{
        listSchedule,
        setValue,
        schedule
      }}
    >
      {children}
    </ScheduleContext.Provider>
  )
}
