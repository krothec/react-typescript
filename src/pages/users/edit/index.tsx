import { useContext, useState } from 'react'

import FormControl from '@mui/material/FormControl'
import Input from '../../../components/input'
import { UsersContext } from '../../../context/usersContext'
import Datepicker from '../../../components/datepicker'
import Select from '@mui/material/Select'
import { Box, ButtonBar } from '../styles'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'

export const Edit = () => {
  const context = useContext(UsersContext)

  const options: { id: number; value: string; label: string }[] = [
    { id: 1, value: 'masc', label: 'Masculino' },
    { id: 2, value: 'fem', label: 'Feminino' },
    { id: 3, value: 'o', label: 'Outros' }
  ]

  return (
    <>
      <h2>Editar usuário</h2>
      <Box>
        <div hidden={true}>
          <TextField
            id="standard-basic"
            label="id"
            name="id"
            variant="standard"
            value={context.idCreated}
          />
        </div>
        <Input
          placeholder=""
          title="Nome completo"
          width="32rem"
          height="3rem"
          border="0.5px solid #DDDDDD"
          radius="0.4rem"
          padding="20px 24px"
          value={context.user.name}
          onChange={context.setValue}
          name="name"
        />
        <Datepicker />
        <Input
          placeholder=""
          title="Endereço"
          width="32rem"
          height="3rem"
          border="0.5px solid #DDDDDD"
          radius="0.4rem"
          padding="20px 24px"
          value={context.user.endereco}
          onChange={context.setValue}
          name="endereco"
        />
        <InputLabel id="demo-select-small">Gênero</InputLabel>
        <FormControl sx={{ width: 512 }} size="small">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={context.user.genero}
            label="genero"
            onChange={context.setValue}
            name="genero"
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
        <Input
          placeholder=""
          title="Telefone"
          width="32rem"
          height="3rem"
          border="0.5px solid #DDDDDD"
          radius="0.4rem"
          padding="20px 24px"
          value={context.user.celular}
          onChange={context.setValue}
          name="celular"
        />

        <Input
          placeholder=""
          title="E-mail"
          width="32rem"
          height="3rem"
          border="0.5px solid #DDDDDD"
          radius="0.4rem"
          padding="20px 24px"
          value={context.user.email}
          onChange={context.setValue}
          name="email"
        />

        <ButtonBar>
          <Button
            variant="contained"
            color="primary"
            onClick={() => context.onEdit(context.user)}
          >
            Salvar edição
          </Button>
          <Button variant="contained" color="inherit">
            cancelar edição
          </Button>
        </ButtonBar>
      </Box>
    </>
  )
}

export default Edit
