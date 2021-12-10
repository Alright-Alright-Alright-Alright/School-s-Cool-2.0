import { SET_EVENTS } from "../types/events"
import { getEvents } from "../services/eventsService"

import { SET_ERRORS, CLEAR_ERRORS } from "../types/ui"

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

export const otherFunction = () => () => {
  console.log("object")
}
