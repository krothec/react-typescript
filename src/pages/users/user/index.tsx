import React, { useContext, useCallback } from 'react'
import TableCell from '@mui/material/TableCell'
import { PencilSimpleLine, TrashSimple } from 'phosphor-react'
import TableRow from '@mui/material/TableRow'
import { useNavigate } from 'react-router-dom'

import IUser from '../interfaces/userInterface'
import Switch from '../../../components/switch'
import { Button } from '../styles'
import { UsersContext } from '../../../context/usersContext'

interface User {
  user: IUser
}

const User: React.FC<User> = ({ user }) => {
  const context = useContext(UsersContext)
  const navigate = useNavigate()

  const handleEditUser = useCallback(() => {
    navigate('/edit', { replace: true })
    context.setEditUser(user.id)
  }, [navigate])

  const handleDeleteUser = () => {
    context.handleDeleteUser()
    context.setUser(user)
  }

  return (
    <>
      <TableRow key={user.id}>
        <TableCell align="left">{user.rede}</TableCell>
        <TableCell align="left">{user.name}</TableCell>
        <TableCell align="right">{user.status}</TableCell>
        <TableCell align="right">
          <Button
            // onClick={() => context.setEditUser(user.id)}
            onClick={handleEditUser}
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
