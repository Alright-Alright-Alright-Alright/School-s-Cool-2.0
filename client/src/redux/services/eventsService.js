/* eslint-disable dot-notation */
import { service, configHeaders } from "../api/axios"

export const getEvents = () =>
  service.get("/events", configHeaders()).then((response) => response.data)

export const createEvent = (eventData) =>
  service.post("/events", eventData).then((response) => response.data)

export const getEvent = (eventId) =>
  service
    .get(`/events/${eventId}`, configHeaders())
    .then((responseFromAPI) => responseFromAPI.data[0])

export const joinEventService = (eventId, user) =>
  service
    .put(`/events/${eventId}/join`, user, configHeaders())
    .then((response) => response.data)

export const leaveEventService = (eventId, user) =>
  service
    .put(`/events/${eventId}/leave`, user, configHeaders())
    .then((response) => response.data)

export const editEventService = (eventId, eventData) =>
  service
    .put(`/events/${eventId}`, eventData, configHeaders())
    .then((response) => response.data)
