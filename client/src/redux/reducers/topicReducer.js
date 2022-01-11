/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import {
  GET_TOPICS,
  POST_TOPIC,
  JOIN_TOPIC,
  LEAVE_TOPIC,
  GET_TOPIC,
  INVITE_FOR_TOPIC,
  REMOVE_INVITE,
} from "../types/topics"

const initialState = {
  allTopics: [],
  singleTopic: {},
}

const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPICS:
      return {
        ...state,
        allTopics: action.payload,
      }
    case GET_TOPIC:
      return {
        ...state,
        singleTopic: action.payload,
      }
    case POST_TOPIC:
      return {
        allTopics: [...state.allTopics, action.payload],
      }
    case JOIN_TOPIC:
    case LEAVE_TOPIC:
      return {
        allTopics: state.allTopics.map((eachTopic) =>
          eachTopic._id === action.payload.topic._id
            ? action.payload.topic
            : eachTopic
        ),
      }
    case INVITE_FOR_TOPIC:
    case REMOVE_INVITE:
      return {
        ...state,
        singleTopic: action.payload,
      }
    default:
      return state
  }
}

export default topicReducer
