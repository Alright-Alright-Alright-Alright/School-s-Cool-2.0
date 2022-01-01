/* eslint-disable no-unused-vars */
import axios from "axios"
import { service, configHeaders } from "../api/axios"
import eLearningModuleQuery from "./contentful/queries/eLearningModule"
import eLearningModuleCollectionQuery from "./contentful/queries/eLearningModuleCollection"
import eLearningLessonQuery from "./contentful/queries/eLearningLesson"

const baseUrl = "https://graphql.contentful.com/content/v1/spaces"
const spaceId = "jfc6o2gu3xdp"

export const getAllCoursesService = async () => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_TOKEN}`,
  }

  const response = await axios.post(
    `${baseUrl}/${spaceId}/`,
    {
      query: eLearningModuleCollectionQuery,
    },
    {
      headers,
    }
  )
  return response.data.data.eLearningModuleCollection.items
}

export const getSingleCourseService = async (courseId) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_TOKEN}`,
  }

  const response = await axios.post(
    `${baseUrl}/${spaceId}/`,
    {
      query: eLearningModuleQuery(courseId),
    },
    {
      headers,
    }
  )
  return response.data.data
}

export const getSingleLessonService = async (lessonId) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_TOKEN}`,
  }

  const response = await axios.post(
    `${baseUrl}/${spaceId}/`,
    {
      query: eLearningLessonQuery(lessonId),
    },
    {
      headers,
    }
  )
  return response.data.data
}

export const joinCourseService = (courseId) =>
  service
    .put(`/joinCourse`, courseId)
    .then((responseFromAPI) => responseFromAPI.data)

export const leaveCourseService = (courseId) =>
  service
    .put(`/leaveCourse`, courseId)
    .then((responseFromAPI) => responseFromAPI.data)
