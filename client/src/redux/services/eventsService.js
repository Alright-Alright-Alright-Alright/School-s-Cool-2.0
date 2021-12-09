/* eslint-disable dot-notation */
import { service, configHeaders } from "../api/axios"

export const getAllEvents = () =>
  service.get(`/events`, configHeaders()).then((response) => response.data)

export const getEvent = (eventId) =>
  service
    .get(`/event/${eventId}`, configHeaders())
    .then((responseFromAPI) => responseFromAPI.data)
