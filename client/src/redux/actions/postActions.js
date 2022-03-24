import {
  SET_POSTS,
  GET_POST,
  SUBMIT_COMMENT,
  LIKE_POST,
  UNLIKE_POST,
  DELETE_POST,
  UPDATE_POST,
  ADD_POST,
  DELETE_COMMENT,
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
  updatePostService,
  deleteCommentService,
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

  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: ADD_POST, payload: addNewPostDb })
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

export const deleteComment = (commentId, id) => async (dispatch) => {
  dispatch({ type: LOADING_UI })
  console.log(commentId, id)
  try {
    const deleteCommentDb = await deleteCommentService({
      commentId,
      id,
    })
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: DELETE_COMMENT, payload: deleteCommentDb })
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

export const updatePost = (postId, body) => async (dispatch) => {
  dispatch({ type: LOADING_UI })
  try {
    const updatedPostDb = await updatePostService(postId, body)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: UPDATE_POST, payload: updatedPostDb })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const deletePost = (postId, parentId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_UI })
    await deletePostService(postId, parentId)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: DELETE_POST, payload: postId })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}
