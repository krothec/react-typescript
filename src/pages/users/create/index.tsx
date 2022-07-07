import { useContext, useState } from 'react'

import Input from '../../../components/input'
import { UsersContext } from '../../../context/usersContext'
import Datepicker from '../../../components/datepicker'
import SelectComponent from '../../../components/select'

export const Create = () => {
  const context = useContext(UsersContext)
  const [value, setValue] = useState('')

  const handleSetValue = value => {
    setValue(value)
  }

  const options: { id: number; value: string; label: string }[] = [
    { id: 1, value: 'masc', label: 'Masculino' },
    { id: 2, value: 'fem', label: 'Feminino' },
    { id: 3, value: 'o', label: 'Outros' }
  ]

  return (
    <>
      <Input
        placeholder=""
        title="Nome completo"
        width="32rem"
        height="3rem"
        border="0.5px solid #DDDDDD"
        radius="0.4rem"
        padding="20px 24px"
        value={context.user.name}
        onChange={e => handleSetValue(e.target.value)}
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
        onChange={e => handleSetValue(e.target.value)}
      />

      <SelectComponent options={options} label="Gênero" />

      <Input
        placeholder=""
        title="Telefone"
        width="32rem"
        height="3rem"
        border="0.5px solid #DDDDDD"
        radius="0.4rem"
        padding="20px 24px"
        value={context.user.cpf}
        onChange={e => handleSetValue(e.target.value)}
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
        onChange={e => handleSetValue(e.target.value)}
      />
    </>
  )
}

export default Create
