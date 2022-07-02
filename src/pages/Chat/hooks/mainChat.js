import React from 'react'
import { Chat } from '..'

const useMainChat = () => {
  const [users, setUsers] = React.useState(null)
  
  const getUsers = () => {
    const request = Chat.API.MainChat.getUsers()

    request
      .then(res => {
        const data = Object
          .values(res.data)
          .map(item => item)

        setUsers(data)
      })
  }

  React.useEffect(getUsers, [])

  return {
    users,
  }
}

export const use = useMainChat
