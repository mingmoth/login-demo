import axios from 'axios'

// const baseURL = 'https://login-guan-api.herokuapp.com/api'
const baseURL = 'http://localhost:3000/api'

export const apiHelper = axios.create({ baseURL })

apiHelper.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('signInToken')
    if(token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  err => Promise.reject(err)
)