/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */

import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USERLOGGED_IN,
  SET_USERS,
  SET_USER_PROFILE,
  UPDATE_USER,
  FOLLOW_USER,
  UNFOLLOW_USER,
} from "../types/user";
import { JOIN_COURSE, LEAVE_COURSE } from "../types/elearning";

const initialState = {
  token: localStorage.getItem("Authorization"),
  singleUser: null,
  users: [],
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        token: `Bearer ${action.payload.accessToken}`,
        singleUser: action.payload.user,
        isLoggedIn: true,
        // chatToken: action.payload.chatToken.token,
      };
    case SET_USER:
    case SET_USERLOGGED_IN:
    case JOIN_COURSE:
    case LEAVE_COURSE:
    case FOLLOW_USER:
    case UNFOLLOW_USER:
      return {
        ...state,
        singleUser: action.payload,
        isLoggedIn: true,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        isLoggedIn: true,
      };
    case UPDATE_USER:
      return {
        ...state,
        singleUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
