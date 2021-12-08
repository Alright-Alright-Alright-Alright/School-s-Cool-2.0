import axios from "axios"

const authToken = localStorage.getItem("Authorization")

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: { "x-auth-token": authToken },
})

export const getAllPostService = (topicId) =>
  service
    .get(`/topics/${topicId}/posts`)
    .then((responseFromAPI) => responseFromAPI.data)

export const createPostService = (newPost) =>
  service
    .post(`/topics/${newPost.topicId}/posts`, newPost)
    .then((responseFromAPI) => responseFromAPI.data)

export const getPostByIdService = (postId) =>
  service
    .get(`/posts/${postId}`)
    .then((responseFromAPI) => responseFromAPI.data)

export const submitCommentService = (owner, commentBody, postId) =>
  service
    .post(`/posts/${postId}/comments`, owner, commentBody, postId)
    .then((responseFromAPI) => responseFromAPI.data)

export const likePostService = (postId, userId) =>
  service
    .put(`/posts/${postId}/likepost`, userId)
    .then((responseFromAPI) => responseFromAPI.data)

export const unlikePostService = (postId, userId) =>
  service
    .put(`/posts/${postId}/unlikepost`, userId)
    .then((responseFromAPI) => responseFromAPI.data)

export const deletePostService = (postId) =>
  service
    .delete(`/posts/${postId}`)
    .then((responseFromAPI) => responseFromAPI.data)

export const editPostService = (postId, newPost) =>
  service
    .put(`/posts/${postId}`, newPost)
    .then((responseFromAPI) => responseFromAPI.data)
