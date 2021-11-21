/* eslint-disable import/prefer-default-export */
/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
import { GET_TOPICS, POST_TOPIC } from "../types/topics"
import { getTopics, addTopic } from "../services/topicService"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

// const topicService = new TopicService()
// const authToken = localStorage.getItem("Authorization")

export const getAllTopics = () => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  const topicFromDB = await getTopics()
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: GET_TOPICS, payload: topicFromDB })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const addAtopic = (topicData) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  const addTopicToDB = await addTopic(topicData)
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: POST_TOPIC, payload: addTopicToDB })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}
