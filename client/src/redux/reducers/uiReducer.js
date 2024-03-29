import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_SUCCESS,
} from "../types/ui"

const initialState = {
  loading: false,
  errors: null,
  success: null,
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      }
    case SET_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      }
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      }
    case STOP_LOADING_UI:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export default uiReducer
