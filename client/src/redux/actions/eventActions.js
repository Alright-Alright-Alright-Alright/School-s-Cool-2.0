import { POST_EVENT, SET_EVENTS, GET_EVENT } from "../types/events"
import { getEvents, createEvent, getEvent } from "../services/eventsService"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

export const getAllEvents = () => async (dispatch) => {
  const allEvents = await getEvents()
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: SET_EVENTS, payload: allEvents })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const createNewEvent = (eventData) => async (dispatch) => {
  const addEvent = await createEvent(eventData)
  try {
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
  const eventFromDB = await getEvent(eventId)

  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: GET_EVENT, payload: eventFromDB })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}
