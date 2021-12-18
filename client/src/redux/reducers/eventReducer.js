import { SET_EVENTS } from "../types/events"

const initialState = {
  allEvents: [],
  singleEvent: {},
}

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        allEvents: [...action.payload],
      }
    default:
      return state
  }
}

export default eventReducer
