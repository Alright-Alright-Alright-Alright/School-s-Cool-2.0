import axios from "axios"
import UserService from "../services/userService"

import {
  SET_USER,
  SET_UNAUTHENTICATED,
  //   LOADING_USER,
  //   MARK_NOTIFICATIONS_READ,
} from "../types/user"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

const service = new UserService()

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI })

  service
    .login(userData)
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

export const registerUser = (registerNewUser, history) => (dispatch) => {
  dispatch({ type: LOADING_UI })
  axios
    .post("http://localhost:5000/api/register", registerNewUser)
    // .register(registerNewUser)
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
  axios.post("/logout")
  dispatch({ type: SET_UNAUTHENTICATED })
}
