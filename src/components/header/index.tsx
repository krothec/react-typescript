import { Head } from './styles'
import Avatar from '../../components/avatar'
import Menu from '../menu'
export const Header = () => {
  return (
    <Head className="text">
      <div className="menu-text">
        <Menu />
        <h1>Sistema de Cadastro</h1>
      </div>
      <Avatar />
    </Head>
  )
}

export default Header
