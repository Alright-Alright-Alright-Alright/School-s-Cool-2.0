import { service, configHeaders } from "../api/axios"

export const getLibraryFiles = () =>
  service
    .get(`/library`, configHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

export const getFile = (fileId) =>
  service
    .get(`/library/${fileId}`)
    .then((responseFromAPI) => responseFromAPI.data)

export const getUserLibraryFiles = () =>
  service
    .get(`/library-user`, configHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

export const addFile = (fileData) =>
  service
    .post(`/library/add-file`, fileData)
    .then((responseFromAPI) => responseFromAPI.data)

export const iLikeThisFile = (fileId) =>
  service
    .put(`/library/${fileId}/liked`)
    .then((responseFromAPI) => responseFromAPI.data)

export const iUnlikeThisFile = (fileId) =>
  service
    .put(`/library/${fileId}/unliked`)
    .then((responseFromAPI) => responseFromAPI.data)

export const fileDeleteService = (fileId) =>
  service.put("/library-delete", { fileId }).then((fileDeleted) => fileDeleted)

export const getCommentsService = (fileId) =>
  service
    .get(`/library/${fileId}/comments`)
    .then((responseFromAPI) => responseFromAPI.data)

export const submitCommentService = (commentBody, fileId) =>
  service
    .post(`/library/${fileId}/comments`, commentBody, fileId)
    .then((responseFromAPI) => responseFromAPI.data)

export const deleteCommentService = (commentId, id) =>
  service
    .put(`/library/deleteComment`, commentId, id)
    .then((responseFromAPI) => responseFromAPI.data)
