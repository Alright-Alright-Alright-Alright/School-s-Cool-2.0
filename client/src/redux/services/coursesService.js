/* eslint-disable no-unused-vars */
import { service, configHeaders } from "../api/contentfulAxios"
import eLearningModuleQuery from "./contentful/queries/eLearningModule"
import eLearningModuleCollectionQuery from "./contentful/queries/eLearningModuleCollection"

const baseUrl = "https://graphql.contentful.com/content/v1/spaces"
const spaceId = "jfc6o2gu3xdp"

export const getAllCoursesService = () =>
  window
    .fetch(`${baseUrl}/${spaceId}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer JshTLIHlt9_LZReh_NueOvjujiVyDuie0dGY5Oezjec",
      },
      // send the GraphQL query
      body: JSON.stringify({ query: eLearningModuleCollectionQuery }),
    })
    .then((response) => response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.error(errors)
      }
      return data.eLearningModuleCollection.items
    })

export const getSingleCourseService = (courseId) =>
  window
    .fetch(`${baseUrl}/${spaceId}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer JshTLIHlt9_LZReh_NueOvjujiVyDuie0dGY5Oezjec",
      },
      // send the GraphQL query
      body: JSON.stringify({ query: eLearningModuleQuery(courseId) }),
    })
    .then((response) => response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.error(errors)
      }
      return data
    })

// export const getAllCoursesService = () =>
//   service
//     .post(`${baseUrl}/jfc6o2gu3xdp/`, eLearningModuleCollectionQuery, config)
//     .then((responseFromAPI) => console.log(responseFromAPI.data))

// export const getSingleCourseService = () =>
//   service
//     .post(`/jfc6o2gu3xdp/`, configHeaders(), eLearningModuleQuery)
//     .then((responseFromAPI) => responseFromAPI.data)
