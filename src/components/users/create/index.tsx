import { useContext, useState } from 'react'

import { Grid } from '@mui/material'
import Input from '../../input'
import { UsersContext } from '../../../context/usersContext'

export const Create = () => {
  const context = useContext(UsersContext)
  const [value, setValue] = useState('')

  const handleSetValue = (value) => {
    setValue(value)
  }

  return(
    <>
    <Grid container spacing={1} style={{marginBottom: '32px'}}>
      <Grid item xs={6}>
        <Input
          placeholder=''
          title='Nome do usuário'
          width='32rem'
          height='3rem'
          border= '0.5px solid #DDDDDD'
          radius='0.4rem'
          padding= '20px 24px'
          value={context.user.name}
          onChange={(e) => handleSetValue(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <Input
          placeholder=''
          title='CPF'
          width='32rem'
          height='3rem'
          border= '0.5px solid #DDDDDD'
          radius='0.4rem'
          padding= '20px 24px'
          value={context.user.cpf}
          onChange={(e) => handleSetValue(e.target.value)}
        />
      </Grid>
    </Grid>

    <Grid container spacing={1} style={{marginBottom: '32px'}}>
      <Grid item xs={6}>
        <Input
          placeholder=''
          title='E-mail'
          width='32rem'
          height='3rem'
          border= '0.5px solid #DDDDDD'
          radius='0.4rem'
          padding= '20px 24px'
          value={context.user.email}
          onChange={(e) => handleSetValue(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <Input
          placeholder=''
          title='Perfil de acesso'
          width='32rem'
          height='3rem'
          border= '0.5px solid #DDDDDD'
          radius='0.4rem'
          padding= '20px 24px'
          value={context.user.perfil}
          onChange={(e) => handleSetValue(e.target.value)}
        />
      </Grid>
    </Grid>

    <Grid container spacing={1} style={{marginBottom: '32px'}}>
      <Grid item xs={6}>
        <Input
          placeholder=''
          title='Rede'
          width='32rem'
          height='3rem'
          border= '0.5px solid #DDDDDD'
          subtitle='Você pode indicar mais de uma rede'
          radius='0.4rem'
          padding= '20px 24px'
          value={context.user.rede}
          onChange={(e) => handleSetValue(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <Input
          placeholder=''
          title='Loja'
          width='32rem'
          height='3rem'
          border= '0.5px solid #DDDDDD'
          subtitle='Você pode indicar mais de uma loja'
          radius='0.4rem'
          padding= '20px 24px'
          value={''}
          onChange={(e) => handleSetValue(e.target.value)}
        />
      </Grid>
    </Grid>
    </>
  )
}

export default Create
