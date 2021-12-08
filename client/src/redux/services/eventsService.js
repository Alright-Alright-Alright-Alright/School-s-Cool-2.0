/* eslint-disable dot-notation */
import axios from "axios"

const authToken = localStorage.getItem("Authorization")

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: { "x-auth-token": authToken },
})

export const getAllEvents = () =>
  service.get(`/events`).then((response) => response.data)

export const getEvent = (eventId) =>
  service
    .get(`/event/${eventId}`)
    .then((responseFromAPI) => responseFromAPI.data)
