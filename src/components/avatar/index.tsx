import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import { orange } from '@mui/material/colors'

export default function LetterAvatars() {
  return (
    <Avatar
      sx={{ bgcolor: orange[300] }}
      aria-label="Avatar do usuário contendo as iniciais do nome"
    >
      OP
    </Avatar>
  )
}
