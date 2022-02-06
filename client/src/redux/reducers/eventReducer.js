<<<<<<< HEAD
import { POST_EVENT, SET_EVENTS } from "../types/events"
=======
/* eslint-disable no-underscore-dangle */
import {
  GET_EVENT,
  POST_EVENT,
  SET_EVENTS,
  JOIN_EVENT,
  LEAVE_EVENT,
} from "../types/events"
>>>>>>> dev

const initialState = {
  allEvents: [],
  singleEvent: {},
}

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        allEvents: action.payload,
      }
    case POST_EVENT:
      return {
<<<<<<< HEAD
        allEvents: [...action.payload],
=======
        allEvents: [...state.allEvents, action.payload],
      }
    case GET_EVENT:
      return {
        ...state,
        singleEvent: action.payload,
      }
    case JOIN_EVENT:
    case LEAVE_EVENT:
      return {
        ...state,
        singleEvent: action.payload,
>>>>>>> dev
      }
    default:
      return state
  }
}

export default eventReducer
