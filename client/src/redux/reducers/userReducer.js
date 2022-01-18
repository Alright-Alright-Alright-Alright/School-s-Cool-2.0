/* eslint-disable import/no-anonymous-default-export */
import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USERLOGGED_IN,
  SET_USERS,
  SET_USER_PROFILE,
} from "../types/user"
import { JOIN_COURSE, LEAVE_COURSE } from "../types/courses"

const user = JSON.parse(localStorage.getItem("user"))

const initialState = user
  ? {
      token: localStorage.getItem("Authorization"),
      singleUser: user,
      users: [],
      isLoggedIn: true,
    }
  : {
      token: null,
      singleUser: null,
      users: [],
      isLoggedIn: false,
    }

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        token: `Bearer ${action.payload.accessToken}`,
        singleUser: action.payload.user,
        chatToken: action.payload.chatToken.token,
      }
    case SET_USER:
    case SET_USERLOGGED_IN:
    case JOIN_COURSE:
    case LEAVE_COURSE:
      return {
        ...state,
        singleUser: action.payload,
        isLoggedIn: true,
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      }
    case SET_UNAUTHENTICATED:
      return initialState
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        isLoggedIn: true,
      }
    default:
      return state
  }
}

export default userReducer
