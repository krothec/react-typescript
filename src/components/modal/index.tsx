import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { WarningCircle } from 'phosphor-react'

import { UsersContext } from '../../context/usersContext'
import { DivBox, InLine, RoundedDiv } from './styles'
import Button from '../button'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '2px solid transparent',
  boxShadow: 24,
  bgcolor: 'background.paper',
  borderRadius: 4,
  textAlign: 'center'
}

const ModalComponent: React.FC = () => {
  const context = useContext(UsersContext)

  return (
    <div>
      <Modal
        open={context.openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DivBox>
            <RoundedDiv>
              <WarningCircle
                size={24}
                color="#D23A55"
                style={{ marginBottom: 42 }}
              />
            </RoundedDiv>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Excluir usuário
            </Typography>
            <Typography
              id="modal-modal-description"
              color="#666666"
              sx={{ mt: 2 }}
            >
              Você deseja excluir este usuário definitivamente? <br />
              Esta ação não poderá ser desfeita
            </Typography>
            <InLine>
              <Button
                backgroundColor="#F39200"
                color="#FFF"
                height="3rem"
                width="6rem"
                border="none"
                radius="0.3rem"
                margin="0.4rem"
                onClick={() => context.handleOpenModal(false)}
                title="Não"
              />
              <Button
                backgroundColor="transparent"
                height="3rem"
                width="6rem"
                border="solid 0.5px #E5E5E5"
                radius="0.3rem"
                margin="0.4rem"
                onClick={() => context.handleOpenModal(true)}
                title="Sim"
              />
            </InLine>
          </DivBox>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalComponent
