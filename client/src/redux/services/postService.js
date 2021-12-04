import axios from "axios"

const authToken = localStorage.getItem("Authorization")

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: { Authorization: authToken },
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
