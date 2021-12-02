/* eslint-disable prettier/prettier */
/* eslint-disable dot-notation */
// import axios from "axios"
import UserService from "../services/userService"

import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USERLOGGED_IN,
  //   LOADING_USER,
  //   MARK_NOTIFICATIONS_READ,
} from "../types/user"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

const userService = new UserService()

export const setAuthorizationHeader = (token) => {
  const Authorization = `Bearer ${token}`
  localStorage.setItem("Authorization", Authorization)
}

export const loginUser = (userData) => (dispatch) => {
  dispatch({ type: LOADING_UI })
  userService
    .login(userData)
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: SET_AUTHENTICATED, payload: response.user })
      setAuthorizationHeader(response.accessToken)
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
  userService
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

export const loggedInUser = () => (dispatch) => {
  dispatch({ type: LOADING_UI })
  userService
    .loggedin()
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: SET_USERLOGGED_IN, payload: response })
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response?.data,
      })
    })
}

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("Authorization")
  userService.logout()
  dispatch({ type: SET_UNAUTHENTICATED })
}
