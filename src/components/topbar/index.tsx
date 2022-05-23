import { useCallback, useContext } from 'react'

import {TopBar} from './styles'
import { UsersContext } from '../../context/usersContext'
import Search from './search'
import EditUserBar from './editUserBar'

export const Topbar = () => {
  const context = useContext(UsersContext)

  return(
    <TopBar>
      <p className='title'>{context.titlePage}</p>
      {context.titlePage === 'Usuários' && <Search />}
      {context.titlePage === 'Editar usuário' && <EditUserBar />}
    </TopBar>
  )
}

export default Topbar
