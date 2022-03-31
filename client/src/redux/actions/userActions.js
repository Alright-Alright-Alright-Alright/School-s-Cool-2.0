/* eslint-disable prettier/prettier */
/* eslint-disable dot-notation */
import {
  login,
  register,
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
      localStorage.setItem(
        "chatToken",
        JSON.stringify(response.chatToken.token)
      );
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
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const chatToken = JSON.parse(localStorage.getItem("chatToken"));

    dispatch({ type: LOADING_UI });
    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: SET_USERLOGGED_IN, payload: { user, chatToken } });
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response?.data,
    });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("user");
  localStorage.removeItem("Authorization");
  localStorage.removeItem("chatToken");
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
  try {
    const updatedUser = await updateUserService(userData);
    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: UPDATE_USER, payload: updatedUser });
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

export const forgetAction = (email) => async (dispatch) => {
  dispatch({ type: LOADING_UI });
  try {
    const sucessMessage = await forgot(email);
    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: SET_SUCCESS, payload: sucessMessage });
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    });
  }
};

export const newPasswordAction =
  (newPassword, confirmPassword, token) => async (dispatch) => {
    dispatch({ type: LOADING_UI });
    try {
      const sucessMessage = await newPasswordService(
        newPassword,
        confirmPassword,
        token
      );
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_SUCCESS, payload: sucessMessage });
    } catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: error.response,
      });
    }
  };
