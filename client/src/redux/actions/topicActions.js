/* eslint-disable import/prefer-default-export */
/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
import { GET_TOPICS, POST_TOPIC, JOIN_TOPIC } from "../types/topics"
import { getTopics, addTopic, joinTopic } from "../services/topicService"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

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

export const joinAtopic = (topicId, user) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  const joinTopicToDB = await joinTopic(topicId, user)
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: JOIN_TOPIC, payload: joinTopicToDB })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}
