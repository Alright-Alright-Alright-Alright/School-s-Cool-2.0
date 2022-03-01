/* eslint-disable consistent-return */
import { service, configHeaders } from "../api/axios"

export const getAllPostService = (topicId) =>
  service
    .get(`/topics/${topicId}/posts`, configHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

export const getAllEventPostService = (eventId) =>
  service
    .get(`/events/${eventId}/posts`, configHeaders())
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

export const deletePostService = async (postId) => {
  try {
    const deletingPost = await service.delete(
      `/posts/${postId}`,
      configHeaders()
    )
    return deletingPost
  } catch (error) {
    console.log(error)
  }
}

export const editPostService = (postId, newPost) =>
  service
    .put(`/posts/${postId}`, newPost)
    .then((responseFromAPI) => responseFromAPI.data)
