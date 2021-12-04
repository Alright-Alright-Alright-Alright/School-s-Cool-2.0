/* eslint-disable no-unused-vars */
import axios from "axios"
import { SET_POSTS, GET_POST, SET_POST, SUBMIT_COMMENT } from "../types/posts"
import {
  getPostByIdService,
  createPostService,
  submitCommentService,
  getAllPostService,
} from "../services/postService"
import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

const authToken = localStorage.getItem("Authorization")

export const getAllPosts = (topicId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  const allPosts = await getAllPostService(topicId)
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: SET_POSTS, payload: allPosts })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

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

    const addNewCommentDb = await submitCommentService({
      owner,
      commentBody,
      postId,
    })
    try {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: SUBMIT_COMMENT, payload: addNewCommentDb.comment })
    } catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: error.response,
      })
    }
  }
