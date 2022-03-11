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
  newPasswordService,
  forgot,
} from "../services/userService";

import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USERLOGGED_IN,
  SET_USERS,
  SET_USER_PROFILE,
  UPDATE_USER,
  //   MARK_NOTIFICATIONS_READ,
} from "../types/user";

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_SUCCESS } from "../types/ui";

export const setAuthorizationHeader = (token) => {
  const Authorization = `Bearer ${token}`;
  JSON.stringify(localStorage.setItem("Authorization", Authorization));
};

export const loginUser = (userData) => async (dispatch) => {

  dispatch({ type: LOADING_UI });
  login(userData)
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.user));
      setAuthorizationHeader(response.accessToken);
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_AUTHENTICATED, payload: response });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.message,
      });
    });
  }


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
  localStorage.removeItem("user");
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
  console.log(userData)
  try {
    console.log(userData)
    const updatedUser = await updateUserService(userData);
    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: UPDATE_USER, payload: updatedUser });
  } catch (error) {
    console.log(error)
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

export const forgetAction = ( email ) => async (dispatch) => {
  dispatch({ type: LOADING_UI });
  try {
    const sucessMessage = await forgot( email );
    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: SET_SUCCESS, payload: sucessMessage });
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    });
  }
};

export const newPasswordAction = ( newPassword, confirmPassword, token ) => async (dispatch) => {
  dispatch({ type: LOADING_UI });
  try {
    const sucessMessage = await newPasswordService( newPassword, confirmPassword, token );
    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: SET_SUCCESS, payload: sucessMessage });
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    });
  }
};
