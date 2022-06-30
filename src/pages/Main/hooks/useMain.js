import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { parseJSON } from '../../../helpers'
import { getUsers, postUser } from '../api'

export const useMain = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [users, setUsers] = React.useState([])

  const navigate = useNavigate()

  const goChatPage = () => navigate('/chat')

  const handleAuth = () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    return signInWithPopup(auth, provider)
  }

  const postData = (data, uid, onClose) => {
    const request = postUser(data, uid)

    setIsLoading(true)
    request
      .then(() => {
        localStorage.setItem('uid', data.userId)
        onClose()
        goChatPage()
      })
      .finally(() => setIsLoading(false))
  }

  React.useEffect(() => {
    const request = getUsers()

    request
      .then(res => {
        const data = Object
          .entries(res.data)
          .map(([, val]) => val)

        res.data && setUsers(data)
      })
  }, [])

  return {
    users,
    isLoading,
    postData,
    handleAuth,
    goChatPage,
  }
}