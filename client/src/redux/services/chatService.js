/* eslint-disable import/prefer-default-export */
import axios from "axios"

const backendUrl = process.env.REACT_APP_API_URL
const authToken = localStorage.getItem("Authorization")

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: { Authorization: authToken },
})

export const getAllChatsByUser = (userId) => {
  service.get(`${backendUrl}/chats/${userId}`).then((responseFromAPI) => responseFromAPI.data)
}
