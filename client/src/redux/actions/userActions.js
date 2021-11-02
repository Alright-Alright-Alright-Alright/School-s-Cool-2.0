import axios from "axios"

import {
  SET_USER,
  SET_UNAUTHENTICATED,
  //   LOADING_USER,
  //   MARK_NOTIFICATIONS_READ,
} from "../types/user"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

// const userData = { email: "", password: "" }

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI })

  axios
    .post("http://localhost:5001/api/login", userData)
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: SET_USER, payload: response.data.user })
      history.push("/")
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response,
      })
    })
}

export const signupUser = (newUserData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI })

  axios
    .post("http://localhost:5000/api/register", newUserData)
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: SET_USER, payload: response.data })

      history.push("/")
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}

export const logoutUser = () => (dispatch) => {
  axios.post("http://localhost:5000/api/logout")
  dispatch({ type: SET_UNAUTHENTICATED })
}
