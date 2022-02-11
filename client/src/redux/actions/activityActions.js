import {
  GET_ALL_ACTIVITIES,
  GET_FOLLOWED_ACTIVITIES,
  SET_STREAM_TOKEN,
} from "../types/activities"

import {
  getAllActivityService,
  getFollowedActivityService,
  getStreamTokenService,
} from "../services/activityService"

import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

export const getAllActivities = () => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  try {
    const activitiesFromDB = await getAllActivityService()
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: GET_ALL_ACTIVITIES, payload: activitiesFromDB })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const getFollowedActivities = () => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  try {
    const followedActivitiesFromDB = await getFollowedActivityService()
    dispatch({ type: CLEAR_ERRORS })
    dispatch({
      type: GET_FOLLOWED_ACTIVITIES,
      payload: followedActivitiesFromDB,
    })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}

export const getStreamToken = (userId) => async (dispatch) => {
  dispatch({ type: LOADING_UI })

  try {
    const token = await getStreamTokenService({ userId })
    // console.log(token)
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: SET_STREAM_TOKEN, payload: token })
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response,
    })
  }
}
