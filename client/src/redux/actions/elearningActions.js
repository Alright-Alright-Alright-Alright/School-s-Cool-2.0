/* eslint-disable no-unused-vars */
import {
  SET_ALL_COURSES,
  SET_ONE_COURSE,
  SET_ONE_LESSON,
  JOIN_COURSE,
  LEAVE_COURSE,
} from "../types/elearning";

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui";

import { getCourses } from "../services/elearningService";

export const getAllCourses = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_UI });
    const courses = await getCourses();

    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: SET_ALL_COURSES, payload: courses });
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    });
  }
};
