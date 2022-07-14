import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DataGridComponent from '../pages/users'
import CreateUser from '../pages/users/create'
import EditUser from '../pages/users/edit'
import { Section } from './styles'
import { UserContextProvider } from '../context/usersContext'
import { ScheduleContextProvider } from '../context/scheduleContext'

const Container: React.FC = () => {
  return (
    <BrowserRouter>
      <Section>
        <ScheduleContextProvider>
          <UserContextProvider>
            <Routes>
              <Route path="/" element={<DataGridComponent />} />
              <Route path="create" element={<CreateUser />} />
              <Route path="edit" element={<EditUser />} />
            </Routes>
          </UserContextProvider>
        </ScheduleContextProvider>
      </Section>
    </BrowserRouter>
  )
}

export default Container
