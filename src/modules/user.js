import axios from "axios"
import React from "react"

const getUser = (uid) => axios.get(`/users/${uid}.json`)

const useUser = () => {
  const uid = localStorage.getItem('uid')
  const [user, setUser] = React.useState(null)

  const get = (uid) => {
    const request = getUser(uid)
      .then(res => {
        const data = res.data

        setUser(data)

        console.log(data)
      })
    
    return request
  }

  React.useEffect(() => {
    if (!uid) return

    get(uid)
  }, [uid])

  return {
    user,
  }
}

const use = useUser

export const CurrentUser = {
  use,
}