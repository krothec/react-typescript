import React, { useEffect, createContext, useState, ReactNode } from 'react';

import IUser from '../components/users/interfaces/userInterface';
import data from '../assets/data'

const dataRaw = JSON.stringify(data)
const usersRaw = JSON.parse(dataRaw)

type UsersContextProps= {
  children: ReactNode
}

type UsersContextType = {
  listUsers: IUser[],
  user: IUser,
  load: boolean,
  openModal: boolean,
  titlePage: string,
  order: string,
  setNewUser: () => void,
  setOpenModal: (newState: boolean) => void,
  setLoad: (newState: boolean) => void,
  setDeleteUser: () => void
  setTitlePage: (string) => void
  handleOrder: (string) => void
  handleDeleteUser: () => void
  setEditUser: (id: number) => void
  handleOpenModal: (newState: boolean) => void
  setUser: (user) => void
  setOrder:(order: string) => void
  handleSearch:(string) => void
}

const initialValue =  {
  listUsers: usersRaw,
  user: {
    rede: '',
    name: '',
    email: '',
    perfil: '',
    status: false,
    id: -1,
    deleted: false
  },
  load: false,
  openModal: false,
  titlePage: 'Usuários',
  order:'up',
  setNewUser: () => {},
  setOpenModal: () => {},
  setLoad: () => {},
  setDeleteUser: () => {},
  handleDeleteUser: () => {},
  setEditUser: () => {},
  handleOpenModal: () => {},
  setUser: () => {},
  setTitlePage: () => {},
  setOrder: () => {},
  handleOrder: () => {},
  handleSearch: () => {}
}

export const UsersContext = createContext<UsersContextType>(initialValue);

export const UserContextProvider = ({children}: UsersContextProps) => {
  const [listUsers, setListUsers] = useState(initialValue.listUsers)
  const [load, setLoad] = useState(initialValue.load)
  const [openModal, setOpenModal] = useState(false)
  const [titlePage, setTitlePage] = useState(initialValue.titlePage)
  const [user, setUser] = useState(initialValue.user)
  const [order, setOrder] = useState(initialValue.order)

  const handleOrder =(order) => {
    setLoad(true)
        if (order == 'up'){
          listUsers.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        }else{
          listUsers.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))
        }
        setTimeout(() => {
            setLoad(false)
        }, 2000);

        return(true)
  }

  const handleSearch = (value) => {
    let results = []
    for (let i=0 ; i < listUsers.length ; i++){
      let text = listUsers[i].name
      let found = text.search(value)
      if (found >= 0) {
        results.push(listUsers[i]);
    }}
    setListUsers(results)
    if(value === ''){
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
      if(usr.id === user.id){
        usr.deleted = true
      }
    })
    setTimeout(() => {
      setLoad(false)
  }, 2000);
  }

  const handleOpenModal = (bool) => {
    if(bool){
      setDeleteUser()
    }
    setOpenModal(false)
    setTitlePage('Usuários')
  }

  const setEditUser = (id: number) => {
    setTitlePage('Editar usuário')
    const found = listUsers.find(user => user.id === id)
    if(found){
      setUser(found)
    }
  }

  return(
    <UsersContext.Provider value={{
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
      setNewUser,
      user,
      setTitlePage,
      setUser,
      setOrder,
      order,
      handleOrder,
      handleSearch
    }}>
      {children}
    </UsersContext.Provider>
  )
}
