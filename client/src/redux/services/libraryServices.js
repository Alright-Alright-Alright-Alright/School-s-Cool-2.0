import { service, configHeaders } from "../api/axios"

export const getLibraryFiles = () =>
  service
    .get(`/library`, configHeaders())
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
