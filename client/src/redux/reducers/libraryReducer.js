/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import { GET_LIBRARY } from "../types/library"

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
    default:
      return state
  }
}

export default libraryReducer
