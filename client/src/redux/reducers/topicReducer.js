/* eslint-disable no-unused-vars */
import { GET_TOPICS } from "../types/topics"

const initialState = {
  topics: [],
}

const topicReducer = (state = initialState.topics, action) => {
  switch (action.type) {
    case GET_TOPICS:
      return [...state, ...action?.payload]
    default:
      return state
  }
}

export default topicReducer
