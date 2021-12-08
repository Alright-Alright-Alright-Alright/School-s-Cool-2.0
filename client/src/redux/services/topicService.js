import axios from "axios"
import store from "../store"

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
})

const configHeaders = () => {
  const { token } = store.getState().user
  service.defaults.headers.common["x-auth-token"] = `Bearer ${token}`
}

export const getTopics = () =>
  service
    .get(`/topics`, configHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

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
