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
  if (imageUrl) {
    data.append("imageUrl", imageUrl);
  }
  data.append("title", title);
  data.append("description", description);
  const token = store.getState().user.token;
  const url = `${process.env.REACT_APP_API_URL}/courses`;
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

export const createLesson = async (courseId, title, description) => {
  const data = { courseId, title, description };

  const res = await service.post(`/lessons`, data, configHeaders());
  return res.data.data;
};

export const updateLesson = async (lessonId, items) => {
  const res = await service.put(`/lessons/${lessonId}`, items, configHeaders());
  return res.data.data;
};
