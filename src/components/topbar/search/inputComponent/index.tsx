import { Paper, InputBase, Divider, IconButton } from '@mui/material/';
import { event } from 'cypress/types/jquery';
import { MagnifyingGlass } from "phosphor-react";
import { useContext, useState } from 'react';

import { UsersContext } from '../../../../context/usersContext';
import { Div } from '../../styles'

export default function CustomizedInputBase() {
  const context = useContext(UsersContext)
  const [value, setValue] = useState('')

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
         width: 400,
         boxShadow: 'none',
         border: 'solid 0.5px #E5E5E5',
         marginRight: '2rem'
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar usuário"
        inputProps={{ 'aria-label': 'Buscar usuário' }}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <IconButton onClick={() => context.handleSearch(value)}>
        <Div><MagnifyingGlass size={32} color="#FEFBF1" /></Div>
      </IconButton>
    </Paper>
  );
}
