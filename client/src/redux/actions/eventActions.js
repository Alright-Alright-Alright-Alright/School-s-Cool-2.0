import axios from "axios"
import { SET_EVENTS } from "../types/events"
// import EventService from "../services/eventsService"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

// const eventService = new EventService()
const authToken = localStorage.getItem("Authorization")

export const getAllEvents = () => (dispatch) => {
  dispatch({ type: LOADING_UI })

  axios
    .get(`${process.env.REACT_APP_API_URL}/events`, {
      headers: { Authorization: authToken },
    })
    // eventService.getAllEvents()
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: SET_EVENTS, payload: response.data })
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response,
      })
    })
}

export const otherFunction = () => () => {
  console.log("object")
}
