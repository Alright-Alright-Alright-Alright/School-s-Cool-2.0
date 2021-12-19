import { SET_ALL_COURSES, SET_ONE_COURSE } from "../types/courses"

const initialState = {
  allCourses: [],
  singleCourse: {},
}

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_COURSES:
      return {
        ...state,
        allCourses: action.payload,
      }
    case SET_ONE_COURSE:
      return {
        ...state,
        singleCourse: action.payload,
      }
    default:
      return state
  }
}

export default courseReducer
