import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Chat } from '..'
import { CurrentUser } from '../../../modules/user'

const useMainChat = () => {
  const [users, setUsers] = React.useState(null)
  const { user } = CurrentUser.use()

  const navigate = useNavigate()

  const getUsers = () => {
    const request = Chat.API.MainChat.getUsers()

    if (!user) return

    request
      .then(res => {
        const data = Object
          .values(res.data)
          .filter(item => item.userId !== user.userId)

        setUsers([user, ...data])
      })
  }

  React.useEffect(getUsers, [user])

  const goToChatRoom = (userLogin) => navigate(`/chat/${userLogin}`)

  return {
    users,
    goToChatRoom,
  }
}

export const use = useMainChat
