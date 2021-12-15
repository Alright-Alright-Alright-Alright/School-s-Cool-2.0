/* eslint-disable no-unused-vars */
import axios from "axios"
import { GET_CONTACTS, GET_CONVERSATION, SEND_MESSAGE } from "../types/conversation"
import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types/ui"

const authToken = localStorage.getItem("Authorization")

export const getUserConversations = (userId) => (dispatch) => {
  dispatch({ type: LOADING_UI })
  axios
    .get(
      `${process.env.REACT_APP_API_URL}/conversations/user/${userId}`,
      {
        headers: { Authorization: authToken },
      }
    )
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: GET_CONVERSATION, payload: response.data })
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}

export const sendMessage = (conversationId, message) => (dispatch) => {
  dispatch({ type: LOADING_UI })

  axios
    .post(`${process.env.REACT_APP_API_URL}/conversations/${conversationId}`, message.content, {
      headers: { Authorization: authToken },
    })
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: SEND_MESSAGE, payload: response.data })
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}


export const getContacts = () => (dispatch) => {
  dispatch({ type: LOADING_UI })
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/conversations/contacts`,
      { commentBody, owner },
      {
        headers: { Authorization: authToken },
      }
    )
    .then((response) => {
      dispatch({ type: CLEAR_ERRORS })
      dispatch({ type: GET_CONTACTS, payload: response.data })
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}
