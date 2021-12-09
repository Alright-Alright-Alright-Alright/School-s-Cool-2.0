import { service, configHeaders } from "../api/axios"

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
