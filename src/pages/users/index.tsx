import React, { useContext, useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { CaretUp, CaretDown } from 'phosphor-react'

import User from './user'
import { UsersContext } from '../../context/usersContext'
import Modal from '../../components/modal'
import { Inline } from './styles/index'

const Users: React.FC = () => {
  const context = useContext(UsersContext)

  useEffect(() => {}, [context.load])

  const handleOrder = (order: string) => {
    context.handleOrder(order)
  }

  return (
    <>
      <Modal />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Convênio</TableCell>
              <TableCell align="left" style={{ display: 'flex' }}>
                Nome
                <Inline>
                  <CaretUp
                    size={10}
                    weight="light"
                    onClick={() => handleOrder('up')}
                  />
                  <CaretDown
                    size={10}
                    weight="light"
                    onClick={() => handleOrder('down')}
                  />
                </Inline>
              </TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {context.listUsers.map((user, idx) => {
              if (!user.deleted) {
                return <User user={user} key={idx} />
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Users
