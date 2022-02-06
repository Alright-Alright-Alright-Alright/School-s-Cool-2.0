/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import {
  SET_POSTS,
  SET_POST,
  GET_POST,
  SUBMIT_COMMENT,
  LIKE_POST,
  UNLIKE_POST,
  DELETE_POST,
} from "../types/posts"
// import {
//   SET_ERRORS,
//   CLEAR_ERRORS,
//   LOADING_UI,
//   STOP_LOADING_UI,
// } from "../types/ui"

const initialState = {
  allPosts: [],
  singlePost: {},
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        allPosts: action.payload,
      }
    case GET_POST:
      return {
        ...state,
        singlePost: action.payload,
      }
    case LIKE_POST:
    case UNLIKE_POST:
      return {
        ...state,
        allPosts: state.allPosts.map((eachPost) =>
          eachPost._id === action.payload._id ? action.payload : eachPost
        ),
      }
    case SET_POST:
      return {
        ...state,
        allPosts: [action.payload, ...state.allPosts],
      }
    case DELETE_POST:
      return {
        ...state,
        allPosts: state.allPosts.filter(
          (eachPost) => eachPost._id !== action.payload._id
        ),
      }
    case SUBMIT_COMMENT:
      return {
        ...state,
        allPosts: state.allPosts.map((eachPost) =>
          eachPost._id === action.payload._id ? action.payload : eachPost
        ),
      }
    default:
      return state
  }
}

export default postsReducer
