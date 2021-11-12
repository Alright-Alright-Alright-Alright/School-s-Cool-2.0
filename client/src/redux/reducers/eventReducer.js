import { SET_EVENTS } from "../types/events"

const initialState = {
  events: [],
}

const eventReducer = (state = initialState.events, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return [...state, ...action.payload]
    default:
      return state
  }
}

export default eventReducer
