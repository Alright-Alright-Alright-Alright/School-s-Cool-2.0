/* eslint-disable import/no-anonymous-default-export */
import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USERLOGGED_IN,
  SET_USERS,
} from "../types/user"

const initialState = {
  user: {},
  users: [],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...action.payload,
      }
    case SET_UNAUTHENTICATED:
      return initialState
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      }
    case SET_USERLOGGED_IN:
      return {
        ...action.payload,
      }
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
