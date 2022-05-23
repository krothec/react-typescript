import { useCallback, useContext } from 'react'
import { UsersContext } from '../../../context/usersContext'
import { Link, useNavigate } from "react-router-dom";

import InputBase from './inputComponent'
import Button from '../../button'

const Topbar: React.FC = () => {
  const context = useContext(UsersContext)
  const navigate = useNavigate();

  const handleNewUser = useCallback(() => {
    navigate('/create', {replace: true})
    context.setNewUser()
  }, [navigate]);

  return(
      <div className='search'>
        <InputBase />
        <Link to="/create">
        <Button
          title='Novo usuário'
          color="#FEFBF1"
          height='3rem'
          width='10rem'
          backgroundColor='#F39200'
          radius='0.4rem'
          border='none'
          onClick={handleNewUser}
        />
        </Link>
      </div>
  )
}

export default Topbar
