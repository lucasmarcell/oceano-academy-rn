import axios from 'axios'

const api = axios.create({
  baseURL: 'https://oceanoacademytest.herokuapp.com',
  //baseURL: 'http://localhost:3000',
})

export { api };