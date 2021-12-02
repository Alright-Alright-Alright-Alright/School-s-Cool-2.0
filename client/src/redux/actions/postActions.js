/* eslint-disable no-unused-vars */
import axios from "axios"
import { GET_POST, SET_POST, SUBMIT_COMMENT } from "../types/posts"
import { getPostByIdService } from "../services/postService"
import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

const authToken = localStorage.getItem("Authorization")

// export const getAllPosts = (topicId) => (dispatch) => {
//   dispatch({ type: LOADING_UI })

//   axios
//     .get(`${process.env.REACT_APP_API_URL}/topics/${topicId}/posts`, topicId, {
//       headers: { Authorization: authToken },
//     })
//     .then((response) => {
//       dispatch({ type: CLEAR_ERRORS })
//       dispatch({ type: SET_POSTS, payload: response.data })
//     })
//     .catch((err) => {
//       dispatch({
//         type: SET_ERRORS,
//         payload: err.response.data,
//       })
//     })
// }

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
      dispatch({ type: SET_POST, payload: response.data })
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}

export const getPostById = (postId) => (dispatch) => {
  dispatch({ type: LOADING_UI })
  axios
    .get(`${process.env.REACT_APP_API_URL}/posts/${postId}`, {
      headers: { Authorization: authToken },
    })
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: GET_POST, payload: response.data })
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}

// export const getPostById = (postId) => async (dispatch) => {
//   dispatch({ type: LOADING_UI })

//   const postFromDB = await getPostByIdService(postId)
//   console.log(postFromDB)

//   try {
//     dispatch({ type: CLEAR_ERRORS })
//     dispatch({ type: GET_POST, payload: postFromDB })
//   } catch (error) {
//     dispatch({
//       type: SET_ERRORS,
//       payload: error.response,
//     })
//   }
// }

export const submitComment = (owner, commentBody, postId) => (dispatch) => {
  console.log(postId, commentBody, owner)
  dispatch({ type: LOADING_UI })
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/posts/${postId}/comments`,
      { commentBody, owner },
      {
        headers: { Authorization: authToken },
      }
    )
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: SUBMIT_COMMENT, payload: response.data })
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}
