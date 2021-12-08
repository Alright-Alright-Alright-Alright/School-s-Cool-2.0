import axios from "axios"

const authToken = localStorage.getItem("Authorization")

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: { "x-access-token": authToken },
})

export const getTopics = () =>
  service.get(`/topics`).then((responseFromAPI) => responseFromAPI.data)

export const getTopic = (topicId) =>
  service
    .get(`/topics/${topicId}`)
    .then((responseFromAPI) => responseFromAPI.data)

export const addTopic = (topicData) =>
  service
    .post(`/topics`, topicData)
    .then((responseFromAPI) => responseFromAPI.data)

export const joinTopic = (topicId) =>
  service
    .put(`/topics/${topicId}/join`)
    .then((responseFromAPI) => responseFromAPI.data)

export const leaveTopic = (topicId) =>
  service
    .put(`/topics/${topicId}/leave`)
    .then((responseFromAPI) => responseFromAPI.data)
