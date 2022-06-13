/* eslint-disable no-unused-vars */
import {
  SET_ALL_COURSES,
  SET_ONE_COURSE,
  SET_ONE_LESSON,
} from "../types/elearning";
import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui";
import {
  getCourses as getCoursesService,
  getCourse as getCourseService,
  getLesson as getLessonService,
} from "../services/elearningService";

export const getAllCourses = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_UI });
    const courses = await getCoursesService();

    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: SET_ALL_COURSES, payload: courses });
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    });
  }
};

export const getCourse = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_UI });
    const courses = await getCourseService(id);

    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: SET_ONE_COURSE, payload: courses });
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    });
  }
};

export const getLesson = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_UI });
    const courses = await getLessonService(id);

    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: SET_ONE_LESSON, payload: courses });
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    });
  }
};
