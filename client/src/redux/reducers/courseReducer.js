import {
  SET_ALL_COURSES,
  SET_ONE_COURSE,
  SET_ONE_LESSON,
  // JOIN_COURSE,
  // LEAVE_COURSE,
} from "../types/courses"

const initialState = {
  allCourses: [],
  singleCourse: {},
  singleLesson: {},
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
    case SET_ONE_LESSON:
      return {
        ...state,
        singleLesson: action.payload,
      }
    default:
      return state
  }
}

export default courseReducer
