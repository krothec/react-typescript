import React, { useContext, useCallback } from 'react'

import TableCell from '@mui/material/TableCell'
import { PencilSimpleLine, TrashSimple } from 'phosphor-react'
import TableRow from '@mui/material/TableRow'
import IUser from '../../../interfaces/userInterface'
import { Button } from '../styles'
import { UsersContext } from '../../../context/usersContext'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { ScheduleContext } from '../../../context/scheduleContext'

interface User {
  user: IUser
}

const options: { id: number; value: string; label: string }[] = [
  { id: 1, value: 'cg', label: 'Clínico Geral' },
  { id: 2, value: 'car', label: 'Cardiologista' },
  { id: 3, value: 'neu', label: 'Neurologista' }
]

const User: React.FC<User> = ({ user }) => {
  const context = useContext(UsersContext)
  const scheduleContext = useContext(ScheduleContext)

  const handleDeleteUser = () => {
    context.handleDeleteUser()
    context.setUser(user)
  }

  return (
    <>
      <TableRow key={user.id}>
        <TableCell align="left">{user.name}</TableCell>
        <TableCell align="left">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Especialidade
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={scheduleContext.schedule.especialidade}
                label="Especialidade"
                onChange={scheduleContext.setValue}
                name="especialidade"
              >
                {options.map((op, idx) => {
                  return (
                    <MenuItem value={op.value} key={idx}>
                      {op.label}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Box>
        </TableCell>
        <TableCell align="right">
          <Button
            onClick={() => context.setEditUser(user.id)}
            aria-label="Botão editar usuário"
          >
            <PencilSimpleLine size={14} />
          </Button>

          <Button
            onClick={() => handleDeleteUser()}
            aria-label="Botão excluir usuário"
          >
            <TrashSimple size={14} color="#D23A55" />
          </Button>
        </TableCell>
      </TableRow>
    </>
  )
}

export default User
