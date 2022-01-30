/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import {
  ADD_COMMENT,
  DELETE_COMMENT,
  DELETE_FILE,
  FILTER_CATEGORY,
  FILTER_SUBJECT,
  GET_COMMENTS,
  GET_FILE,
  GET_LIBRARY,
  GET_USER_LIBRARY,
  LIKE_FILE,
  POST_FILE,
  SORT_BY,
  SORT_BY_NAME,
  UNLIKE_FILE,
} from "../types/library"

const initialState = {
  allFiles: [],
  sortedFiles: [],
  singleFile: null,
}

const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIBRARY:
      return {
        ...state,
        allFiles: action.payload.sort(
          (a, b) => b.likedBy.length - a.likedBy.length
        ),
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
    case GET_COMMENTS:
    case ADD_COMMENT:
    case DELETE_COMMENT:
      return {
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
    case SORT_BY:
      return {
        ...state,
        allFiles: [...state.allFiles].sort((a, b) => {
          if (
            a[action.payload].toLowerCase() > b[action.payload].toLowerCase()
          ) {
            return 1
          }
          if (
            a[action.payload].toLowerCase() < b[action.payload].toLowerCase()
          ) {
            return -1
          }
          return 0
        }),
      }
    case SORT_BY_NAME:
      return {
        ...state,
        allFiles: [...state.allFiles].sort((a, b) => {
          if (
            a.owner.firstName.toLowerCase() > b.owner.firstName.toLowerCase()
          ) {
            return 1
          }
          if (
            a.owner.firstName.toLowerCase() < b.owner.firstName.toLowerCase()
          ) {
            return -1
          }
          return 0
        }),
      }
    default:
      return state
  }
}

export default libraryReducer
