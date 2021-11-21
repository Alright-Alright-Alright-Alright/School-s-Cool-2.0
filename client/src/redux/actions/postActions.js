import axios from "axios"
import { SET_POSTS, POST_POST } from "../types/posts"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

const authToken = localStorage.getItem("Authorization")

export const getAllPosts = (topicId) => (dispatch) => {
  dispatch({ type: LOADING_UI })

  axios
    .get(`${process.env.REACT_APP_API_URL}/topics/${topicId}/posts`, topicId, {
      headers: { Authorization: authToken },
    })
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: SET_POSTS, payload: response.data })
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}

export const createPost = (newPost) => (dispatch) => {
  dispatch({ type: LOADING_UI })
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/topics/${newPost.topicId}/posts`,
      newPost,
      {
        headers: { Authorization: authToken },
      }
    )
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: POST_POST, payload: response.data })
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}
