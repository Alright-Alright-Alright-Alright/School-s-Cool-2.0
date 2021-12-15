import { service, configHeaders } from "../api/axios"

const getAllActivityService = () =>
  service
    .get(`/activities`, configHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

export default getAllActivityService
