/* eslint-disable import/no-anonymous-default-export */
import {
  SET_USER,
  // SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  //   LOADING_USER,
  //   MARK_NOTIFICATIONS_READ,
} from "../types/user"

const initialState = {
  loggedIn: false,
  loading: false,
  notifications: [],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_AUTHENTICATED:
    //   return {
    //     ...state,
    //     authenticated: true,
    //   }
    case SET_UNAUTHENTICATED:
      return initialState
    case SET_USER:
      return {
        loggedIn: true,
        loading: false,
        ...action.payload,
      }
    // case LOADING_USER:
    //   return {
    //     ...state,
    //     loading: true,
    //   }
    // case MARK_NOTIFICATIONS_READ:
    //   state.notifications.forEach((not) => (not.read = true))
    //   return {
    //     ...state,
    //   }
    default:
      return state
  }
}

export default userReducer
