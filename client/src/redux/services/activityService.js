import { service, configHeaders } from "../api/axios"

export const getAllActivityService = () =>
  service
    .get(`/activities`, configHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

export const getFollowedActivityService = () =>
  service
    .get(`/followedActivities`, configHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

export const getStreamTokenService = (userId) =>
  service
    .post("/getStreamToken", userId, configHeaders())
    .then((responseFromAPI) => {
      localStorage.setItem("StreamToken", responseFromAPI.data)

      return responseFromAPI.data
    })
