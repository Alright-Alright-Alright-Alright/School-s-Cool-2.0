import { service, setHeaders } from "../api/axios"

export const getAllPostService = (topicId) =>
  service
    .get(`/topics/${topicId}/posts`, setHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

export const createPostService = (newPost) =>
  service
    .post(`/topics/${newPost.topicId}/posts`, newPost, setHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

export const getPostByIdService = (postId) =>
  service
    .get(`/posts/${postId}`)
    .then((responseFromAPI) => responseFromAPI.data)

export const submitCommentService = (owner, commentBody, postId) =>
  service
    .post(`/posts/${postId}/comments`, owner, commentBody, postId, setHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

export const likePostService = (postId, userId) =>
  service
    .put(`/posts/${postId}/likepost`, userId, setHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

export const unlikePostService = (postId, userId) =>
  service
    .put(`/posts/${postId}/unlikepost`, userId, setHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

export const deletePostService = (postId) =>
  service
    .delete(`/posts/${postId}`, setHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

export const editPostService = (postId, newPost) =>
  service
    .put(`/posts/${postId}`, newPost, setHeaders())
    .then((responseFromAPI) => responseFromAPI.data)
