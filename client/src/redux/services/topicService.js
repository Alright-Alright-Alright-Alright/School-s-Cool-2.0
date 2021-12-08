import { service, setHeaders } from "../api/axios"

export const getTopics = () =>
  service
    .get(`/topics`, setHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

export const getTopic = (topicId) =>
  service
    .get(`/topics/${topicId}`, setHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

export const addTopic = (topicData) =>
  service
    .post(`/topics`, topicData, setHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

export const joinTopic = (topicId) =>
  service
    .put(`/topics/${topicId}/join`, setHeaders())
    .then((responseFromAPI) => responseFromAPI.data)

export const leaveTopic = (topicId) =>
  service
    .put(`/topics/${topicId}/leave`, setHeaders())
    .then((responseFromAPI) => responseFromAPI.data)
