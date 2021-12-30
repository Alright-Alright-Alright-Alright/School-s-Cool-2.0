import {
  GET_TOPICS,
  GET_TOPIC,
  POST_TOPIC,
  JOIN_TOPIC,
  LEAVE_TOPIC,
  INVITE_FOR_TOPIC,
  REMOVE_INVITE,
} from "../types/topics"

import {
  getTopics,
  getTopic,
  addTopic,
  joinTopic,
  leaveTopic,
  inviteForTopicService,
  removeInviteForTopicService,
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

export const joinAtopic = (topicId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  const joinTopicToDB = await joinTopic(topicId)
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

export const leaveAtopic = (topicId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  const leaveTopicToDB = await leaveTopic(topicId)
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

export const getOneTopic = (topicId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })
  const topicFromDB = await getTopic(topicId)
  console.log(topicFromDB)
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

export const inviteForTopic = (topicId, userId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  const inviteForTopicDb = await inviteForTopicService(topicId, userId)
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: INVITE_FOR_TOPIC, payload: inviteForTopicDb })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const removeInvite = (topicId, userId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  const removeInviteDb = await removeInviteForTopicService(topicId, userId)
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: REMOVE_INVITE, payload: removeInviteDb })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}
