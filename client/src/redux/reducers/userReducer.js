/* eslint-disable import/no-anonymous-default-export */
import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USERLOGGED_IN,
  SET_USERS,
} from "../types/user"

import { JOIN_COURSE, LEAVE_COURSE } from "../types/courses"

const initialState = {
  token: localStorage.getItem("Authorization"),
  singleUser: JSON.parse(localStorage.getItem("user")) || null,
  users: [],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        token: `Bearer ${action.payload.accessToken}`,
        singleUser: action.payload.user,
      }
    case SET_USER:
    case SET_USERLOGGED_IN:
    case JOIN_COURSE:
    case LEAVE_COURSE:
      return {
        ...state,
        singleUser: action.payload,
      }
    case SET_UNAUTHENTICATED:
      return initialState
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
