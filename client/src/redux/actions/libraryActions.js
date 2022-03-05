/* eslint-disable import/prefer-default-export */
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  DELETE_FILE,
  FILTER_CATEGORY,
  FILTER_SUBJECT,
  GET_COMMENTS,
  GET_FILE,
  GET_LIBRARY,
  LIKE_FILE,
  POST_FILE,
  SORT_BY,
  SORT_BY_NAME,
  UNLIKE_FILE,
} from "../types/library"
import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"
import {
  addFile,
  deleteCommentService,
  fileDeleteService,
  getCommentsService,
  getFile,
  getLibraryFiles,
  getUserLibraryFiles,
  iLikeThisFile,
  iUnlikeThisFile,
  submitCommentService,
} from "../services/libraryServices"

export const getAllFilesFromLibrary = () => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  try {
    const libraryFilesFromDB = await getLibraryFiles()
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: GET_LIBRARY, payload: libraryFilesFromDB })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data.message,
    })
  }
}

export const getSingleFile = (fileId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  try {
    const file = await getFile(fileId)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: GET_FILE, payload: file })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const getComments = (fileId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  try {
    const comments = await getCommentsService(fileId)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: GET_COMMENTS, payload: comments })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data.message,
    })
  }
}

export const submitComment = (commentBody, fileId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  try {
    const addNewCommentDb = await submitCommentService({
      commentBody,
      fileId,
    })
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: ADD_COMMENT, payload: addNewCommentDb })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const deleteComment = (commentId, id) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

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

export const getUserFilesFromLibrary = () => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  try {
    const userFilesFromDB = await getUserLibraryFiles()
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: GET_LIBRARY, payload: userFilesFromDB })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const addFileToLibrary = (fileData) => async (dispatch) => {
  dispatch({ type: LOADING_UI })
  try {
    const addAFile = await addFile(fileData)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: POST_FILE, payload: addAFile })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data.message,
    })
  }
}

export const filterLibraryByCategory = (category) => async (dispatch) => {
  dispatch({ type: LOADING_UI })
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: FILTER_CATEGORY, payload: category })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const filterLibraryBySubject = (subject) => async (dispatch) => {
  dispatch({ type: LOADING_UI })
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: FILTER_SUBJECT, payload: subject })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const iLikedAfile = (fileId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  try {
    const like = await iLikeThisFile(fileId)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: LIKE_FILE, payload: like })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const iUnlikedAfile = (fileId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  try {
    const unlike = await iUnlikeThisFile(fileId)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: UNLIKE_FILE, payload: unlike })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const deleteFile = (fileId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  try {
    await fileDeleteService(fileId)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: DELETE_FILE, payload: fileId })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const getSortedBy = (thisVariable) => async (dispatch) => {
  dispatch({ type: LOADING_UI })
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: SORT_BY, payload: thisVariable })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const sortedByUser = () => async (dispatch) => {
  dispatch({ type: LOADING_UI })
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: SORT_BY_NAME })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}
