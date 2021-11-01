import { SET_COURSES } from "../types/courses"

const initialState = {
  events: [],
}

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSES:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default courseReducer
