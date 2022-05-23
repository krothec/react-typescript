import { Badge } from '@mui/material'

import { Head } from './styles'

export const Header = () => {

  return(
    <Head>
      <div className='text'>
        <div className='first'>Redes </div>
        <div className='menu prod'>Produtos
          <Badge badgeContent={2} color="error" />
        </div>
        <div className='menu conf'>Configurações</div>
      </div>
    </Head>
  )
}

export default Header
