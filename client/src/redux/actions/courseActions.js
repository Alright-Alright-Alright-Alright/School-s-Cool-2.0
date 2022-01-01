/* eslint-disable no-unused-vars */
import {
  SET_ALL_COURSES,
  SET_ONE_COURSE,
  SET_ONE_LESSON,
  JOIN_COURSE,
  LEAVE_COURSE,
} from "../types/courses"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

import {
  getAllCoursesService,
  getSingleCourseService,
  getSingleLessonService,
  joinCourseService,
  leaveCourseService,
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

export const getSingleLesson = (lessonId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })
  const singleLessonFromDb = await getSingleLessonService(lessonId)

  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: SET_ONE_LESSON, payload: singleLessonFromDb })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const joinCourse = (courseId) => async (dispatch) => {
  console.log("Joined course")
  dispatch({ type: LOADING_UI })
  const joinCourseFromDb = await joinCourseService({ courseId })
  console.log(joinCourseFromDb)
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: JOIN_COURSE, payload: joinCourseFromDb })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const leaveCourse = (courseId) => async (dispatch) => {
  console.log("left course")

  dispatch({ type: LOADING_UI })
  const leaveCourseFromDb = await leaveCourseService({ courseId })
  console.log(leaveCourseFromDb)
  try {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: LEAVE_COURSE, payload: leaveCourseFromDb })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}
