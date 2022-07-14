import React, { createContext, useState, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import IUser from '../interfaces/userInterface'

const defaultUsers: Array<IUser> = [
  {
    name: 'Usuário Um',
    endereco: 'Rua do  Usuário Um',
    genero: 'o',
    celular: '35655231544',
    email: 'usuarioum@email.com',
    id: 1,
    deleted: false
  },
  {
    name: 'Usuário 2',
    endereco: 'Rua do Usuário 2',
    genero: 'o',
    celular: '3568651616565',
    email: 'usuario2@email.com',
    id: 2,
    deleted: false
  },
  {
    name: 'Usuário 3',
    endereco: 'Rua do Usuário 3',
    genero: 'o',
    celular: '656135156',
    email: 'usuario3@email.com',
    id: 23,
    deleted: false
  }
]

type UsersContextProps = {
  children: ReactNode
}

type UsersContextType = {
  listUsers: IUser[]
  user: IUser
  load: boolean
  openModal: boolean
  titlePage: string
  order: string
  idCreated: number
  addNewUser: (newUser: IUser) => void
  setOpenModal: (newState: boolean) => void
  setLoad: (newState: boolean) => void
  setDeleteUser: () => void
  setTitlePage: (string) => void
  handleOrder: (string) => void
  handleDeleteUser: () => void
  setEditUser: (id: number) => void
  onEdit: (newUser: IUser) => void
  handleOpenModal: (newState: boolean) => void
  setUser: (user) => void
  setOrder: (order: string) => void
  handleSearch: (string) => void
  setValue: (string) => void
  onAdd: (newUser: IUser) => void
}

const initialValue = {
  listUsers: defaultUsers,
  user: {
    name: '',
    email: '',
    id: 0
  },
  load: false,
  openModal: false,
  titlePage: 'Usuários',
  order: 'up',
  idCreated: 0,
  addNewUser: () => {},
  setOpenModal: () => {},
  setLoad: () => {},
  setDeleteUser: () => {},
  handleDeleteUser: () => {},
  setEditUser: () => {},
  onEdit: () => {},
  handleOpenModal: () => {},
  setUser: () => {},
  setTitlePage: () => {},
  setOrder: () => {},
  handleOrder: () => {},
  handleSearch: () => {},
  setValue: () => {},
  onAdd: () => {}
}

export const UsersContext = createContext<UsersContextType>(initialValue)

export const UserContextProvider = ({ children }: UsersContextProps) => {
  const [listUsers, setListUsers] = useState(initialValue.listUsers)
  const [load, setLoad] = useState(initialValue.load)
  const [openModal, setOpenModal] = useState(false)
  const [titlePage, setTitlePage] = useState(initialValue.titlePage)
  const [user, setUser] = useState(initialValue.user)
  const [order, setOrder] = useState(initialValue.order)
  const idCreated = Math.floor(Math.random() * 10000)
  const navigate = useNavigate()

  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const addNewUser = () => {
    const id = listUsers.length + 1
  }

  const onAdd = (newUser: IUser) => {
    debugger
    const id = listUsers.length + 1
    setListUsers([...listUsers, { ...newUser, id }])
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }

  const handleOrder = order => {
    setLoad(true)
    if (order == 'up') {
      listUsers.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    } else {
      listUsers.sort((a, b) => (a.name < b.name ? 1 : b.name < a.name ? -1 : 0))
    }
    setTimeout(() => {
      setLoad(false)
    }, 2000)

    return true
  }

  const handleSearch = value => {
    let results = []
    for (let i = 0; i < listUsers.length; i++) {
      let text = listUsers[i].name
      let found = text.search(value)
      if (found >= 0) {
        results.push(listUsers[i])
      }
    }
    setListUsers(results)
    if (value === '') {
      setListUsers(initialValue.listUsers)
    }
  }

  const setNewUser = () => {
    setTitlePage('Novo usuário')
  }

  const handleDeleteUser = () => {
    setUser(user)
    setOpenModal(true)
    setTitlePage('Usuários')
  }

  const setDeleteUser = () => {
    setLoad(true)
    listUsers.map(usr => {
      if (usr.id === user.id) {
        usr.deleted = true
      }
    })
    setTimeout(() => {
      setLoad(false)
    }, 2000)
  }

  const handleOpenModal = bool => {
    if (bool) {
      setDeleteUser()
    }
    setOpenModal(false)
    setTitlePage('Usuários')
  }

  const setEditUser = (id: number) => {
    setTitlePage('Editar usuário')
    const found = listUsers.find(user => user.id === id)
    if (found) {
      setUser(found)
      navigate('/edit')
    }
  }

  const onEdit = (editedUser: IUser) => {
    const found = listUsers.find(user => editedUser.id === user.id)
    if (found) {
      const idx = listUsers.indexOf(found)
      listUsers.splice(idx, 1)
      setListUsers([...listUsers, { ...editedUser }])
    }
    navigate('/')
  }

  return (
    <UsersContext.Provider
      value={{
        listUsers,
        load,
        openModal,
        setOpenModal,
        setLoad,
        setDeleteUser,
        handleDeleteUser,
        setEditUser,
        handleOpenModal,
        titlePage,
        addNewUser,
        user,
        setTitlePage,
        setUser,
        setOrder,
        order,
        handleOrder,
        handleSearch,
        setValue,
        idCreated,
        onAdd,
        onEdit
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}
