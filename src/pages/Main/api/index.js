import axios from "axios"

export const postUser = (data, uid) => {
  return axios.put(`/users/${uid}.json`, data)
}

export const getUsers = () => {
  return axios.get('/users.json')
}

export const patch = (uid) => {
  return axios.patch(`/users/${uid}/metadata.json`, {
    lastLoginAt: Date.now()
  })
}