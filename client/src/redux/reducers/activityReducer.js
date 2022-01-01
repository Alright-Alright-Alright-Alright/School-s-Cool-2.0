/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import {
  GET_ALL_ACTIVITIES,
  GET_FOLLOWED_ACTIVITIES,
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
    default:
      return state
  }
}

export default activitiesReducer