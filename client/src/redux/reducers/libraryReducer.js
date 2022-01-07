/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import {
  DELETE_FILE,
  FILTER_CATEGORY,
  FILTER_SUBJECT,
  GET_FILE,
  GET_LIBRARY,
  GET_USER_LIBRARY,
  LIKE_FILE,
  POST_FILE,
  UNLIKE_FILE,
} from "../types/library"

const initialState = {
  allFiles: [],
  singleFile: null,
}

const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIBRARY:
      return {
        ...state,
        allFiles: action.payload,
      }
    case GET_FILE:
      return {
        ...state,
        singleFile: action.payload,
      }
    case GET_USER_LIBRARY:
      return {
        ...state,
        allFiles: action.payload,
      }
    case POST_FILE:
      return {
        ...state,
        allFiles: [...state.allFiles, action.payload.file],
      }
    case FILTER_CATEGORY:
      return {
        ...state,
        allFiles: state.allFiles.filter(
          (file) => file.category === action.payload
        ),
      }
    case FILTER_SUBJECT:
      return {
        ...state,
        allFiles: state.allFiles.filter(
          (file) => file.subject === action.payload
        ),
      }
    case LIKE_FILE:
    case UNLIKE_FILE:
      return {
        // allFiles: state.allFiles.map((eachFile) =>
        //   eachFile._id === action.payload._id ? action.payload : eachFile
        // ),
        ...state,
        singleFile:
          state.singleFile._id === action.payload._id
            ? action.payload
            : state.singleFile,
      }
    case DELETE_FILE:
      return {
        ...state,
        allFiles: state.allFiles.filter(
          (eachFile) => eachFile._id !== action.payload
        ),
      }
    default:
      return state
  }
}

export default libraryReducer
