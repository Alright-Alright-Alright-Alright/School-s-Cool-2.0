/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import {
  FILTER_CATEGORY,
  FILTER_SUBJECT,
  GET_LIBRARY,
  GET_USER_LIBRARY,
  LIKE_FILE,
  POST_FILE,
  UNLIKE_FILE,
} from "../types/library"

const initialState = {
  allFiles: [],
}

const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIBRARY:
      return {
        ...state,
        allFiles: action.payload,
      }
    case GET_USER_LIBRARY:
      return {
        ...state,
        allFiles: action.payload,
      }
    case POST_FILE:
      return {
        allFiles: [...state.allFiles, action.payload.file],
      }
    case FILTER_CATEGORY:
      return {
        allFiles: state.allFiles.filter(
          (file) => file.category === action.payload
        ),
      }
    case FILTER_SUBJECT:
      return {
        allFiles: state.allFiles.filter(
          (file) => file.subject === action.payload
        ),
      }
    case LIKE_FILE:
    case UNLIKE_FILE:
      return {
        allFiles: state.allFiles.map((eachFile) =>
          eachFile._id === action.payload._id ? action.payload : eachFile
        ),
      }
    default:
      return state
  }
}

export default libraryReducer
