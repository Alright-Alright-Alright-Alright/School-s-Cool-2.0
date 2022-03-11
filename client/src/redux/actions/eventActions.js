import {
  POST_EVENT,
  SET_EVENTS,
  GET_EVENT,
  JOIN_EVENT,
  LEAVE_EVENT,
  EDIT_EVENT,
} from "../types/events"

import {
  getEvents,
  createEvent,
  getEvent,
  joinEventService,
  leaveEventService,
  editEventService,
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
    console.log(eventEdited)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: EDIT_EVENT, payload: eventEdited })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}
