import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"

const getUser = (uid) => axios.get(`/users/${uid}.json`)

const useUser = () => {
  const uid = localStorage.getItem('uid')
  const [user, setUser] = React.useState(null)
  const navigate = useNavigate()

  const get = (uid) => {
    const request = getUser(uid)
      .then(res => {
        const data = res.data

        setUser(data)
      })
    
    return request
  }

  const logout = () => {
    localStorage.removeItem('uid')
    navigate('/')
  }

  React.useEffect(() => {
    if (!uid) return

    get(uid)
  }, [uid])

  return {
    user,
    logout,
  }
}

const use = useUser

export const CurrentUser = {
  use,
}