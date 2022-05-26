/* eslint-disable no-underscore-dangle */
import {
  GET_EVENT,
  POST_EVENT,
  SET_EVENTS,
  JOIN_EVENT,
  LEAVE_EVENT,
  EDIT_EVENT,
  DELETE_EVENT,
  INVITE_FOR_EVENT,
  REMOVE_EVENT_INVITE,
} from "../types/events"

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
        allEvents: [...state.allEvents, action.payload],
      }
    case EDIT_EVENT:
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
      }
    case DELETE_EVENT:
      return {
        ...state,
        allEvents: state.allEvents.filter(
          (event) => event._id !== action.payload
        ),
      }
    case INVITE_FOR_EVENT:
    case REMOVE_EVENT_INVITE:
      return {
        ...state,
        singleEvent: action.payload,
      }

    default:
      return state
  }
}

export default eventReducer
