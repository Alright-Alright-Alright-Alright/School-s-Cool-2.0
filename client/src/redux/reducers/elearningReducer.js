import {
  SET_ALL_COURSES,
  SET_ONE_COURSE,
  SET_ONE_LESSON,
  SET_COURSE_LESSONS,
} from "../types/elearning";

const initialState = {
  courses: [],
  selectedCourse: null,
  lessons: [],
  selectedLesson: null,
};

const elearningReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    case SET_ONE_COURSE:
      return {
        ...state,
        selectedCourse: action.payload,
      };

    case SET_COURSE_LESSONS:
      return {
        ...state,
        lessons: action.payload,
      };
    case SET_ONE_LESSON:
      return {
        ...state,
        selectedLesson: action.payload,
      };
    default:
      return state;
  }
};

export default elearningReducer;
