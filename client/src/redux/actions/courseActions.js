import axios from "axios"
import { SET_COURSES } from "../types/courses"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

export const getAllCourses = () => (dispatch) => {
  dispatch({ type: LOADING_UI })

  axios
    .get("http://localhost:5000/api/courses")
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: SET_COURSES, payload: response.data })
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}

export const otherFunction = () => () => {
  console.log("object")
}
