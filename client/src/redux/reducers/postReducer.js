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
      console.log(action.payload)
      return {
        allPosts: state.allPosts.map((eachPost) =>
          eachPost._id === action.payload._id ? action.payload : eachPost
        ),
      }

    // const index = state.allPosts.findIndex(
    //   (post) => post.post_id === action.payload.post_id
    // )
    // state.allPosts[index] = action.payload
    // if (state.post.post_id === action.payload.post_id) {
    //   state.singlePost = action.payload
    // }
    // return {
    //   ...state,
    // }
    case SET_POST:
      return {
        ...state,
        allPosts: [action.payload, ...state.posts],
      }
    case SUBMIT_COMMENT:
      console.log(action.payload)
      return {
        ...state,
        singlePost: {
          ...state.singlePost,
          comments: [action.payload, ...state.singlePost.comments],
        },
      }
    default:
      return state
  }
}

export default postsReducer
