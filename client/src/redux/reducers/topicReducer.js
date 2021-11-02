import { SET_TOPICS } from "../types/topics"

const initialState = {
  topics: [],
}

const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOPICS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default topicReducer
