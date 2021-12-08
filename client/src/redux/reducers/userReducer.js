/* eslint-disable import/no-anonymous-default-export */
import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USERLOGGED_IN,
  SET_USERS,
} from "../types/user"

const initialState = {
  token: localStorage.getItem("Authorization"),
  singleUser: null,
  users: [],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        token: action.payload.accessToken,
        singleUser: action.payload.user,
      }
    case SET_USER:
    case SET_USERLOGGED_IN:
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
