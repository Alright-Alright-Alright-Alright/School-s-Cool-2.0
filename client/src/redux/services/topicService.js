import axios from "axios"

const backendUrl = process.env.REACT_APP_API_URL
const authToken = localStorage.getItem("Authorization")

export const getTopics = () =>
  axios
    .get(`${backendUrl}/topics`, {
      headers: { Authorization: authToken },
    })
    .then((responseFromAPI) => responseFromAPI.data)

export const addTopic = (topicData) =>
  axios
    .post(`${backendUrl}/topics`, topicData, {
      headers: { Authorization: authToken },
    })
    .then((responseFromAPI) => responseFromAPI.data)
