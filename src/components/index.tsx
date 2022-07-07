import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DataGridComponent from '../pages/users'
import CreateUser from '../pages/users/create'
import EditUser from '../pages/users/edit'
import { Section } from './styles'
import { UserContextProvider } from '../context/usersContext'

const Container: React.FC = () => {
  return (
    <Section>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DataGridComponent />} />
            <Route path="create" element={<CreateUser />} />
            <Route path="edit" element={<EditUser />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </Section>
  )
}

export default Container
