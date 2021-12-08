/* eslint-disable import/prefer-default-export */
import axios from "axios"

export const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
})

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("Authorization"),
    },
  }
  return headers
}
