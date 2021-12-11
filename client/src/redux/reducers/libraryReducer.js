/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import { FILTER_CATEGORY, GET_LIBRARY, POST_FILE } from "../types/library"

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
    default:
      return state
  }
}

export default libraryReducer
