/* eslint-disable no-unused-vars */
import { GET_TOPICS, POST_TOPIC, JOIN_TOPIC } from "../types/topics"

const initialState = {
  topics: [],
}

const topicReducer = (state = initialState.topics, action) => {
  switch (action.type) {
    case GET_TOPICS:
      return [...action.payload]
    case POST_TOPIC:
      return [...action.payload]
    case JOIN_TOPIC:
      return [...action.payload]
    default:
      return state
  }
}

export default topicReducer
