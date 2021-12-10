import axios from "axios"
import store from "../store"

export const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
})

export const configHeaders = () => {
  const { token } = store.getState().user
  service.defaults.headers.common["x-auth-token"] = token
}
