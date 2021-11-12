/* eslint-disable no-unused-vars */
import axios from "axios"
import { SET_TOPICS } from "../types/topics"
import TopicService from "../services/topicService"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

const service = new TopicService()

export const getAllTopics = () => (dispatch) => {
  dispatch({ type: LOADING_UI })

  // service
  //   .getAllTopics()
  //   .then((response) => {
  //     dispatch({ type: CLEAR_ERRORS })
  //     dispatch({ type: SET_TOPICS, payload: response.data })
  //   })
  //   .catch((err) => {
  //     dispatch({
  //       type: SET_ERRORS,
  //       payload: err.response,
  //     })
  //   })

  axios
    .get("http://localhost:5000/api/topics")
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: SET_TOPICS, payload: response.data })
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response,
      })
    })
}

export const otherFunction = () => () => {}
