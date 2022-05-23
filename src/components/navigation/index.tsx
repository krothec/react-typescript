import {ASide} from './styles'
import { Users, CaretRight } from 'phosphor-react'

import {ButtonUsers} from './styles'

export const Navigation = () => {
  return(
    <ASide>
      <ButtonUsers>
        <Users size={32} weight="light" />
          Usuários
          <CaretRight size={14} weight="light"  style={{ marginLeft: '4rem'}}/>
        </ButtonUsers>
    </ASide>
  )
}

export default Navigation
