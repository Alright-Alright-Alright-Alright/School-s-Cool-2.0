/* eslint-disable prettier/prettier */
/* eslint-disable dot-notation */
import {
  login,
  register,
  loggedin,
  logout,
  getAllUsers,
  updateUserService,
  getUserProfileService,
} from "../services/userService";

import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USERLOGGED_IN,
  SET_USERS,
  SET_USER_PROFILE,
  //   MARK_NOTIFICATIONS_READ,
} from "../types/user";

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui";

export const setAuthorizationHeader = (token) => {
  const Authorization = `Bearer ${token}`;
  localStorage.setItem("Authorization", Authorization);
};

export const loginUser = (userData) => async (dispatch) => {

  dispatch({ type: LOADING_UI });

  const logInUser = await login(userData);
  console.log(logInUser);

  try {
    localStorage.setItem("user", JSON.stringify(logInUser.user));
    setAuthorizationHeader(logInUser.accessToken);

    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: SET_AUTHENTICATED, payload: logInUser });
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    });
  }
};

export const registerUser = (registerNewUser) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  register(registerNewUser)
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_USER, payload: response.message });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response?.data,
      });
    });
};

export const loggedInUser = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  loggedin()
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_USERLOGGED_IN, payload: response });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response?.data,
      });
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("Authorization");
  logout();
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const getAllTheUsers = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  getAllUsers()
    .then((response) => {
      dispatch({ type: SET_USERS, payload: response });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response?.data,
      });
    });
};

export const updateUser = (userData) => async (dispatch) => {
  dispatch({ type: LOADING_UI });

  const updatedUser = await updateUserService(userData);
  try {
    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: SET_USER, payload: updatedUser });
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    });
  }
};

export const getUserProfile = (user) => async (dispatch) => {
  dispatch({ type: LOADING_UI });

  const userProfile = await getUserProfileService(user);
  try {
    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: SET_USER_PROFILE, payload: userProfile });
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    });
  }
};
