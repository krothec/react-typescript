import { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { UsersContext } from '../../../context/usersContext'
import Switch from '../../users/switchComponent'
import Button from '../../button'
import { EditBarDiv } from '../styles'

const EditUserBar: React.FC = () => {
  const context = useContext(UsersContext)
  const navigate = useNavigate();

  const handleDeleteUser = useCallback(() => {
    navigate('/', {replace: true})
    context.setDeleteUser()
    context.setTitlePage('Usuários')
  }, [navigate]);

  const handleSetTitlePage = useCallback(() => {
    navigate('/', {replace: true})
    context.setTitlePage('Usuários')
  }, [navigate]);

  return(
    <EditBarDiv>
      <Switch status={context.user.status}/>
      <Button
          title='Resetar senha'
          color="#333333"
          height='3rem'
          width='10rem'
          backgroundColor='#FFFFFF'
          radius='0.4rem'
          border='solid 0.5px #E5E5E5'
          onClick={() => handleSetTitlePage()}
          margin=' 0rem 1.2rem 0rem 0rem'
        />
      <Button
          title='Salvar alterações'
          color="#FFFFFF"
          height='3rem'
          width='10rem'
          backgroundColor='#F39200'
          radius='0.4rem'
          border='none'
          onClick={() => {}}
          margin=' 0rem 1.2rem 0rem 0rem'
        />
      <Button
          title='Excluir usuário'
          color="#FFFFFF"
          height='3rem'
          width='10rem'
          backgroundColor='#DC3545'
          radius='0.4rem'
          border='none'
          onClick={() => handleDeleteUser()}
          margin=' 0rem 1.2rem 0rem 0rem'
        />
    </EditBarDiv>
  )
}

export default EditUserBar
