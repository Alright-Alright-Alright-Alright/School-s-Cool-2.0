import { service, configHeaders } from "../api/axios"

export const getAllActivityService = () =>
  service
    .get(`/activities`, configHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

export const getFollowedActivityService = () => {
  service
    .get(`/followedActivities`, configHeaders())
    .then((responseFromAPI) => responseFromAPI.data)
}
