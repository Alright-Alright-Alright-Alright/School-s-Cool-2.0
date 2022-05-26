import {
  POST_EVENT,
  SET_EVENTS,
  GET_EVENT,
  JOIN_EVENT,
  LEAVE_EVENT,
  EDIT_EVENT,
  DELETE_EVENT,
  INVITE_FOR_EVENT,
  REMOVE_EVENT_INVITE,
} from "../types/events"

import {
  getEvents,
  createEvent,
  getEvent,
  joinEventService,
  leaveEventService,
  editEventService,
  deleteEventService,
  inviteForEventService,
  removeInviteForEventService,
} from "../services/eventsService"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

export const getAllEvents = () => async (dispatch) => {
  try {
    const allEvents = await getEvents()
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: SET_EVENTS, payload: allEvents })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data.message,
    })
  }
}

export const createNewEvent = (eventData) => async (dispatch) => {
  try {
    const addEvent = await createEvent(eventData)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: POST_EVENT, payload: addEvent })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const getOneEvent = (eventId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  try {
    const eventFromDB = await getEvent(eventId)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: GET_EVENT, payload: eventFromDB })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const joinEvent = (eventId, user) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  try {
    const joinEventDb = await joinEventService(eventId, user)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: JOIN_EVENT, payload: joinEventDb })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const leaveEvent = (eventId, user) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  try {
    const leaveEventDb = await leaveEventService(eventId, user)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: LEAVE_EVENT, payload: leaveEventDb })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const editEvent = (eventId, eventData) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  try {
    const eventEdited = await editEventService(eventId, eventData)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: EDIT_EVENT, payload: eventEdited })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const deleteEvent = (eventId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  try {
    const eventDeleted = await deleteEventService(eventId)
    console.log(eventDeleted)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: DELETE_EVENT, payload: eventId })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const inviteForEvent = (eventId, userId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })
  console.log(eventId, userId)
  try {
    const inviteForEventDb = await inviteForEventService(eventId, userId)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: INVITE_FOR_EVENT, payload: inviteForEventDb })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const removeEventInvite = (eventId, userId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  try {
    const removeInviteDb = await removeInviteForEventService(eventId, userId)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: REMOVE_EVENT_INVITE, payload: removeInviteDb })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}
