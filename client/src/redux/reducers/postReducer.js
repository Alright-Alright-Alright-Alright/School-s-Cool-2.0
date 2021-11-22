import { POST_POST, SET_POSTS } from "../types/posts"
// import {
//   SET_ERRORS,
//   CLEAR_ERRORS,
//   LOADING_UI,
//   STOP_LOADING_UI,
// } from "../types/ui"

const initialState = {
  posts: [],
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        ...action.payload,
      }
    case POST_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      }
    default:
      return state
  }
}

export default postsReducer
