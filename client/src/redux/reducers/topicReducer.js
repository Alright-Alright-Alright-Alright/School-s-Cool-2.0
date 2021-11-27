/* eslint-disable no-unused-vars */
import {
  GET_TOPICS,
  POST_TOPIC,
  JOIN_TOPIC,
  LEAVE_TOPIC,
  GET_TOPIC,
} from "../types/topics"

const initialState = {
  topics: [],
  topic: {},
}

const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPICS:
      return {
        topics: [...action.payload],
        topic: {},
      }
    case GET_TOPIC:
      return {
        topics: [],
        topic: { ...action.payload },
      }
    case POST_TOPIC:
      return {
        topics: [...action.payload],
        topic: {},
      }
    case JOIN_TOPIC:
      return {
        topics: [...action.payload],
        topic: {},
      }
    case LEAVE_TOPIC:
      return {
        topics: [...action.payload],
        topic: {},
      }
    default:
      return state
  }
}

export default topicReducer
