import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { parseJSON } from '../../../helpers'
import { getUsers, postUser } from '../api'

export const useMain = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [users, setUsers] = React.useState(null)

  const handleAuth = () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    return signInWithPopup(auth, provider)
  }

  const postData = (data) => {
    const request = postUser(data)

    setIsLoading(true)
    request
      .then(res => {
        console.log(res)
        console.log('Success created user');
      })
      .finally(() => setIsLoading(false))
  }

  React.useEffect(() => {
    const request = getUsers()

    request
      .then(res => {
        const data = res.data

        if (data) {
          setUsers(parseJSON(data))
        }
      })
  }, [])

  return {
    users,
    isLoading,
    postData,
    handleAuth,
  }
}