/* eslint-disable no-unused-vars */
import axios from "axios"
import { service, configHeaders } from "../api/contentfulAxios"
import eLearningModuleQuery from "./contentful/queries/eLearningModule"
import eLearningModuleCollectionQuery from "./contentful/queries/eLearningModuleCollection"

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
