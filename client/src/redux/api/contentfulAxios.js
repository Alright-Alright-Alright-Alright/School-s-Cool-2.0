/* eslint-disable dot-notation */
import axios from "axios"

export const service = axios.create({
  baseURL: process.env.REACT_APP_CONTENTFUL_API_URL,
  withCredentials: true,
})

export const configHeaders = () => {
  const token = process.env.REACT_APP_CONTENTFUL_TOKEN
  service.defaults.headers.common["Bearer"] = token
}
