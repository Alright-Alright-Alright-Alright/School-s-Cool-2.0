/* eslint-disable dot-notation */
import { service, configHeaders } from "../api/axios"

export const getEvents = () =>
  service.get("/events", configHeaders()).then((response) => response.data)

export const createEvent = (eventData) =>
  service.post("/events", eventData).then((response) => response.data)

export const getEvent = (eventId) =>
  service.get(`/events/${eventId}`, configHeaders()).then((responseFromAPI) => {
    console.log(responseFromAPI.data)
    return responseFromAPI.data[0]
  })
