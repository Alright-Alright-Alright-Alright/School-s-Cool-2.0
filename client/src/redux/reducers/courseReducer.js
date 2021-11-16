import { SET_COURSES } from "../types/courses"

const initialState = {
  courses: [],
}

const courseReducer = (state = initialState.courses, action) => {
  switch (action.type) {
    case SET_COURSES:
      return [...state, ...action.payload]
    default:
      return state
  }
}

export default courseReducer
