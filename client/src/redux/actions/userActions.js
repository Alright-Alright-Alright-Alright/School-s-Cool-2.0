import UserService from "../services/userService"

import {
  SET_USER,
  SET_UNAUTHENTICATED,
  //   LOADING_USER,
  //   MARK_NOTIFICATIONS_READ,
} from "../types/user"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

const service = new UserService()

export const loginUser = (userData) => (dispatch) => {
  dispatch({ type: LOADING_UI })
  service
    .login(userData)
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: SET_USER, payload: response.data.user })
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response?.data,
      })
    })
}

export const registerUser = (registerNewUser) => (dispatch) => {
  dispatch({ type: LOADING_UI })
  service
    .register(registerNewUser)
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: SET_USER, payload: response.message })
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response?.data,
      })
    })
}

export const logoutUser = () => (dispatch) => {
  service.logout()
  dispatch({ type: SET_UNAUTHENTICATED })
}
