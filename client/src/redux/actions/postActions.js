import {
  SET_POSTS,
  GET_POST,
  SET_POST,
  SUBMIT_COMMENT,
  LIKE_POST,
  UNLIKE_POST,
  DELETE_POST,
} from "../types/posts"

import {
  getPostByIdService,
  createPostService,
  submitCommentService,
  getAllPostService,
  getAllEventPostService,
  likePostService,
  unlikePostService,
  deletePostService,
} from "../services/postService"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

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

export const getAllEventPosts = (eventId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  const allPosts = await getAllEventPostService(eventId)
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
  console.log("New Post", newPost)
  console.log("New Post DB", addNewPostDb)

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
      dispatch({ type: SUBMIT_COMMENT, payload: addNewCommentDb })
    } catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: error.response,
      })
    }
  }

export const likePost = (postId, userId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })
  const likePostDb = await likePostService(postId, { userId })
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: LIKE_POST, payload: likePostDb })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const unlikePost = (postId, userId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })
  try {
    const unlikePostDb = await unlikePostService(postId, { userId })
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: UNLIKE_POST, payload: unlikePostDb })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const deletePost = (postId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_UI })
    await deletePostService(postId)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: DELETE_POST, payload: postId })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}
