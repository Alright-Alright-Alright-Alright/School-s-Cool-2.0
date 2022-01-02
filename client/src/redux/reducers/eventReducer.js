import { GET_EVENT, POST_EVENT, SET_EVENTS } from "../types/events"

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
        allEvents: [...action.payload],
      }
    case GET_EVENT:
      return {
        ...state,
        singleEvent: action.payload,
      }
    default:
      return state
  }
}

export default eventReducer
