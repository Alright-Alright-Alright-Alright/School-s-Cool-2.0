/* eslint-disable dot-notation */
import { service, setHeaders } from "../api/axios"

export const getAllEvents = () =>
  service.get(`/events`, setHeaders()).then((response) => response.data)

export const getEvent = (eventId) =>
  service
    .get(`/event/${eventId}`, setHeaders())
    .then((responseFromAPI) => responseFromAPI.data)
