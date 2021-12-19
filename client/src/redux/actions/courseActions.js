/* eslint-disable no-unused-vars */
import { SET_ALL_COURSES, SET_ONE_COURSE } from "../types/courses"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

import {
  getAllCoursesService,
  getSingleCourseService,
} from "../services/coursesService"

export const getAllCourses = () => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  const coursesFromDB = await getAllCoursesService()
  // console.log(coursesFromDB)

  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: SET_ALL_COURSES, payload: coursesFromDB })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const getSingleCourse = (courseId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })
  const singleCourseFromDb = await getSingleCourseService(courseId)

  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: SET_ONE_COURSE, payload: singleCourseFromDb })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}
