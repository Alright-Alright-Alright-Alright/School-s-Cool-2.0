/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import {
  DELETE_COMMENT,
  GET_ALL_ACTIVITIES,
  GET_FOLLOWED_ACTIVITIES,
  SUBMIT_COMMENT,
} from "../types/activities"

const initialState = {
  allActivities: [],
  followedActivities: [],
}

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        allActivities: action.payload,
      }
    case GET_FOLLOWED_ACTIVITIES:
      return {
        ...state,
        followedActivities: action.payload,
      }
    case SUBMIT_COMMENT:
    case DELETE_COMMENT:
      return {
        ...state,
        allActivities: state.allActivities.map((eachFile) =>
          eachFile._id === action.payload._id ? action.payload : eachFile
        ),
      }
    default:
      return state
  }
}

export default activitiesReducer
