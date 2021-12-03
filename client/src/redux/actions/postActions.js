/* eslint-disable no-unused-vars */
import axios from "axios"
import { SET_POSTS, GET_POST, SET_POST, SUBMIT_COMMENT } from "../types/posts"
import {
  getPostByIdService,
  createPostService,
  submitCommentService,
} from "../services/postService"
import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

const authToken = localStorage.getItem("Authorization")

export const getPostById = (postId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  const postById = await getPostByIdService(postId)
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: GET_POST, payload: postById })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const createPost = (newPost) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  const addNewPostDb = await createPostService(newPost)
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: SET_POST, payload: addNewPostDb })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const submitComment =
  (owner, commentBody, postId) => async (dispatch) => {
    dispatch({ type: LOADING_UI })

    const addNewCommentDb = await submitCommentService(
      owner,
      commentBody,
      postId
    )
    console.log(addNewCommentDb)
    try {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: SUBMIT_COMMENT, payload: addNewCommentDb.comment })
    } catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: error.response,
      })
    }

    // axios
    //   .post(
    //     `${process.env.REACT_APP_API_URL}/posts/${postId}/comments`,
    //     { commentBody, owner },
    //     {
    //       headers: { Authorization: authToken },
    //     }
    //   )
    //   .then((response) => {
    //     dispatch({ type: CLEAR_ERRORS })
    //     dispatch({ type: SET_POST, payload: response.data })
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: SET_ERRORS,
    //       payload: err.response.data,
    //     })
    //   })
  }
