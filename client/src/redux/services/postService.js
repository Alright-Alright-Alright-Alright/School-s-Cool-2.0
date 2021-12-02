/* eslint-disable import/prefer-default-export */
import axios from "axios"

const backendUrl = process.env.REACT_APP_API_URL
const authToken = localStorage.getItem("Authorization")

export const getPostByIdService = (postId) => {
  axios
    .get(`${backendUrl}/posts/${postId}`, {
      headers: { Authorization: authToken },
    })
    .then((responseFromAPI) => responseFromAPI.data)
}
