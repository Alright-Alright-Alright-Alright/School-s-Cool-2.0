import axios from "axios"
import { SET_TOPICS } from "../types/topics"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

export const getAllTopics = () => (dispatch) => {
  dispatch({ type: LOADING_UI })

  axios
    .get("http://localhost:5001/api/topics")
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
