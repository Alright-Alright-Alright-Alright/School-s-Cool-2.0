/* eslint-disable no-undef */
import axios from "axios";
import { service, configHeaders } from "../api/axios";
import store from "../store";

export const getCourses = () =>
  service
    .get("/courses", configHeaders())
    .then((response) => response.data.data);

export const getCoursesOverview = () =>
  service
    .get("/courses/overview", configHeaders())
    .then((response) => response.data.data);

export const getCourse = (id) =>
  service
    .get(`/courses/${id}`, configHeaders())
    .then((response) => response.data.data);

export const getLesson = (id) =>
  service
    .get(`/lessons/${id}`, configHeaders())
    .then((response) => response.data.data);

export const createCourse = (title, description, imageUrl) => {
  const data = new FormData();
  console.log(imageUrl);
  if (imageUrl) {
    data.append("imageUrl", imageUrl);
  }
  data.append("title", title);
  data.append("description", description);
  const token = store.getState().user.token;
  const url = `${process.env.REACT_APP_API_URL}/courses`;
  console.log({ token });
  console.log({ url });
  axios({
    method: "post",
    url,
    data,
    headers: {
      "Content-Type": "multipart/form-data",
      "x-auth-token": token,
    },
  }).then((response) => response.data.data);
};
