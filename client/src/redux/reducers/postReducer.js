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
} from "../types/posts"
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
    // case LIKE_POST:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   }
    // case UNLIKE_POST:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   }
    case LIKE_POST:
      return {
        posts: state.posts.map((eachPost) =>
          eachPost._id === action.payload.post._id
            ? action.payload.post
            : eachPost
        ),
      }
    case UNLIKE_POST:
      return {
        posts: state.posts.map((eachPost) =>
          eachPost._id === action.payload.post._id
            ? action.payload.post
            : eachPost
        ),
      }
    // case LIKE_POST:
    // case UNLIKE_POST:
    //   const index = state.posts.findIndex(
    //     (post) => post.postId === action.payload.postId
    //   )
    //   state.posts[index] = action.payload
    //   if (state.post.postId === action.payload.postId) {
    //     state.post = action.payload
    //   }
    //   return {
    //     ...state,
    //   }
    default:
      return state
  }
}

export default postsReducer
