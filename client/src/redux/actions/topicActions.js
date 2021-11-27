/* eslint-disable import/prefer-default-export */
/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
import {
  GET_TOPICS,
  GET_TOPIC,
  POST_TOPIC,
  JOIN_TOPIC,
  LEAVE_TOPIC,
} from "../types/topics"
import {
  getTopics,
  getTopic,
  addTopic,
  joinTopic,
  leaveTopic,
} from "../services/topicService"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

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

export const getAlltopics = () => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  const topicsFromDB = await getTopics()
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: GET_TOPICS, payload: topicsFromDB })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const getAtopic = () => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  const topicFromDB = await getTopic()
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: GET_TOPIC, payload: topicFromDB })
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

export const leaveAtopic = (topicId, user) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  const leaveTopicToDB = await leaveTopic(topicId, user)
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: LEAVE_TOPIC, payload: leaveTopicToDB })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}
