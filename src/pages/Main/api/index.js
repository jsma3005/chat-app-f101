import axios from "axios"

export const postUser = (data) => {
  return axios.post('/users.json', data)
}

export const getUsers = () => {
  return axios.get('/users.json')
}