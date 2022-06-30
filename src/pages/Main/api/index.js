import axios from "axios"

export const postUser = (data, uid) => {
  return axios.put(`/users/${uid}.json`, data)
}

export const getUsers = () => {
  return axios.get('/users.json')
}