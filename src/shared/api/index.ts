import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 30_000,
  headers: {
    Accept: 'application/json',
  },
})

export default instance
