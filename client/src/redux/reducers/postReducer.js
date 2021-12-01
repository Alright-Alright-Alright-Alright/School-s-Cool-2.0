import { SET_POSTS, SET_POST, GET_POST, SUBMIT_COMMENT } from "../types/posts"
// import {
//   SET_ERRORS,
//   CLEAR_ERRORS,
//   LOADING_UI,
//   STOP_LOADING_UI,
// } from "../types/ui"

const initialState = {
  posts: [],
  post: {},
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      }
    case GET_POST:
      return {
        ...state,
        ...action.payload,
      }
    case SET_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      }
    case SUBMIT_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: [action.payload, ...state.post.comments],
        },
      }
    default:
      return state
  }
}

export default postsReducer
